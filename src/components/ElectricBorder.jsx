import { useEffect, useRef } from "react";

export default function ElectricBorder({
  children,
  className = "",
  color1 = "#00f5ff",
  color2 = "#ff006e",
  speed = 3,
  thickness = 2,
  borderRadius = 12,
  glowSize = 8,
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    let t = 0;

    const resize = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };
    resize();

    const observer = new ResizeObserver(resize);
    observer.observe(container);

    const lerp = (a, b, x) => a + (b - a) * x;

    const hexToRgb = (hex) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return { r, g, b };
    };

    const c1 = hexToRgb(color1);
    const c2 = hexToRgb(color2);

    const draw = () => {
      t += 0.015 * speed;
      const w = canvas.width;
      const h = canvas.height;
      const r = borderRadius;

      ctx.clearRect(0, 0, w, h);

      // Build path points along rounded rect perimeter
      const perimeter = 2 * (w + h) - 8 * r + 2 * Math.PI * r;
      const segments = 300;

      const points = [];
      // top edge
      for (let i = 0; i <= segments; i++) {
        const frac = i / segments;
        const dist = frac * perimeter;

        // top-left corner arc
        const tlArc = (Math.PI / 2) * r;
        // top edge length
        const topEdge = w - 2 * r;
        // top-right corner arc
        const trArc = (Math.PI / 2) * r;
        // right edge
        const rightEdge = h - 2 * r;
        // bottom-right corner
        const brArc = (Math.PI / 2) * r;
        // bottom edge
        const botEdge = w - 2 * r;
        // bottom-left corner
        const blArc = (Math.PI / 2) * r;
        // left edge
        const leftEdge = h - 2 * r;

        let x, y;
        let d = dist;

        if (d < topEdge) {
          x = r + d;
          y = 0;
        } else if (d < topEdge + trArc) {
          const a = ((d - topEdge) / trArc) * (Math.PI / 2) - Math.PI / 2;
          x = w - r + Math.cos(a) * r;
          y = r + Math.sin(a) * r;
        } else if (d < topEdge + trArc + rightEdge) {
          x = w;
          y = r + (d - topEdge - trArc);
        } else if (d < topEdge + trArc + rightEdge + brArc) {
          const a = ((d - topEdge - trArc - rightEdge) / brArc) * (Math.PI / 2);
          x = w - r + Math.cos(a) * r;
          y = h - r + Math.sin(a) * r;
        } else if (d < topEdge + trArc + rightEdge + brArc + botEdge) {
          x = w - r - (d - topEdge - trArc - rightEdge - brArc);
          y = h;
        } else if (d < topEdge + trArc + rightEdge + brArc + botEdge + blArc) {
          const a = ((d - topEdge - trArc - rightEdge - brArc - botEdge) / blArc) * (Math.PI / 2) + Math.PI / 2;
          x = r + Math.cos(a) * r;
          y = h - r + Math.sin(a) * r;
        } else if (d < topEdge + trArc + rightEdge + brArc + botEdge + blArc + leftEdge) {
          x = 0;
          y = h - r - (d - topEdge - trArc - rightEdge - brArc - botEdge - blArc);
        } else {
          const a = ((d - topEdge - trArc - rightEdge - brArc - botEdge - blArc - leftEdge) / tlArc) * (Math.PI / 2) + Math.PI;
          x = r + Math.cos(a) * r;
          y = r + Math.sin(a) * r;
        }

        points.push({ x, y, frac });
      }

      // Draw electric border
      for (let i = 0; i < points.length - 1; i++) {
        const p = points[i];
        const localT = (p.frac + t) % 1;

        // Electric noise
        const noise = Math.sin(p.frac * 60 + t * 8) * 0.5 +
          Math.sin(p.frac * 120 + t * 12) * 0.3 +
          Math.sin(p.frac * 30 + t * 5) * 0.2;

        const colorMix = (Math.sin(p.frac * Math.PI * 2 + t * 2) + 1) / 2;
        const r2 = Math.round(lerp(c1.r, c2.r, colorMix));
        const g2 = Math.round(lerp(c1.g, c2.g, colorMix));
        const b2 = Math.round(lerp(c1.b, c2.b, colorMix));

        const alpha = 0.6 + noise * 0.4;
        const lineWidth = thickness + noise * 1.5;

        // Glow layer
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(points[i + 1].x, points[i + 1].y);
        ctx.strokeStyle = `rgba(${r2},${g2},${b2},${alpha * 0.3})`;
        ctx.lineWidth = lineWidth + glowSize;
        ctx.lineCap = "round";
        ctx.filter = `blur(${glowSize / 2}px)`;
        ctx.stroke();

        // Core line
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(points[i + 1].x, points[i + 1].y);
        ctx.strokeStyle = `rgba(${r2},${g2},${b2},${alpha})`;
        ctx.lineWidth = lineWidth;
        ctx.filter = "none";
        ctx.stroke();

        // Spark dots
        if (Math.random() < 0.01) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, Math.random() * 3 + 1, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,0.9)`;
          ctx.fill();
        }
      }

      frameRef.current = requestAnimationFrame(draw);
    };

    frameRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frameRef.current);
      observer.disconnect();
    };
  }, [color1, color2, speed, thickness, borderRadius, glowSize]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 10,
          borderRadius,
        }}
      />
      {children}
    </div>
  );
}