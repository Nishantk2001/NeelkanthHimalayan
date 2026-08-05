import './Packages.scss';

const packages = [
  {
    name: 'Shimla – Manali',
    days: '6D/5N',
    tag: 'Most booked',
    img: '/images/shimla.jpg',
    copy: 'The classic Himachal circuit — colonial-era Shimla to the pine forests and river valley of Manali.',
  },
  {
    name: 'Spiti Valley',
    days: '8D/7N',
    tag: 'Cold desert',
    img: '/images/spiti.jpg',
    copy: 'Monasteries, moonscape valleys and villages above 4,000 m near the Tibet border.',
  },
  {
    name: 'Kinnaur',
    days: '7D/6N',
    tag: 'Off the beaten path',
    img: '/images/kinnaur.jpg',
    copy: 'Apple orchards, the Sutlej valley and views of Kinnaur Kailash — quieter than Manali, just as dramatic.',
  },
  {
    name: 'Dharamshala',
    days: '4D/3N',
    tag: 'Culture & hills',
    img: '/images/dharmshala.jpg',
    copy: 'McLeod Ganj, Tibetan culture, and short hikes with the Dhauladhar range as a backdrop.',
  },
  {
    name: 'Dalhousie',
    days: '4D/3N',
    tag: 'Colonial hill town',
    img: '/images/dalhousie.jpg',
    copy: 'Quiet, forested and cool — a low-key hill station without the Manali crowds.',
  },
  {
    name: 'Chamba',
    days: '5D/4N',
    tag: 'Temples & valleys',
    img: '/images/chamba.jpg',
    copy: 'Ancient temples, the Ravi river and the lesser-visited Chamba and Bharmour valleys.',
  },
];

export default function Packages() {
  return (
    <section id="tours" className="packages">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Popular packages</p>
          <h2>Six ways to see Himachal</h2>
        </div>
        <div className="packages__grid">
          {packages.map((p) => (
            <div className="package-card" key={p.name}>
              <div className="package-card__img" style={{ backgroundImage: `url(${p.img})` }}>
                <span className="package-card__tag">{p.tag}</span>
              </div>
              <div className="package-card__body">
                <div className="package-card__head">
                  <h3>{p.name}</h3>
                  <span>{p.days}</span>
                </div>
                <p>{p.copy}</p>
                <a href="#contact" className="btn-outline">View package</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
