import React from "react";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <div className="w-full flex gap-2 font-impact">
      <Link className="font-logo m-auto" to="/">
        <span className="text-6xl">&#60;</span>
        <span className="text-8xl">P</span>
        <span className="text-6xl">&#62;</span>
      </Link>
    </div>
  );
};

export default Logo;
