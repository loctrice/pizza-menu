import React, {useState} from "react";
import "../Tooltip.scss";

export const Footer = ({openHour = 12, closeHour = 22}) => {
    const hour = new Date().getHours();
    const isOpen = hour >= openHour && hour <= closeHour;

    return (
        <footer className="footer">
            {isOpen ? (
                <Order closeHour={closeHour} openHour={openHour}/>
            ) : (
                <p>
                    We're happy to welcome you between {openHour}:00 and {closeHour}:00.
                </p>
            )}
        </footer>
    );
}

const Tooltip = ({children, message}) => {
    return (
        <div className="tooltip-container">
            {children}
            <div className="tooltip__content">
                {message}
                <span className="tooltip__arrow"></span>
            </div>
        </div>
    );
};

const Order = ({closeHour, openHour}) => {
    const [isTooltipVisible, setTooltipVisible] = useState(false);

    const toggleTooltip = () => {
        setTooltipVisible(!isTooltipVisible);
    };
    return (

        <div className="order">
            <p>
                We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
                online.
            </p>
            <button onClick={toggleTooltip} className="order__action">Order</button>
            {isTooltipVisible && (
                <Tooltip message="This is just a mock react site. We don't actually take orders."/>
            )}
        </div>
    )
}