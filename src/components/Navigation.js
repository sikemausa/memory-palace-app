import React from "react";
import { Link } from "react-router";

const Navigation = () => {
  return (
    <section className="Navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/create-palace">Create Palace</Link>
        </li>
      </ul>
    </section>
  )
};

export default Navigation;
