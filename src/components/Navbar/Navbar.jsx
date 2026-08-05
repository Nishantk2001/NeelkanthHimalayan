import { useState, useEffect } from 'react';
import './Navbar.scss';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#tours', label: 'Tours' },
  { href: '#taxi', label: 'Taxi' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand" onClick={() => setOpen(false)}>
          {/* <span className="navbar__brand-mark">☉</span> */}
          <span className="navbar__brand-text">
            NeelKanth <em>Himalayan</em>
          </span>
        </a>

        <nav className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="navbar__link" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="navbar__cta btn-solid" onClick={() => setOpen(false)}>
            Book Tour
          </a>
        </nav>

        <button
          className={`navbar__toggle ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
