import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader.jsx';
import Reveal from '../../components/Reveal/Reveal.jsx';
import { vehicles, WHATSAPP_NUMBER } from '../../data.js';
import './Taxi.scss';

const steps = [
  { title: 'Pick a vehicle', copy: 'Choose based on group size — sedan for 4, SUV for hill families, Tempo for groups.' },
  { title: 'Tell us the route', copy: 'Share pickup point, drop point and date over call or WhatsApp.' },
  { title: 'Confirm & pay', copy: 'We confirm the driver and vehicle number a day before pickup, with fixed pricing upfront.' },
];

export default function Taxi() {
  const [vehicleName, setVehicleName] = useState(vehicles[0].name);
  const [distance, setDistance] = useState(100);

  const selected = vehicles.find((v) => v.name === vehicleName);
  const estimate = useMemo(() => {
    if (!selected || !selected.ratePerKm) return null;
    const km = Math.max(0, Number(distance) || 0);
    return Math.round(km * selected.ratePerKm);
  }, [selected, distance]);

  return (
    <div className="taxi">
      <PageHeader
        title="Taxi Service"
        crumb="Taxi"
        image="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="taxi-fleet">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Our fleet</p>
            <h2>A vehicle for every group size</h2>
          </Reveal>
          <div className="taxi__grid">
            {vehicles.map((v, i) => (
              <Reveal key={v.name} delay={i * 100} className="taxi-card">
                <h3>{v.name}</h3>
                <p className="taxi-card__seats">{v.seats}</p>
                <p className="taxi-card__best">{v.best}</p>
                <p className="taxi-card__price">{v.ratePerKm ? `\u20B9${v.ratePerKm}/km` : 'On request'}</p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I'd like to book a ${v.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-solid"
                >
                  Book now
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Reveal as="section" className="fare-estimator">
        <div className="container fare-estimator__inner">
          <div className="fare-estimator__intro">
            <p className="eyebrow" style={{ color: 'var(--marigold, #E2A63D)' }}>Quick estimate</p>
            <h2>Roughly, what will your trip cost?</h2>
            <p>A rough estimate based on distance — final fare depends on route, hill charges and waiting time.</p>
          </div>

          <div className="fare-estimator__card">
            <div className="fare-estimator__field">
              <label htmlFor="vehicle">Vehicle</label>
              <select id="vehicle" value={vehicleName} onChange={(e) => setVehicleName(e.target.value)}>
                {vehicles.map((v) => (
                  <option key={v.name} value={v.name}>{v.name}</option>
                ))}
              </select>
            </div>

            <div className="fare-estimator__field">
              <label htmlFor="distance">Approx. distance (km)</label>
              <input
                id="distance"
                type="range"
                min="10"
                max="500"
                step="10"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
              />
              <span className="fare-estimator__km">{distance} km</span>
            </div>

            <div className="fare-estimator__result">
              {estimate ? (
                <>
                  <span className="fare-estimator__label">Estimated fare</span>
                  <span className="fare-estimator__amount">₹{estimate.toLocaleString('en-IN')}</span>
                </>
              ) : (
                <>
                  <span className="fare-estimator__label">Luxury pricing</span>
                  <span className="fare-estimator__amount fare-estimator__amount--muted">On request</span>
                </>
              )}
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                `Hi, I'd like to book a ${vehicleName} for about ${distance} km.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-solid"
            >
              Get exact quote on WhatsApp
            </a>
          </div>
        </div>
      </Reveal>

      <section className="taxi-steps">
        <div className="container">
          <Reveal className="section-head section-head--dark">
            <p className="eyebrow" style={{ color: 'var(--marigold, #E2A63D)' }}>How booking works</p>
            <h2>Three steps, no back and forth</h2>
          </Reveal>
          <div className="taxi-steps__grid">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 100} className="taxi-step">
                <span className="taxi-step__num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Reveal as="section" className="taxi-cta">
        <div className="container taxi-cta__inner">
          <div>
            <p className="eyebrow" style={{ color: 'var(--marigold, #E2A63D)' }}>Need a ride today?</p>
            <h2>Call, WhatsApp, or fill the contact form</h2>
          </div>
          <Link to="/contact" className="btn-solid">Go to contact</Link>
        </div>
      </Reveal>
    </div>
  );
}
