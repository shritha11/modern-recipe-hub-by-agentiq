import React, { useState } from 'react';

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

export default function Hero() {
  const [hoverPrimary, setHoverPrimary] = useState(false);
  const gradientWords = ["Modern", "recipes"];

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: C.sectionPad,
        background: C.bg,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: C.maxW,
          margin: "0 auto",
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "80px",
        }}
      >
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: "11px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: C.primary,
              fontWeight: 600,
              marginBottom: "24px",
            }}
          >
            MODERN RECIPE HUB
          </div>
          <h1
            style={{
              fontSize: C.heroSize,
              fontWeight: C.heroWeight,
              letterSpacing: C.heroTracking,
              lineHeight: C.heroLH,
              marginBottom: "24px",
            }}
          >
            {`Modern recipes for every taste`.split(" ").map((word, index) => (
              <span
                key={index}
                style={
                  gradientWords.includes(word)
                    ? {
                        background: `linear-gradient(135deg, ${C.primary}, ${C.secondary})`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        display: "inline",
                      }
                    : { color: C.text, display: "inline" }
                }
              >
                {word}{" "}
              </span>
            ))}
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: C.textMuted,
              lineHeight: 1.75,
              maxWidth: "520px",
              marginBottom: "40px",
            }}
          >
            Explore, save, and share recipes designed for today's home cook.
          </p>
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <button
              onMouseEnter={() => setHoverPrimary(true)}
              onMouseLeave={() => setHoverPrimary(false)}
              style={{
                background: `linear-gradient(135deg, ${C.primary}, ${C.secondary})`,
                padding: "14px 32px",
                borderRadius: C.btnR,
                border: "none",
                color: "#fff",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: hoverPrimary ? C.glow : C.btnShadow,
                transform: hoverPrimary ? C.lift : "none",
                transition: C.ease,
              }}
            >
              Start cooking now
            </button>
            <button
              style={{
                background: "transparent",
                border: `1px solid rgba(255,255,255,0.2)`,
                padding: "14px 32px",
                borderRadius: C.btnR,
                color: C.text,
                cursor: "pointer",
                transition: C.ease,
              }}
              onMouseEnter={(e) =>
                (e.target.style.background = C.surfaceHover)
              }
              onMouseLeave={(e) => (e.target.style.background = "transparent")}
            >
              Browse recipes →
            </button>
          </div>
        </div>
        <div
          style={{
            flex: 1,
            background: C.bgAlt,
            border: `1px solid ${C.border}`,
            borderRadius: "16px",
            padding: "24px",
            boxShadow: C.shadow,
            minHeight: "380px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "8px",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "#ff5f56",
              }}
            ></div>
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "#ffbd2e",
              }}
            ></div>
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "#27c93f",
              }}
            ></div>
          </div>
          <div style={{ display: "flex", flex: 1 }}>
            <div
              style={{
                background: C.surface,
                width: "40px",
                marginRight: "16px",
              }}
            ></div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    flex: 1,
                    background: C.surface,
                    border: `1px solid ${C.border}`,
                    borderRadius: "8px",
                    padding: "16px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "12px",
                      color: C.textSubtle,
                      marginBottom: "8px",
                    }}
                  >
                    Recipes
                  </div>
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      color: C.text,
                    }}
                  >
                    120
                  </div>
                </div>
                <div
                  style={{
                    flex: 1,
                    background: C.surface,
                    border: `1px solid ${C.border}`,
                    borderRadius: "8px",
                    padding: "16px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "12px",
                      color: C.textSubtle,
                      marginBottom: "8px",
                    }}
                  >
                    Favorites
                  </div>
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      color: C.text,
                    }}
                  >
                    45
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  gap: "8px",
                }}
              >
                {Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    style={{
                      flex: 1,
                      height: `${Math.random() * 50 + 20}px`,
                      background: C.primary,
                      opacity: 0.5,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          pointerEvents: "none",
          top: "-10%",
          right: "-5%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: `radial-gradient(ellipse, ${C.primaryGlow} 0%, transparent 70%)`,
          filter: "blur(40px)",
        }}
      ></div>
    </section>
  );
}