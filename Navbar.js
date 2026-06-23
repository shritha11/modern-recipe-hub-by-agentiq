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

export default function Navbar() {
  const [hoveredLink, setHoveredLink] = React.useState(null);
  const navLinks = ["Home", "Features", "Popular Recipes", "Contact"];

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 80px",
        height: "68px",
        background: C.bgAlt,
      }}
    >
      <div
        style={{
          fontSize: "20px",
          fontWeight: 800,
          fontFamily: C.font,
          background: `linear-gradient(135deg, ${C.primary}, ${C.secondary})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Modern Recipe Hub
      </div>
      <div style={{ display: "flex", gap: "32px" }}>
        {navLinks.map((link, index) => (
          <a
            key={index}
            onMouseEnter={() => setHoveredLink(index)}
            onMouseLeave={() => setHoveredLink(null)}
            style={{
              fontSize: "14px",
              cursor: "pointer",
              textDecoration: "none",
              color: hoveredLink === index ? C.text : C.textMuted,
              transition: C.ease,
            }}
          >
            {link}
          </a>
        ))}
      </div>
      <button
        style={{
          background: `linear-gradient(135deg, ${C.primary}, ${C.secondary})`,
          padding: "9px 22px",
          borderRadius: C.btnR,
          border: "none",
          color: "#fff",
          fontSize: "13px",
          fontWeight: 600,
          cursor: "pointer",
          boxShadow: C.btnShadow,
          transition: C.ease,
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "translateY(-1px)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = "translateY(0)")
        }
      >
        Get Started
      </button>
    </div>
  );
}