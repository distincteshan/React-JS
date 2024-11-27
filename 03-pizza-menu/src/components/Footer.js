import React from "react";

const Footer = () => {
  const currTime = new Date().getHours();
  const openTime = 12;
  const closeTime = 22;
  const isOpen = currTime <= closeTime && currTime >= openTime;
  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>
            "We're currently Open, until {closeTime}:00. Come visit us or order
            online.
          </p>
          <button className="btn">Order Now!</button>
        </div>
      )}
    </footer>
  );
};

export default Footer;
