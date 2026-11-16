
import { Link, NavLink } from "react-router-dom";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "91XXXXXXXXXX";

export default function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="brand-logo">
        CAUZ
      </Link>

      <nav className="main-nav">
        <NavLink to="/" end>
          Collection
        </NavLink>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <a
        className="header-whatsapp"
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
          "Hi CAUZ! I would like to know more about your collection."
        )}`}
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle size={21} />
        <span>Order on WhatsApp</span>
      </a>
    </header>
  );
}
