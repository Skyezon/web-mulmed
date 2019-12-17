import React from 'react'
import CrewCard from './crew-card'

const upperSec = ['juan','nadhifa','sheline']
const lowerSec = ['richard','bryan','yesi']



const crew = () => {
    return(
        <section className="main__container">

            
            <div className="card" id="Crew">
                <h4 className="card__heading">crew</h4>
            <CrewCard />

            </div>
        </section>
    )
}

export default crew