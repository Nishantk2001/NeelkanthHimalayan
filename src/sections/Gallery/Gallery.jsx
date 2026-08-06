import './Gallery.scss';

const images = [
  { src: '/images/rohtang-pass.jpg', label: 'Rohtang Pass' },
  { src: '/images/spiti-valley.jpg', label: 'Spiti Valley Road' },
  { src: '/images/kullu-rafting.jpg', label: 'River Rafting, Kullu' },
  { src: '/images/dharmshala.jpg', label: 'McLeod Ganj Monastery' },
  { src: '/images/dalhousie.jpg', label: 'Dalhousie Forest Road' },
  { src: '/images/snow-trek.jpg', label: 'Guests on a Snow Trek' },
];

export default function Gallery() {
  return (
    <section className="gallery">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Gallery</p>
          <h2>Mountains, adventure and happy travellers</h2>
        </div>
        <div className="gallery__grid">
          {images.map((img) => (
            <figure className="gallery-item" key={img.label}>
              <img src={img.src} alt={img.label} loading="lazy" />
              <figcaption>{img.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
