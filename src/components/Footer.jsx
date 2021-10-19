import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Created by Vivek Pandey</p>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
