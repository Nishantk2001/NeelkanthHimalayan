import './Reviews.scss';

const reviews = [
  { name: 'Ananya Kapoor', trip: 'Shimla–Manali, June 2026', rating: 5, quote: 'Driver knew every shortcut and every good dhaba on the way. Never felt rushed once.' },
  { name: 'Rohit Sharma', trip: 'Spiti Valley, September 2025', rating: 5, quote: "Booked a Tempo Traveller for 10 of us. Vehicle was in great shape for those roads." },
  { name: 'Priya & Karan', trip: 'Dalhousie, honeymoon trip', rating: 4, quote: 'Quiet, well-planned itinerary — exactly the slower pace we asked for.' },
];

function Stars({ count }) {
  return (
    <span className="stars" aria-label={`${count} out of 5 stars`}>
      {'★'.repeat(count)}
      <span className="stars--dim">{'★'.repeat(5 - count)}</span>
    </span>
  );
}

export default function Reviews() {
  return (
    <section className="reviews">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Customer reviews</p>
          <h2>What travellers say</h2>
        </div>
        <div className="reviews__grid">
          {reviews.map((r) => (
            <div className="review-card" key={r.name}>
              <Stars count={r.rating} />
              <p className="review-card__quote">"{r.quote}"</p>
              <p className="review-card__name">{r.name}</p>
              <p className="review-card__trip">{r.trip}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
