import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import {PizzaProvider} from './providers/PizzaContext';
import {Header} from './components/Header';
import {Footer} from "./components/Footer";
import {Menu} from "./components/Menu";

function App() {
    return (
        <PizzaProvider>
            <div className="container">
                <Header/>
                <Menu/>
                <Footer/>
            </div>
        </PizzaProvider>
    );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
