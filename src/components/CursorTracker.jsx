import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CursorTracker() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(true);
  const trailRef = useRef([]);
  const frameRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = "none";

    const onMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      setPos({ x: e.clientX, y: e.clientY });
      setHidden(false);

      // Check if hovering over interactive element
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const isInteractive = el?.closest("a, button, input, textarea, [role='button']");
      setHovering(!!isInteractive);
    };

    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);
    const onLeave = () => setHidden(true);
    const onEnter = () => setHidden(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    // Trail animation loop
    const TRAIL_LENGTH = 16;
    const animate = () => {
      trailRef.current = [
        { x: mouseRef.current.x, y: mouseRef.current.y },
        ...trailRef.current.slice(0, TRAIL_LENGTH - 1),
      ];
      setTrail([...trailRef.current]);
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <AnimatePresence>
      {!hidden && (
        <>
          {/* Trail dots */}
          {trail.map((point, i) => {
            const progress = 1 - i / trail.length;
            const size = progress * (hovering ? 10 : 6);
            const opacity = progress * 0.4;
            return (
              <div
                key={i}
                style={{
                  position: "fixed",
                  left: point.x,
                  top: point.y,
                  width: size,
                  height: size,
                  borderRadius: "50%",
                  background: hovering
                    ? `rgba(255, 0, 110, ${opacity})`
                    : `rgba(0, 245, 255, ${opacity})`,
                  transform: "translate(-50%, -50%)",
                  pointerEvents: "none",
                  zIndex: 99998,
                  transition: "background 0.3s",
                  boxShadow: i === 0
                    ? hovering
                      ? `0 0 8px rgba(255,0,110,0.6)`
                      : `0 0 8px rgba(0,245,255,0.6)`
                    : "none",
                }}
              />
            );
          })}

          {/* Outer ring */}
          <motion.div
            animate={{
              x: pos.x - (hovering ? 24 : 20),
              y: pos.y - (hovering ? 24 : 20),
              width: hovering ? 48 : 40,
              height: hovering ? 48 : 40,
              borderColor: hovering
                ? "rgba(255,0,110,0.8)"
                : "rgba(0,245,255,0.6)",
              scale: clicking ? 0.7 : 1,
            }}
            transition={{
              x: { duration: 0.12, ease: "linear" },
              y: { duration: 0.12, ease: "linear" },
              width: { duration: 0.2 },
              height: { duration: 0.2 },
              scale: { duration: 0.1 },
              borderColor: { duration: 0.3 },
            }}
            style={{
              position: "fixed",
              borderRadius: "50%",
              border: "1.5px solid",
              pointerEvents: "none",
              zIndex: 99999,
              boxShadow: hovering
                ? "0 0 15px rgba(255,0,110,0.3), inset 0 0 10px rgba(255,0,110,0.05)"
                : "0 0 15px rgba(0,245,255,0.3), inset 0 0 10px rgba(0,245,255,0.05)",
            }}
          />

          {/* Inner dot */}
          <motion.div
            animate={{
              x: pos.x - (clicking ? 6 : 4),
              y: pos.y - (clicking ? 6 : 4),
              width: clicking ? 12 : 8,
              height: clicking ? 12 : 8,
              background: hovering ? "#ff006e" : "#00f5ff",
            }}
            transition={{
              x: { duration: 0.04, ease: "linear" },
              y: { duration: 0.04, ease: "linear" },
              width: { duration: 0.15 },
              height: { duration: 0.15 },
              background: { duration: 0.3 },
            }}
            style={{
              position: "fixed",
              borderRadius: "50%",
              pointerEvents: "none",
              zIndex: 99999,
              boxShadow: hovering
                ? "0 0 10px rgba(255,0,110,0.9)"
                : "0 0 10px rgba(0,245,255,0.9)",
            }}
          />

          {/* Click ripple */}
          <AnimatePresence>
            {clicking && (
              <motion.div
                key="ripple"
                initial={{ width: 0, height: 0, opacity: 0.8, x: pos.x, y: pos.y }}
                animate={{ width: 80, height: 80, opacity: 0, x: pos.x - 40, y: pos.y - 40 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{
                  position: "fixed",
                  borderRadius: "50%",
                  border: `2px solid ${hovering ? "#ff006e" : "#00f5ff"}`,
                  pointerEvents: "none",
                  zIndex: 99997,
                  boxShadow: hovering
                    ? "0 0 20px rgba(255,0,110,0.4)"
                    : "0 0 20px rgba(0,245,255,0.4)",
                }}
              />
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
}