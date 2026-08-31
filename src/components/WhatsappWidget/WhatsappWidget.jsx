import { WHATSAPP_NUMBER } from '../../data.js';
import './WhatsappWidget.scss';

export default function WhatsappWidget() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi NeelKanth Himalayan, I'd like to know more."
  )}`;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="whatsapp-pill">
      <span className="whatsapp-pill__icon">
        <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden="true">
          <path
            fill="currentColor"
            d="M16 3C9.1 3 3.5 8.6 3.5 15.5c0 2.3.6 4.5 1.8 6.4L3 29l7.3-2.3c1.8 1 3.8 1.5 5.7 1.5 6.9 0 12.5-5.6 12.5-12.5S22.9 3 16 3zm0 22.7c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-4.3 1.4 1.4-4.2-.2-.4c-1-1.6-1.5-3.5-1.5-5.4 0-5.7 4.6-10.3 10.3-10.3s10.3 4.6 10.3 10.3S21.7 25.7 16 25.7zm5.6-7.7c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.4z"
          />
        </svg>
      </span>
      <span className="whatsapp-pill__text">How can I help you?</span>
    </a>
  );
}
