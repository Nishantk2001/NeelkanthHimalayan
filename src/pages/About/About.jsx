import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader.jsx';
import Reveal from '../../components/Reveal/Reveal.jsx';
import './About.scss';

const checklist = [
  'Local guides, not contractors',
  'Permits filed before you land',
  '1:6 guide-to-traveller ratio',
  'Verified drivers & maintained vehicles',
  'Transparent, no-commission pricing',
  '24/7 WhatsApp support on every trip',
];

const values = [
  { title: 'Local guides, not contractors', copy: 'Every lead guide grew up in the valley they take you through — route knowledge from decades on the trail, not a training manual.' },
  { title: 'Permits filed before you land', copy: 'Inner-line, wildlife and forest permits are handled under your name in advance — no queueing at a check-post.' },
  { title: 'Small batches, always', copy: 'We cap every departure at a 1:6 guide-to-traveller ratio, so we can actually respond if plans need to change.' },
  { title: 'Acclimatisation is not optional', copy: 'Every high-altitude itinerary has a built-in acclimatisation day — we\u2019ve turned down bookings that wanted to skip it.' },
];

const timeline = [
  { year: '2014', copy: 'Started with a single route — Shimla to Manali — and two guides and one taxi.' },
  { year: '2017', copy: 'Extended into Spiti and Kinnaur, and added a dedicated taxi fleet for hill routes.' },
  { year: '2020', copy: 'Opened a Dharamshala and Dalhousie desk for shorter, culture-focused trips.' },
  { year: '2023', copy: 'Crossed 5,000 travellers served across tours and taxi bookings combined.' },
];

export default function About() {
  return (
    <div className="about">
      <PageHeader
        title="About"
        crumb="About"
        image="/images/rohtang-pass.jpg"
      />

      <section className="about-intro">
        <div className="container about-intro__grid">
          <Reveal className="about-intro__media">
            <div className="about-intro__img" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=900&auto=format&fit=crop)' }} />
            <span className="about-intro__badge about-intro__badge--top">
              Expertly planned trips<br /><small>Crafted with care, not templates</small>
            </span>
            <span className="about-intro__badge about-intro__badge--bottom">
              Built on trust<br /><small>Local since 2014</small>
            </span>
          </Reveal>

          <Reveal delay={120} className="about-intro__content">
            <p className="eyebrow">We are NeelKanth Himalayan</p>
            <h2>Your local partner for Himachal, tours and taxi</h2>
            <p className="about-intro__lede">
              NeelKanth Himalayan Travels is a Manali-based tours and taxi
              outfit built for Himachal Pradesh. We're named for Neelkanth
              Mahadev, the blue-throated form of Shiva associated with the
              peak above Rishikesh — because for us these mountains are as
              much a pilgrimage as a holiday.
            </p>
            <ul className="about-intro__checklist">
              {checklist.map((item) => (
                <li key={item}>
                  <span aria-hidden="true">✓</span> {item}
                </li>
              ))}
            </ul>
            <Link to="/services" className="btn-solid">View services</Link>
          </Reveal>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">What we hold to</p>
            <h2>Four things we don't compromise on</h2>
          </Reveal>
          <div className="values__grid">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100} className="value-card">
                <h3>{v.title}</h3>
                <p>{v.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="timeline-section">
        <div className="container">
          <Reveal className="section-head section-head--dark">
            <p className="eyebrow" style={{ color: 'var(--marigold, #E2A63D)' }}>How we got here</p>
            <h2>A decade on Himachal's roads</h2>
          </Reveal>
          <ol className="timeline">
            {timeline.map((t, i) => (
              <Reveal key={t.year} as="li" delay={i * 90}>
                <span className="timeline__year">{t.year}</span>
                <p>{t.copy}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <Reveal as="section" className="cta-strip">
        <div className="container cta-strip__inner">
          <div>
            <p className="eyebrow" style={{ color: 'var(--marigold, #E2A63D)' }}>Ready to start your journey?</p>
            <h2>It only takes a moment to plan your dream Himachal trip</h2>
          </div>
          <Link to="/contact" className="btn-solid">Contact us</Link>
        </div>
      </Reveal>
    </div>
  );
}
