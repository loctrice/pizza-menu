import React from "react";

export const  Footer = ({openHour = 12, closeHour = 22}) => {
    const hour = new Date().getHours();
    const isOpen = hour >= openHour && hour <= closeHour;

    return (
        <footer className="footer">
            {isOpen ? (
                <Order closeHour={closeHour} openHour={openHour} />
            ) : (
                <p>
                    We're happy to welcome you between {openHour}:00 and {closeHour}:00.
                </p>
            )}
        </footer>
    );
}

const Order = ({ closeHour, openHour }) => (
    <div className="order">
        <p>
            We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
            online.
        </p>
        <button className="order__action">Order</button>
    </div>
)