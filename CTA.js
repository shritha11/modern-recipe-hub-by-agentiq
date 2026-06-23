import React from 'react';

const C = {
  bg: "#0f0a06",
  bgAlt: "#1a120e",
  surface: "rgba(255,255,255,0.04)",
  surfaceHover: "rgba(255,255,255,0.07)",
  border: "rgba(255,255,255,0.08)",
  borderHover: "rgba(255,255,255,0.18)",
  primary: "#d97706",
  primaryGlow: "rgba(217,119,6,0.25)",
  secondary: "#facc15",
  text: "#ffffff",
  textMuted: "rgba(255,255,255,0.5)",
  textSubtle: "rgba(255,255,255,0.25)",
  heroSize: "clamp(60px, 8vw, 100px)",
  h2Size: "clamp(36px, 5vw, 64px)",
  heroWeight: 700,
  heroTracking: "-0.05em",
  heroLH: 0.9,
  font: "'Playfair Display', serif",
  sectionPad: "120px 60px",
  maxW: "1200px",
  cardPad: "24px",
  gap: "16px",
  cardR: "16px",
  btnR: "50px",
  shadow: "0 2px 20px rgba(0,0,0,0.3)",
  glow: "0 0 40px rgba(217,119,6,0.25)",
  btnShadow: "0 6px 24px rgba(217,119,6,0.35)",
  ease: "0.3s ease",
  lift: "translateY(-2px)",
};

export default function CTA() {
  return (
    <section
      style={{
        padding: C.sectionPad,
        position: "relative",
        overflow: "hidden",
        background: C.bgAlt,
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "600px",
          height: "300px",
          background: `radial-gradient(ellipse, ${C.primaryGlow} 0%, transparent 70%)`,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      ></div>
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "640px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: C.h2Size,
            fontWeight: C.heroWeight,
            letterSpacing: C.heroTracking,
            lineHeight: C.heroLH,
            color: C.text,
            background: `linear-gradient(90deg, ${C.primary}, ${C.secondary})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Discover the Joy of Cooking
        </h2>
        <p
          style={{
            fontSize: "18px",
            color: C.textMuted,
            marginBottom: "40px",
          }}
        >
          Elevate your culinary skills with recipes that inspire and delight.
        </p>
        <button
          style={{
            padding: "12px 32px",
            fontSize: "16px",
            fontWeight: "bold",
            color: C.text,
            background: C.primary,
            border: "none",
            borderRadius: C.btnR,
            cursor: "pointer",
            boxShadow: C.btnShadow,
            transition: C.ease,
          }}
          onMouseEnter={(e) =>
            (e.target.style.transform = C.lift)
          }
          onMouseLeave={(e) =>
            (e.target.style.transform = "translateY(0)")
          }
        >
          Start cooking now
        </button>
        <p
          style={{
            fontSize: "14px",
            color: C.textSubtle,
            marginTop: "16px",
          }}
        >
          No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
}