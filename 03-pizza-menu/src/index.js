/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./index.css";
import Menu from "./components/Menu";

export default function Pizza(props) {
  return (
    <div className={props.soldOut ? "pizza sold-out" : "pizza"}>
      <img src={props.image} alt={props.name} />
      <div>
        <h1>{props.name}</h1>
        <p>{props.ingredients}</p>
        <span>{props.soldOut ? "SOLD OUT!" : `Price: ${props.price}`}</span>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
