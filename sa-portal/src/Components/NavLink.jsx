import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ title, href, type }) => {
  return (
    <Link
      to={href || "#"}
      target={type === "link" ? "_blank" : "_self"}
      className="py-2 md:py-4 hover:text-blue-600 cursor-pointer"
    >
      {title}
    </Link>
  );
};

export default NavLink;
