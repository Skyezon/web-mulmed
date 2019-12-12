import React from 'react'
import CrewCard from './crew-card'

const upperSec = ['juan','nadhifa','sheline']
const lowerSec = ['richard','bryan','yesi']



const crew = () => {
    return(
        <section className="main__container">

            <div className="crew">
            <CrewCard />

                <div className="crew--up">
                    <img id="juan" className="crew--up-img"/>
                    <img id="nadhifa" className="crew--up-img"/>
                    <img id="sheline" className="crew--up-img"/>
                </div>
                <div className='crew--low'>
                    <img id="richard" className="crew--low-img"/>    
                    <img id="bryan" className="crew--low-img"/>
                    <img id="yesi" className="crew--low-img"/>
                </div>
            </div>
        </section>
    )
}

export default crew