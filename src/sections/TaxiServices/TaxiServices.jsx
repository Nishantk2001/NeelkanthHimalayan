import './TaxiServices.scss';

const vehicles = [
  { name: 'Sedan', seats: '4 seater', best: 'Airport transfers, short local trips', price: '₹12/km' },
  { name: 'SUV', seats: '6–7 seater', best: 'Hill routes, family trips', price: '₹18/km' },
  { name: 'Tempo Traveller', seats: '12–17 seater', best: 'Group tours, family reunions', price: '₹28/km' },
  { name: 'Luxury Cars', seats: '4 seater', best: 'Weddings, premium travel', price: 'On request' },
];

export default function TaxiServices() {
  return (
    <section id="taxi" className="taxi">
      <div className="container">
        <div className="section-head section-head--dark">
          <p className="eyebrow">Taxi services</p>
          <h2>A vehicle for every group size</h2>
        </div>
        <div className="taxi__grid">
          {vehicles.map((v) => (
            <div className="taxi-card" key={v.name}>
              <h3>{v.name}</h3>
              <p className="taxi-card__seats">{v.seats}</p>
              <p className="taxi-card__best">{v.best}</p>
              <p className="taxi-card__price">{v.price}</p>
              <a
                href="https://wa.me/918628918266?text=Hi%2C%20I%27d%20like%20to%20book%20a%20taxi."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-solid"
              >
                Book now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
