import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <h3>{new Date().toLocaleDateString()} We're currently Open!</h3>
    </footer>
  );
};

export default Footer;
