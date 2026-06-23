import React from 'react';
import { Star } from 'lucide-react';

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

export default function Testimonials() {
  const testimonials = [
    {
      image: "https://images.unsplash.com/photo-1512058454905-6b841e7ad132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHwyfHxSZWNpcGUlMjB3ZWJzaXRlJTBEJTBBVXNlciUyMGRpcmVjdGlvbiUzQSUyMG1vZGVybnxlbnwwfHx8fDE3ODE0NDgxNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      name: "Sophia Green",
      text: "Modern Bites has completely transformed the way I cook at home. The recipes are easy to follow, and the results are always delicious!",
      rating: 5,
    },
    {
      image: "https://images.unsplash.com/photo-1512058415932-f76460c26fe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHwzfHxSZWNpcGUlMjB3ZWJzaXRlJTBEJTBBVXNlciUyMGRpcmVjdGlvbiUzQSUyMG1vZGVybnxlbnwwfHx8fDE3ODE0NDgxNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      name: "Liam Carter",
      text: "I love the variety of recipes available on Modern Bites. There's something for every occasion, and the taste is always on point.",
      rating: 4,
    },
    {
      image: "https://images.unsplash.com/photo-1677691824304-279660ceece3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHw0fHxSZWNpcGUlMjB3ZWJzaXRlJTBEJTBBVXNlciUyMGRpcmVjdGlvbiUzQSUyMG1vZGVybnxlbnwwfHx8fDE3ODE0NDgxNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      name: "Ethan Brown",
      text: "The ingredients and techniques shared on Modern Bites have elevated my cooking game. Highly recommended for food enthusiasts!",
      rating: 5,
    },
  ];

  return (
    <section style={{ backgroundColor: C.bgAlt, color: C.text, padding: C.sectionPad }}>
      <div style={{ maxWidth: C.maxW, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: C.h2Size, fontWeight: C.heroWeight, letterSpacing: C.heroTracking, lineHeight: C.heroLH, marginBottom: C.gap }}>
          What Our Users Say
        </h2>
        <div style={{ display: 'flex', gap: C.gap, flexWrap: 'wrap', justifyContent: 'center' }}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              style={{
                backgroundColor: C.surface,
                borderRadius: C.cardR,
                padding: C.cardPad,
                boxShadow: C.shadow,
                maxWidth: '300px',
                textAlign: 'left',
                transition: C.ease,
              }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginBottom: C.gap,
                }}
              />
              <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: C.gap }}>{testimonial.name}</h3>
              <p style={{ fontSize: '16px', color: C.textMuted, marginBottom: C.gap }}>{testimonial.text}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} color={C.primary} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}