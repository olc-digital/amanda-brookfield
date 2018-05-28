import React from "react";

import footerLine from "../assets/footerline.jpg";

const Footer = () => (
  <footer className="footer">
    <div className="footerline">
      <img src={footerLine} />
    </div>
    <a href="index.html">Home</a>
    <span> | </span>
    <a href="books.html">Books</a>
    <span> | </span>
    <a href="author.html">Author</a>
    <span> | </span>
    <a href="/blog/">Blog</a>
    <span> | </span>
    <a href="pressevents.html">Events</a>
    <br /> © Amanda Brookfield 2018
  </footer>
);

export default Footer;
