import { useEffect, useState } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader.jsx';
import Reveal from '../../components/Reveal/Reveal.jsx';
import { WHATSAPP_NUMBER } from '../../data.js';
import './Contact.scss';

const initialForm = { name: '', phone: '', email: '', message: '' };

const faqs = [
  { q: 'How far in advance should I book?', a: "For peak season (May–June, Oct) book 2–3 weeks ahead. Off-season, a few days' notice is usually fine for both tours and taxis." },
  { q: 'Do you offer pickup outside Manali?', a: 'Yes — we can arrange pickup from Chandigarh, Delhi or your hotel anywhere in Himachal for an added transfer charge.' },
  { q: 'Is the taxi fare estimate final?', a: 'It\u2019s a starting point. Final fare depends on exact route, tolls, hill charges and any waiting time — we confirm the fixed number before you book.' },
  { q: 'Can I customise a tour package?', a: 'Always. Tell us your dates, group size and interests on the contact form and we\u2019ll build a route around it.' },
];

function isOfficeOpen() {
  const now = new Date();
  const day = now.getDay(); // 0 Sun - 6 Sat
  const hour = now.getHours();
  const isMonToSat = day >= 1 && day <= 6;
  return isMonToSat && hour >= 9 && hour < 19;
}

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Enter your name.';
  if (!form.phone.trim()) {
    errors.phone = 'Enter a phone number.';
  } else if (!/^[0-9+\-\s]{7,15}$/.test(form.phone)) {
    errors.phone = 'Enter a valid phone number.';
  }
  if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (!form.message.trim()) errors.message = 'Tell us a little about your trip.';
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [open, setOpen] = useState(isOfficeOpen());

  useEffect(() => {
    const id = setInterval(() => setOpen(isOfficeOpen()), 60000);
    return () => clearInterval(id);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setForm(initialForm);
    }
  };

  return (
    <div className="contact">
      <PageHeader
        title="Contact"
        crumb="Contact"
        image="/images/chamba.jpg"
      />

      <section className="contact-body">
        <div className="container">
          <Reveal className="office-status">
            <span className={`office-status__dot ${open ? 'is-open' : 'is-closed'}`} aria-hidden="true" />
            {open ? 'We\u2019re open right now — Mon–Sat, 9 AM–7 PM IST' : 'We\u2019re closed right now — back Mon–Sat, 9 AM–7 PM IST. WhatsApp us anytime.'}
          </Reveal>

          <div className="contact__quick">
            <Reveal delay={0} as="a" href="tel:+919876543210" className="quick-card">
              <span className="quick-card__label">Call</span>
              <span className="quick-card__value">+91 94184 28266</span>
            </Reveal>
            <Reveal delay={90} as="a" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="quick-card">
              <span className="quick-card__label">WhatsApp</span>
              <span className="quick-card__value">Chat with us</span>
            </Reveal>
            <Reveal delay={180} as="a" href="mailto:neelkanthimalayan@gmail.com" className="quick-card">
              <span className="quick-card__label">Email</span>
              <span className="quick-card__value">neelkanthimalayan@gmail.com</span>
            </Reveal>
          </div>

          <div className="contact__grid">
            <Reveal className="contact__map">
              <iframe
                title="NeelKanth Himalayan Travels location"
                src="https://www.google.com/maps?q=Manali,Himachal+Pradesh&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </Reveal>

            <Reveal delay={100}>
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                {submitted && (
                  <p className="form-success" role="status">
                    Thanks — we've got your message. Expect a call or WhatsApp reply shortly.
                  </p>
                )}
                <div className="form-row">
                  <label htmlFor="name">Full name</label>
                  <input id="name" name="name" type="text" value={form.name} onChange={handleChange} />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>
                <div className="form-row form-row--split">
                  <div>
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} />
                    {errors.phone && <span className="form-error">{errors.phone}</span>}
                  </div>
                  <div>
                    <label htmlFor="email">Email (optional)</label>
                    <input id="email" name="email" type="email" value={form.email} onChange={handleChange} />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>
                </div>
                <div className="form-row">
                  <label htmlFor="message">Your trip plan</label>
                  <textarea id="message" name="message" rows="4" value={form.message} onChange={handleChange} />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>
                <button type="submit" className="btn-solid">Send message</button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Common questions</p>
            <h2>Before you reach out</h2>
          </Reveal>
          <div className="faq__list">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 80} className={`faq-item ${openFaq === i ? 'is-open' : ''}`}>
                <button className="faq-item__q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}>
                  {f.q}
                  <span className="faq-item__icon" aria-hidden="true">{openFaq === i ? '\u2212' : '+'}</span>
                </button>
                <div className="faq-item__a">
                  <p>{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
