import './Gallery.scss';

const images = [
  { src: 'https://images.unsplash.com/photo-1626621331169-5f0530138fd1?q=80&w=800&auto=format&fit=crop', label: 'Rohtang Pass' },
  { src: 'https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&w=800&auto=format&fit=crop', label: 'Spiti valley road' },
  { src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop', label: 'River rafting, Kullu' },
  { src: 'https://images.unsplash.com/photo-1483168527879-c66136b56105?q=80&w=800&auto=format&fit=crop', label: 'McLeod Ganj monastery' },
  { src: 'https://images.unsplash.com/photo-1602088113235-229c19758e9d?q=80&w=800&auto=format&fit=crop', label: 'Dalhousie forest road' },
  { src: 'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?q=80&w=800&auto=format&fit=crop', label: 'Guests on a snow trek' },
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
