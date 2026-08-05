import { useState } from 'react';
import './Contact.scss';

const initialForm = { name: '', phone: '', email: '', message: '' };

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
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Contact</p>
          <h2>Plan your Himachal trip</h2>
        </div>

        <div className="contact__quick">
          <a href="tel:+918628918266" className="quick-card">
            <span className="quick-card__label">Call</span>
            <span className="quick-card__value">+91 86289 18266</span>
          </a>
          <a
            href="https://wa.me/918628918266"
            target="_blank"
            rel="noopener noreferrer"
            className="quick-card"
          >
            <span className="quick-card__label">WhatsApp</span>
            <span className="quick-card__value">Chat with us</span>
          </a>
          <a href="mailto:neelkanthhimalayan@gmail.com" className="quick-card">
            <span className="quick-card__label">Email</span>
            <span className="quick-card__value">neelkanthhimalayan@gmail.com</span>
          </a>
        </div>

        <div className="contact__grid">
          <div className="contact__map">
            <iframe
              title="NeelKanth Himalayan Travels location"
              src="https://www.google.com/maps?q=Mandi,Himachal+Pradesh&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

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
        </div>
      </div>
    </section>
  );
}
