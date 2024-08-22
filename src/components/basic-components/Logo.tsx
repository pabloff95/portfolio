import React from "react";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <div className="w-full flex gap-2 font-impact">
      <Link className="font-logo m-auto" to="/">
        <span className="hidden md:inline text-2xl md:text-4xl lg:text-[min(4vmax,3.75rem)]">
          &#60;
        </span>
        <span className="text-5xl md:text-6xl lg:text-[min(6vmax,6rem)]">
          P
        </span>
        <span className="hidden md:inline text-2xl md:text-4xl lg:text-[min(4vmax,3.75rem)]">
          &#62;
        </span>
      </Link>
    </div>
  );
};

export default Logo;
