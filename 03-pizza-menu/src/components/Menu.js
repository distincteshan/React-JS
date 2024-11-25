import React from "react";
import Pizza from "..";

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name={pizzaData[0].name}
        image="./pizzas/focaccia.jpg"
        ingredients={pizzaData[0].ingredients}
        price={10}
      />
      <Pizza
        name={pizzaData[1].name}
        image="./pizzas/margherita.jpg"
        ingredients={pizzaData[1].ingredients}
        price={10}
      />
      <Pizza
        name={pizzaData[2].name}
        image="./pizzas/spinaci.jpg"
        ingredients={pizzaData[2].ingredients}
        price={10}
      />
      <Pizza
        name={pizzaData[3].name}
        image="./pizzas/funghi.jpg"
        ingredients={pizzaData[3].ingredients}
        price={10}
      />
      <Pizza
        name={pizzaData[4].name}
        image="./pizzas/salamino.jpg"
        ingredients={pizzaData[4].ingredients}
        price={10}
      />
      <Pizza
        name={pizzaData[5].name}
        image="./pizzas/prosciutto.jpg"
        ingredients={pizzaData[5].ingredients}
        price={10}
      />
    </main>
  );
};

export default Menu;

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
