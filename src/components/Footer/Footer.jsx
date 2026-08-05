import './Footer.scss';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <p className="footer__logo">
            NeelKanth <em>Himalayan</em>
          </p>
          <p className="footer__tagline">
            Tours and taxi service across Himachal Pradesh — Shimla, Manali,
            Spiti, Kinnaur and beyond.
          </p>
        </div>

        <div className="footer__col">
          <p className="footer__heading">Explore</p>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#tours">Tours</a>
          <a href="#taxi">Taxi</a>
        </div>

        <div className="footer__col">
          <p className="footer__heading">Company</p>
          <a href="#contact">Contact</a>
          <a
            href="https://wa.me/918628918266"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <a href="tel:+918628918266">Call us</a>
        </div>

        <div className="footer__col">
          <p className="footer__heading">Base camp</p>
          <p>Mandi, Himachal Pradesh 175131</p>
          <p>+91 86289 18266</p>
          <p>neelkanthhimalayan@gmail.com</p>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {year} NeelKanth Himalayan Travels. All rights reserved.</p>
        <p className="footer__coords">32.2432° N, 77.1892° E — Mandi</p>
      </div>
    </footer>
  );
}
