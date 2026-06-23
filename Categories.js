import React from 'react';

const C = {
  bg:           "#0f0a06",
  bgAlt:        "#1a120e",
  surface:      "rgba(255,255,255,0.04)",
  surfaceHover: "rgba(255,255,255,0.07)",
  border:       "rgba(255,255,255,0.08)",
  borderHover:  "rgba(255,255,255,0.18)",
  primary:      "#d97706",
  primaryGlow:  "rgba(217,119,6,0.25)",
  secondary:    "#facc15",
  text:         "#ffffff",
  textMuted:    "rgba(255,255,255,0.5)",
  textSubtle:   "rgba(255,255,255,0.25)",
  heroSize:     "clamp(60px, 8vw, 100px)",
  h2Size:       "clamp(36px, 5vw, 64px)",
  heroWeight:   700,
  heroTracking: "-0.05em",
  heroLH:       0.9,
  font:         "'Playfair Display', serif",
  sectionPad:   "120px 60px",
  maxW:         "1200px",
  cardPad:      "24px",
  gap:          "16px",
  cardR:        "16px",
  btnR:         "50px",
  shadow:       "0 2px 20px rgba(0,0,0,0.3)",
  glow:         "0 0 40px rgba(217,119,6,0.25)",
  btnShadow:    "0 6px 24px rgba(217,119,6,0.35)",
  ease:         "0.3s ease",
  lift:         "translateY(-2px)",
};

export default function Categories() {
  const categories = [
    {
      name: "Quick & Easy",
      image: "https://images.unsplash.com/photo-1512058454905-6b841e7ad132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHwyfHxSZWNpcGUlMjB3ZWJzaXRlJTBEJTBBVXNlciUyMGRpcmVjdGlvbiUzQSUyMG1vZGVybnxlbnwwfHx8fDE3ODE0NDgxNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Healthy Choices",
      image: "https://images.unsplash.com/photo-1512058415932-f76460c26fe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHwzfHxSZWNpcGUlMjB3ZWJzaXRlJTBEJTBBVXNlciUyMGRpcmVjdGlvbiUzQSUyMG1vZGVybnxlbnwwfHx8fDE3ODE0NDgxNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Comfort Food",
      image: "https://images.unsplash.com/photo-1677691824304-279660ceece3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHw0fHxSZWNpcGUlMjB3ZWJzaXRlJTBEJTBBVXNlciUyMGRpcmVjdGlvbiUzQSUyMG1vZGVybnxlbnwwfHx8fDE3ODE0NDgxNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Desserts",
      image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHw1fHxSZWNpcGUlMjB3ZWJzaXRlJTBEJTBBVXNlciUyMGRpcmVjdGlvbiUzQSUyMG1vZGVybnxlbnwwfHx8fDE3ODE0NDgxNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <section
      style={{
        padding: C.sectionPad,
        backgroundColor: C.bgAlt,
        color: C.text,
        fontFamily: C.font,
        maxWidth: C.maxW,
        margin: "0 auto",
      }}
    >
      <h2
        style={{
          fontSize: C.h2Size,
          fontWeight: C.heroWeight,
          letterSpacing: C.heroTracking,
          lineHeight: C.heroLH,
          marginBottom: C.gap,
          textAlign: "center",
        }}
      >
        Explore Categories
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: C.gap,
        }}
      >
        {categories.map((category) => (
          <div
            key={category.name}
            style={{
              backgroundColor: C.surface,
              borderRadius: C.cardR,
              overflow: "hidden",
              boxShadow: C.shadow,
              transition: C.ease,
              cursor: "pointer",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "200px",
                backgroundImage: `url(${category.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div
              style={{
                padding: C.cardPad,
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  margin: 0,
                  color: C.text,
                }}
              >
                {category.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}