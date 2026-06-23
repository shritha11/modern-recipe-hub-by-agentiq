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

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Artisan Sourdough Bread",
      description: "Freshly baked sourdough bread with a perfect crust and soft interior.",
      price: "$8.99",
      image:
        "https://images.unsplash.com/photo-1624715080044-8d9e1e5aa3b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHwxfHxSZWNpcGUlMjB3ZWJzaXRlJTBEJTBBVXNlciUyMGRpcmVjdGlvbiUzQSUyMG1vZGVybnxlbnwwfHx8fDE3ODE0NDgxNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 2,
      name: "Organic Avocado Toast",
      description: "Creamy avocado on rustic bread, topped with spices and microgreens.",
      price: "$12.49",
      image:
        "https://images.unsplash.com/photo-1512058454905-6b841e7ad132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHwyfHxSZWNpcGUlMjB3ZWJzaXRlJTBEJTBBVXNlciUyMGRpcmVjdGlvbiUzQSUyMG1vZGVybnxlbnwwfHx8fDE3ODE0NDgxNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 3,
      name: "Classic Pancake Stack",
      description: "Fluffy pancakes drizzled with maple syrup and topped with fresh berries.",
      price: "$9.99",
      image:
        "https://images.unsplash.com/photo-1512058415932-f76460c26fe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHwzfHxSZWNpcGUlMjB3ZWJzaXRlJTBEJTBBVXNlciUyMGRpcmVjdGlvbiUzQSUyMG1vZGVybnxlbnwwfHx8fDE3ODE0NDgxNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 4,
      name: "Gourmet Salad Bowl",
      description: "A mix of fresh greens, roasted veggies, and a tangy vinaigrette.",
      price: "$14.99",
      image:
        "https://images.unsplash.com/photo-1677691824304-279660ceece3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHw0fHxSZWNpcGUlMjB3ZWJzaXRlJTBEJTBBVXNlciUyMGRpcmVjdGlvbiUzQSUyMG1vZGVybnxlbnwwfHx8fDE3ODE0NDgxNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <section
      style={{
        backgroundColor: C.bgAlt,
        padding: C.sectionPad,
        color: C.text,
        fontFamily: C.font,
      }}
    >
      <div
        style={{
          maxWidth: C.maxW,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: C.h2Size,
            fontWeight: C.heroWeight,
            letterSpacing: C.heroTracking,
            lineHeight: C.heroLH,
            marginBottom: C.gap,
          }}
        >
          Featured Products
        </h2>
        <p
          style={{
            color: C.textMuted,
            marginBottom: C.gap,
          }}
        >
          Discover our top picks for the season.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: C.gap,
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                backgroundColor: C.surface,
                borderRadius: C.cardR,
                overflow: "hidden",
                boxShadow: C.shadow,
                transition: C.ease,
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  padding: C.cardPad,
                }}
              >
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    marginBottom: "8px",
                  }}
                >
                  {product.name}
                </h3>
                <p
                  style={{
                    color: C.textMuted,
                    fontSize: "14px",
                    marginBottom: "12px",
                  }}
                >
                  {product.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "bold",
                      color: C.primary,
                    }}
                  >
                    {product.price}
                  </span>
                  <button
                    style={{
                      backgroundColor: C.primary,
                      color: C.text,
                      border: "none",
                      borderRadius: C.btnR,
                      padding: "8px 16px",
                      cursor: "pointer",
                      boxShadow: C.btnShadow,
                      transition: C.ease,
                    }}
                    onMouseOver={(e) =>
                      (e.target.style.transform = C.lift)
                    }
                    onMouseOut={(e) =>
                      (e.target.style.transform = "translateY(0)")
                    }
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}