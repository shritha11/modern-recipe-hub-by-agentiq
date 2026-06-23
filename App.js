import React from 'react';
import Navbar from './Navbar.js';
import Hero from './Hero.js';
import Features from './Features.js';
import FeaturedProducts from './FeaturedProducts.js';
import Categories from './Categories.js';
import Testimonials from './Testimonials.js';
import CTA from './CTA.js';
import Footer from './Footer.js';
import RecipeList from './RecipeList.js';
import FeaturedRecipes from './FeaturedRecipes.js';

export default function App() {
  return (
    <div style={{ background: "#facc15", minHeight: "100vh", fontFamily: "Inter, system-ui, sans-serif", color: "#fff" }}>
      <Navbar />
      <Hero />
      <Features />
      <FeaturedProducts />
      <Categories />
      <Testimonials />
      <CTA />
      <Footer />
      <RecipeList />
      <FeaturedRecipes />
    </div>
  );
}