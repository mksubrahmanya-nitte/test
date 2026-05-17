// ??$$$ newer code
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Splash() {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [removed, setRemoved] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Force SVG to restart its animation from frame 0 by remounting it
    setKey(k => k + 1);
    setMounted(true);
    document.body.style.overflow = "hidden";

    // Give SVG time to fully play before fading out
    // Increase this to match your SVG's total animation duration
    const ANIMATION_DURATION = 2800; // ms — tune this to your SVG length
    const FADE_DURATION = 600;

    const fadeTimer = setTimeout(() => setVisible(false), ANIMATION_DURATION);
    const removeTimer = setTimeout(() => {
      setRemoved(true);
      document.body.style.overflow = "";
    }, ANIMATION_DURATION + FADE_DURATION);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!mounted) {
    // SSR: white overlay, no logo yet — prevents flash
    return (
      <div style={{
        position: "fixed", inset: 0,
        backgroundColor: "#ffffff",
        zIndex: 99999,
      }} />
    );
  }

  if (removed) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "#ffffff",
        zIndex: 99999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: visible ? 1 : 0,
        transition: `opacity ${600}ms ease-in-out`,
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
        {/* key prop forces img remount so SVG animation restarts from frame 0 */}
        <div style={{ position: "relative", width: "228px", height: "263px" }}>
          <Image
            key={key}
            src={`/images/logo-animation.svg?v=${key}`}
            alt="JG University"
            width={228}
            height={263}
            priority
            unoptimized
          />
        </div>

        <div style={{
          marginTop: "20px",
          fontSize: "13px",
          fontWeight: 600,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#aaaaaa",
          animation: "splash-pulse 1.5s infinite ease-in-out",
        }}>
          JG University
        </div>
      </div>

      <style>{`
        @keyframes splash-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
