import React, { createContext, useContext, useState } from 'react';

const PizzaContext = createContext(undefined);
export const PizzaProvider = ({ children }) => {
    const [pizzas, setPizzas] = useState([]);

    const fetchPizzas = () => {
        const fetchedData = [
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
        setPizzas(fetchedData);
    };

    return (
        <PizzaContext.Provider value={{ pizzas, fetchPizzas }}>
            {children}
        </PizzaContext.Provider>
    );
};
export const usePizzas = () => useContext(PizzaContext);
