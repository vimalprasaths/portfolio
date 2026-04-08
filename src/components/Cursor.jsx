import { useEffect, useRef } from "react";
import "./Cursor.css";

export default function Cursor() {
  const dotRef   = useRef(null);
  const ringRef  = useRef(null);
  const trailX   = useRef(0);
  const trailY   = useRef(0);
  const mouseX   = useRef(0);
  const mouseY   = useRef(0);

  useEffect(() => {
    const onMove = (e) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX - 5 + "px";
        dotRef.current.style.top  = e.clientY - 5 + "px";
      }
    };

    const onEnter = () => ringRef.current?.classList.add("h");
    const onLeave = () => ringRef.current?.classList.remove("h");

    document.addEventListener("mousemove", onMove);

    const hoverEls = document.querySelectorAll(
      "a, button, .vp-proj-card, .vp-skill-tag, .vp-cert-card, .vp-edu-card, .vp-tl-item, .vp-skill-group, .vp-stat"
    );
    hoverEls.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    let raf;
    const tick = () => {
      trailX.current += (mouseX.current - trailX.current) * 0.12;
      trailY.current += (mouseY.current - trailY.current) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = trailX.current - 17 + "px";
        ringRef.current.style.top  = trailY.current - 17 + "px";
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("mousemove", onMove);
      hoverEls.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="vp-cursor" />
      <div ref={ringRef} className="vp-cursor-ring" />
    </>
  );
}
