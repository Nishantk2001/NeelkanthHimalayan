import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Tag, Headset, ShieldCheck, Play, Plane, ArrowRight } from 'lucide-react';
import Reveal from '../../components/Reveal/Reveal.jsx';
import AnimatedCounter from '../../components/AnimatedCounter/AnimatedCounter.jsx';
import { heroImages, packages, galleryImages, reviews, whyPoints, WHATSAPP_NUMBER } from '../../data.js';
import './Home.scss';

const heroStats = [
  { icon: MapPin, value: '38+', label: 'Routes', sub: 'Across Himachal' },
  { icon: Tag, value: 'Best Price', label: '', sub: 'Guarantee, no hidden fees' },
  { icon: Headset, value: '24/7', label: 'Support', sub: "We're here to help" },
  { icon: ShieldCheck, value: 'Trusted by', label: '', sub: '5,000+ travellers' },
];

const stats = [
  { end: 5364, suffix: ' m', label: 'Highest pass we cover — Kunzum La' },
  { end: 38, suffix: '+', label: 'Curated routes across Himachal' },
  { end: 12, suffix: ' yrs', label: 'Guiding trips since 2014' },
  { display: '1:6', label: 'Guide-to-traveller ratio, never more' },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return undefined;
    const id = setInterval(() => setActiveSlide((i) => (i + 1) % heroImages.length), 5000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return undefined;
    const id = setInterval(() => setActiveReview((i) => (i + 1) % reviews.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="home">
      <section id="home" className="hero">
        <div className="hero__slider" aria-hidden="true">
          {heroImages.map((src, i) => (
            <div key={src} className={`hero__slide ${i === activeSlide ? 'is-active' : ''}`} style={{ backgroundImage: `url(${src})` }} />
          ))}
          <div className="hero__overlay" />
        </div>

        <div className="container hero__body">
          <div className="hero__copy">
            <p className="hero__script hero__enter" style={{ animationDelay: '0.05s' }}>Escape. Explore.</p>
            <h1 className="hero__title hero__enter" style={{ animationDelay: '0.15s' }}>
              DISCOVER
              <br />
              HIMACHAL
            </h1>
            <p className="hero__sub hero__enter" style={{ animationDelay: '0.3s' }}>
              Find hidden valleys, mountain roads and homestays — and create
              memories that last a lifetime.
            </p>
            <div className="hero__actions hero__enter" style={{ animationDelay: '0.45s' }}>
              <Link to="/tours" className="hero__cta-solid">
                Explore Destinations <Plane size={16} />
              </Link>
              <a href="#home-gallery" className="hero__watch">
                <span className="hero__watch-icon"><Play size={14} fill="currentColor" /></span>
                Watch the trail
              </a>
            </div>
          </div>

          <Link to="/tours" className="hero__feature-card hero__enter" style={{ animationDelay: '0.6s' }}>
            <div className="hero__feature-img" style={{ backgroundImage: `url(${packages[1].img})` }} />
            <div className="hero__feature-body">
              <p className="hero__feature-name">Spiti Valley</p>
              <p className="hero__feature-tag">Cold Desert Found</p>
              <p className="hero__feature-price">From ₹22,000</p>
            </div>
            <span className="hero__feature-arrow"><ArrowRight size={16} /></span>
          </Link>
        </div>

        <div className="hero__statbar">
          <div className="container hero__statbar-inner">
            {heroStats.map((s) => (
              <div className="hero__stat" key={s.sub}>
                <span className="hero__stat-icon"><s.icon size={20} /></span>
                <div>
                  <p className="hero__stat-value">{s.value}{s.label ? ` ${s.label}` : ''}</p>
                  <p className="hero__stat-sub">{s.sub}</p>
                </div>
              </div>
            ))}
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

      <section className="stats">
        <div className="container stats__grid">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="stats__item">
              <p className="stats__value">
                {s.display ? s.display : <AnimatedCounter end={s.end} suffix={s.suffix} />}
              </p>
              <p className="stats__label">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="about" className="why">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Why choose us</p>
            <h2>Local, honest, and on call</h2>
          </Reveal>
          <div className="why__grid">
            {whyPoints.map((p, i) => (
              <Reveal key={p.title} delay={i * 100} className="why-card">
                <span className="why-card__check" aria-hidden="true">✓</span>
                <h3>{p.title}</h3>
                <p>{p.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="tours" className="packages">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Popular packages</p>
            <h2>A few of our best routes</h2>
          </Reveal>
          <div className="packages__grid">
            {packages.slice(0, 3).map((p, i) => (
              <Reveal key={p.name} delay={i * 110} className="package-card">
                <div className="package-card__img" style={{ backgroundImage: `url(${p.img})` }}>
                  <span className="package-card__tag">{p.tag}</span>
                </div>
                <div className="package-card__body">
                  <div className="package-card__head">
                    <h3>{p.name}</h3>
                    <span>{p.days}</span>
                  </div>
                  <p>{p.copy}</p>
                  <Link to="/tours" className="btn-outline">View package</Link>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="packages__cta">
            <Link to="/tours" className="btn-solid">See all tour packages</Link>
          </Reveal>
        </div>
      </section>

      <Reveal as="section" id="taxi" className="taxi-band">
        <div className="container taxi-band__inner">
          <div>
            <p className="eyebrow" style={{ color: 'var(--marigold, #E2A63D)' }}>Also need a ride?</p>
            <h2>Sedans to Tempo Travellers, for every Himachal road</h2>
            <p>Verified drivers, fixed per-km pricing, and vehicles that are actually built for hill routes.</p>
          </div>
          <Link to="/taxi" className="btn-solid">Explore taxi service</Link>
        </div>
      </Reveal>

      <section className="gallery" id="home-gallery">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Gallery</p>
            <h2>Mountains, adventure and happy travellers</h2>
          </Reveal>
          <div className="gallery__grid">
            {galleryImages.map((img, i) => (
              <Reveal key={img.label} delay={i * 70} as="figure" className="gallery-item">
                <img src={img.src} alt={img.label} loading="lazy" />
                <figcaption>{img.label}</figcaption>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="reviews">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Customer reviews</p>
            <h2>What travellers say</h2>
          </Reveal>
          <Reveal className="review-carousel">
            <div className="review-carousel__track" style={{ transform: `translateX(-${activeReview * 100}%)` }}>
              {reviews.map((r) => (
                <div className="review-carousel__slide" key={r.name}>
                  <span className="stars">
                    {'★'.repeat(r.rating)}
                    <span className="stars--dim">{'★'.repeat(5 - r.rating)}</span>
                  </span>
                  <p className="review-carousel__quote">&ldquo;{r.quote}&rdquo;</p>
                  <p className="review-carousel__name">{r.name}</p>
                  <p className="review-carousel__trip">{r.trip}</p>
                </div>
              ))}
            </div>
            <div className="review-carousel__dots">
              {reviews.map((r, i) => (
                <button
                  key={r.name}
                  className={`review-carousel__dot ${i === activeReview ? 'is-active' : ''}`}
                  aria-label={`Show review ${i + 1}`}
                  onClick={() => setActiveReview(i)}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal as="section" className="cta-band">
        <span className="cta-band__blob cta-band__blob--1" />
        <span className="cta-band__blob cta-band__blob--2" />
        <div className="container cta-band__inner">
          <div>
            <p className="eyebrow" style={{ color: 'var(--marigold, #E2A63D)' }}>Next departure</p>
            <h2>Shimla–Manali batch leaves 2 August</h2>
            <p>Six spots left. Ask us about pickup from your city.</p>
          </div>
          <Link to="/contact" className="btn-solid">Reserve your spot</Link>
        </div>
      </Reveal>
    </div>
  );
}
