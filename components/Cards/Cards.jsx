import React from "react"
import Card from "/components/Card/Card.jsx"
import data from "/data.js"

const images = require.context('../../images', true);
// const imageList = images.keys().map(image => images(image));

export default function Cards() {
    const cards = data.map(trip => {
        return (
            <Card
                className="entries" 
                key={trip.id}
                img={images(trip.imageUrl)}
                {...trip}
            />
        )
    })
    return cards
}