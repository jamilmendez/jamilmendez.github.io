import { FC } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  name: string;
  link: string;
}

export const NavItem: FC<Props> = ({ link, name }) => {
  return (
    <li className="navbar__li">
      <NavLink className='navbar__item' to={link}>{ name }</NavLink>
    </li>
  );
};
