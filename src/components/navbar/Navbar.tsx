import { NavItem } from "./NavItem";

import './Navbar.scss';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Logo</h2>
      <ul className="navbar__list">
        <NavItem link="" name="Inicio" />
        <NavItem link="/about-me" name="Sobre Mi" />
        <NavItem link="/works" name="Trabajos" />
        <NavItem link="/contact" name="Contacto" />
      </ul>
    </nav>
  )
}