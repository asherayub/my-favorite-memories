import React from "react"

import Card from "/components/Card/Card.jsx"
import data from "/data.js"

export default function Cards() {
    const cards = data.map(trip => {
        return (
            <Card
                className="entries" 
                key={trip.id}
                {...trip}
            />
        )
    })
    return cards
}