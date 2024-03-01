import {usePizzas} from "../providers/PizzaContext";
import React, {useEffect, useMemo} from "react";
import {Pizza} from "./Pizza";

export const  Menu = () => {
    const { pizzas, fetchPizzas } = usePizzas();
    const numPizzas = pizzas.length;

    useEffect(() => {
        fetchPizzas();
    }, []);

    const renderedPizzas = useMemo(() => {
        return pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
        ));
    }, [pizzas]);

    return (
        <main className="menu">
            <h2 className="menu__intro">Our menu</h2>

            {numPizzas > 0 ? (
                <>
                    <p className="menu__description">
                        Authentic Italian cuisine. 6 creative dishes to choose from. All
                        from our stone oven, all organic, all delicious.
                    </p>

                    <ul className="menu__contents">
                        {renderedPizzas}
                    </ul>
                </>
            ) : (
                <p className="menu__description">We're still working on our menu. Please come back later :)</p>
            )}
        </main>
    );
}