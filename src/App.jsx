import React from "react";

import Nav from "./components/Nav/Nav.jsx"
import Cards from "./components/Cards/Cards.jsx"
import Footer from "./components/Footer/Footer.jsx"

export default function App() {
    return (
        <div className="container">
            <Nav />
            <Cards />
            <Footer />
        </div>
    )
}