import { Instagram } from 'lucide-react';
import './InstagramWidget.scss';

const INSTAGRAM_HANDLE = 'neelkanthhimalayan';

export default function InstagramWidget() {
  return (
    <a
      href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
      target="_blank"
      rel="noopener noreferrer"
      className="instagram-pill"
    >
      <span className="instagram-pill__icon">
        <Instagram size={18} />
      </span>
      <span className="instagram-pill__text">Follow us</span>
    </a>
  );
}
