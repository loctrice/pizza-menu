import React from "react";

export const  Pizza = ({ pizzaObj }) => (
    <li className={`pizza ${pizzaObj.soldOut ? "pizza--sold-out" : ""}`}>
        <img className={`pizza__image ${pizzaObj.soldOut ? "pizza__image--sold-out" : ""}`} src={pizzaObj.photoName}
             alt={pizzaObj.name}/>
        <div className="pizza__container">
            <h3 className="pizza__name">{pizzaObj.name}</h3>
            <p className="pizza__ingredients">{pizzaObj.ingredients}</p>
            <span className="pizza__status">{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
        </div>
    </li>
)
