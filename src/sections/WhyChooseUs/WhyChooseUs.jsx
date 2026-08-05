import './WhyChooseUs.scss';

const points = [
  { title: 'Local experts', copy: 'Born and raised in Himachal — we know the roads, the weather and the shortcuts.' },
  { title: 'Best price', copy: 'No middlemen, no inflated hotel commissions. Straight pricing on every package.' },
  { title: '24/7 support', copy: 'A local number you can call or WhatsApp any hour of your trip, not just office hours.' },
  { title: 'Safe travel', copy: 'Verified drivers, maintained vehicles, and routes chosen with weather and road conditions in mind.' },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="why">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Why choose us</p>
          <h2>Local, honest, and on call</h2>
        </div>
        <div className="why__grid">
          {points.map((p) => (
            <div className="why-card" key={p.title}>
              <span className="why-card__check" aria-hidden="true">✓</span>
              <h3>{p.title}</h3>
              <p>{p.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
