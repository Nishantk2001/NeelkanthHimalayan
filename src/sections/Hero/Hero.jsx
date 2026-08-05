import { useEffect, useState } from 'react';
import './Hero.scss';

const heroImages = [
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1920&auto=format&fit=crop', // Spiti-style mountains
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1920&auto=format&fit=crop', // Himalayan valley
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1920&auto=format&fit=crop', // Snow mountains
  'https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1920&auto=format&fit=crop', // Pine forest mountains
];

const WHATSAPP_NUMBER = '918628918266';
const WHATSAPP_MESSAGE = "Hi NeelKanth Himalayan, I'd like to book a tour.";

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return undefined;

    const id = setInterval(() => {
      setActiveSlide((i) => (i + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero__slider" aria-hidden="true">
        {heroImages.map((src, i) => (
          <div
            key={src}
            className={`hero__slide ${i === activeSlide ? 'is-active' : ''}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        <div className="hero__overlay" />
      </div>

      <div className="container hero__inner">
        <p className="eyebrow">Himachal Pradesh, India</p>
        <h1 className="hero__title">NeelKanth <br/> Himalayan Travels</h1>
        <p className="hero__sub">Explore Himachal Like a Local</p>
        <div className="hero__actions">
          <a href="#tours" className="btn-solid">Book Tour</a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline white"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="hero__dots" role="tablist" aria-label="Hero background slides">
        {heroImages.map((src, i) => (
          <button
            key={src}
            role="tab"
            aria-selected={i === activeSlide}
            aria-label={`Show background image ${i + 1}`}
            className={`hero__dot ${i === activeSlide ? 'is-active' : ''}`}
            onClick={() => setActiveSlide(i)}
          />
        ))}
      </div>
    </section>
  );
}
