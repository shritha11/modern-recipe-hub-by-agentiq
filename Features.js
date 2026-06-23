import React from 'react';
import { Zap, Globe, Shield, TrendingUp, Layers, Heart } from 'lucide-react';

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

export default function Features() {
  const cards = [
    {
      icon: <Zap color={C.primary} size={40} />,
      title: "Quick Recipes",
      body: "Find recipes that fit your busy schedule.",
    },
    {
      icon: <Globe color={C.primary} size={40} />,
      title: "Global Flavors",
      body: "Explore dishes from around the world.",
    },
    {
      icon: <Shield color={C.primary} size={40} />,
      title: "Dietary Filters",
      body: "Easily find recipes for any dietary need.",
    },
    {
      icon: <TrendingUp color={C.primary} size={40} />,
      title: "Trending Dishes",
      body: "See what's popular in the food world.",
    },
    {
      icon: <Layers color={C.primary} size={40} />,
      title: "Step-by-Step Guides",
      body: "Follow clear instructions for perfect results.",
    },
    {
      icon: <Heart color={C.primary} size={40} />,
      title: "Save Favorites",
      body: "Keep all your favorite recipes in one place.",
    },
  ];

  return (
    <section
      style={{
        padding: C.sectionPad,
        background: C.bgAlt,
        color: C.text,
        fontFamily: C.font,
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <p
          style={{
            color: C.textMuted,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "8px",
          }}
        >
          WHY MODERN BITES
        </p>
        <h2
          style={{
            fontSize: C.h2Size,
            fontWeight: C.heroWeight,
            letterSpacing: C.heroTracking,
            lineHeight: C.heroLH,
            margin: 0,
          }}
        >
          Features you'll love
        </h2>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: C.gap,
          maxWidth: C.maxW,
          margin: "0 auto",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              background: C.surface,
              borderRadius: C.cardR,
              padding: C.cardPad,
              textAlign: "center",
              boxShadow: C.shadow,
              transition: C.ease,
            }}
          >
            <div
              style={{
                marginBottom: "16px",
              }}
            >
              {card.icon}
            </div>
            <h3
              style={{
                color: C.text,
                fontSize: "20px",
                fontWeight: 600,
                margin: "0 0 8px 0",
              }}
            >
              {card.title}
            </h3>
            <p
              style={{
                color: C.textMuted,
                fontSize: "16px",
                lineHeight: "1.5",
                margin: 0,
              }}
            >
              {card.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}