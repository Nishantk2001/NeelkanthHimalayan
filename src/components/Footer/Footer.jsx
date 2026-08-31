import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../../data.js';
import './Footer.scss';

export default function Footer() {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img
          src="/images/neelkanth-logo.png"
          alt="Neelkanth Logo"
          className="logo"
          />
          <p className="footer__tagline">
            Tours and taxi service across Himachal Pradesh — Shimla, Manali,
            Spiti, Kinnaur and beyond.
          </p>
          <div className="footer__social">
            <a href="https://instagram.com/neelkanthhimalayan" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        <div className="footer__col">
          <p className="footer__heading">Useful links</p>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/tours">Tours</Link>
          <Link to="/taxi">Taxi</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer__col">
          <p className="footer__heading">Reach us</p>
          <p>Mandi, Himachal Pradesh 175131</p>
          <a href="tel:+919876543210">+91 94184 28266</a>
          <a href="mailto:neelkanthimalayan@gmail.com">neelkanthimalayan@gmail.com</a>
        </div>

        <div className="footer__col">
          <p className="footer__heading">Subscribe</p>
          <p className="footer__sub-copy">Get route ideas and seasonal offers by email.</p>
          {subscribed ? (
            <p className="footer__subscribed">Thanks — you're on the list.</p>
          ) : (
            <form className="footer__form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address"
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          )}
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {year} NeelKanth Himalayan Travels. All rights reserved.</p>
        <p className="footer__coords">
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          {' · '}
          <a href="tel:+919876543210">+91 94184 28266</a>
        </p>
      </div>
    </footer>
  );
}
