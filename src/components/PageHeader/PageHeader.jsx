import { Link } from 'react-router-dom';
import './PageHeader.scss';

export default function PageHeader({ title, crumb, image }) {
  return (
    <section className="page-header" style={{ backgroundImage: `url(${image})` }}>
      <div className="page-header__overlay" />
      <div className="container page-header__inner">
        <h1>{title}</h1>
        <nav className="page-header__crumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{crumb}</span>
        </nav>
      </div>
    </section>
  );
}
