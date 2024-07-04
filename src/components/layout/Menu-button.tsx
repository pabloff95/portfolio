import React from "react";
import { Link } from "react-router-dom";

interface MenuButtonProps {
  to: string;
  text: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({
  to,
  text,
}: MenuButtonProps) => {
  return (
    <Link className="menu-button" to={to}>
      {text}
    </Link>
  );
};

export default MenuButton;
