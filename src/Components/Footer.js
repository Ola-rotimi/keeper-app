import React from "react";

const year = new Date().getFullYear();

function Footer() {
  return <footer>copyright &copy; {year}</footer>;
}

export default Footer;
