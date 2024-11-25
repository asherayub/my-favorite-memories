import React from "react"

export default function Card(props) {
    const {title, location, googleMapsUrl, startDate, endDate, description, imgDesc, imageUrl} = props
    let endDateContent = ''
    if (startDate !== endDate) {
        endDateContent = ' - ' + endDate
    }

    console.log(props.img)

    return (
        <article className="entry">
            <div className="entry--image">
                <img src={imageUrl} alt={imgDesc} />
            </div>
            <div className="entry--info">
                <div className="entry--location">
                    <i className="fa-solid fa-location-dot entry__pink__icon"></i>
                    <h1 className="entry--location--title">{location}</h1>
                    {googleMapsUrl && <a href={googleMapsUrl} 
                        target="_blank" 
                        alt={`The google maps location for ${location}`}
                    >View on GoogleMaps</a>}
                </div>
                <h2 className="entry--title">{title}</h2>
                <h3 className="entry--dates">{startDate}{endDateContent}</h3>
                <p className="entry--desc">{description}</p>
            </div>
        </article>
    )
}