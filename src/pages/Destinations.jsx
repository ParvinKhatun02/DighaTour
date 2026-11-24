import React from 'react'
import { ArrowRight } from "lucide-react";
import Destinations_data from '../data/Destinations_data';
import { useState } from "react";


const Destinations = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="destinations">
    <div className="destinations-title">
       <h1>Destinations</h1>
       <button className='des-btn' onClick={() => setShowAll(!showAll)}>
       {showAll ? "Show Less" : "See All"}<ArrowRight size={18}/>
       </button>
    </div>
    <div className="destinations-grid">
  {Destinations_data.slice(0, showAll ? destinations.length : 4).map((destination) => (
    <div className="destination-card" key={destination.id}>
      <img
        src={destination.image}
        alt={destination.title}
        className="destination-image"
      />

      <div className="destination-overlay">
        <div className="destination-info">
          <h3>{destination.title}</h3>
          <p className="destination-address">{destination.address}</p>
          <p className="destination-description">
            {destination.description}
          </p>

          <button className="see-more-btn">Explore More</button>
        </div>
      </div>
    </div>
  ))}
</div>
     
      
    </section>
  )
}

export default Destinations
