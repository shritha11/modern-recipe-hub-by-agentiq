import React from 'react';

const C = {
  bg: "#b8860b",
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

export default function Footer() {
  return (
    <footer
      style={{
        background: C.bg,
        borderTop: `1px solid ${C.border}`,
        padding: "80px 80px 40px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "60px",
        }}
      >
        <div style={{ maxWidth: "240px" }}>
          <h1
            style={{
              fontSize: "20px",
              fontWeight: 700,
              background: `linear-gradient(90deg, ${C.primary}, ${C.secondary})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              margin: 0,
            }}
          >
            Modern Bites
          </h1>
          <p
            style={{
              fontSize: "14px",
              color: C.textSubtle,
              marginTop: "8px",
            }}
          >
            Discover recipes that inspire and delight.
          </p>
        </div>
        <div style={{ display: "flex", gap: "64px" }}>
          <div>
            <h3
              style={{
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: C.textSubtle,
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              Recipes
            </h3>
            <a
              href="#"
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseOver={(e) => (e.target.style.color = C.text)}
              onMouseOut={(e) => (e.target.style.color = C.textMuted)}
            >
              Breakfast
            </a>
            <a
              href="#"
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseOver={(e) => (e.target.style.color = C.text)}
              onMouseOut={(e) => (e.target.style.color = C.textMuted)}
            >
              Lunch
            </a>
            <a
              href="#"
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseOver={(e) => (e.target.style.color = C.text)}
              onMouseOut={(e) => (e.target.style.color = C.textMuted)}
            >
              Dinner
            </a>
            <a
              href="#"
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseOver={(e) => (e.target.style.color = C.text)}
              onMouseOut={(e) => (e.target.style.color = C.textMuted)}
            >
              Desserts
            </a>
          </div>
          <div>
            <h3
              style={{
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: C.textSubtle,
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              Resources
            </h3>
            <a
              href="#"
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseOver={(e) => (e.target.style.color = C.text)}
              onMouseOut={(e) => (e.target.style.color = C.textMuted)}
            >
              Cooking Tips
            </a>
            <a
              href="#"
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseOver={(e) => (e.target.style.color = C.text)}
              onMouseOut={(e) => (e.target.style.color = C.textMuted)}
            >
              Ingredient Guides
            </a>
            <a
              href="#"
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseOver={(e) => (e.target.style.color = C.text)}
              onMouseOut={(e) => (e.target.style.color = C.textMuted)}
            >
              Meal Planning
            </a>
            <a
              href="#"
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseOver={(e) => (e.target.style.color = C.text)}
              onMouseOut={(e) => (e.target.style.color = C.textMuted)}
            >
              Seasonal Recipes
            </a>
          </div>
          <div>
            <h3
              style={{
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: C.textSubtle,
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              Company
            </h3>
            <a
              href="#"
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseOver={(e) => (e.target.style.color = C.text)}
              onMouseOut={(e) => (e.target.style.color = C.textMuted)}
            >
              About Us
            </a>
            <a
              href="#"
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseOver={(e) => (e.target.style.color = C.text)}
              onMouseOut={(e) => (e.target.style.color = C.textMuted)}
            >
              Careers
            </a>
            <a
              href="#"
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseOver={(e) => (e.target.style.color = C.text)}
              onMouseOut={(e) => (e.target.style.color = C.textMuted)}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: `1px solid ${C.border}`,
          paddingTop: "32px",
          marginTop: "0",
        }}
      >
        <p
          style={{
            fontSize: "13px",
            color: C.textSubtle,
          }}
        >
          © 2026 Modern Bites. All rights reserved.
        </p>
        <p
          style={{
            fontSize: "13px",
            color: C.textSubtle,
          }}
        >
          Built with AgentIQ
        </p>
      </div>
    </footer>
  );
}