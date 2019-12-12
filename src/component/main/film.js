import React from 'react'

const film = ()=>{
    return(
        <section className="main__container">
            <div className="film">
                <h3 className="film__heading">bawang putih dan bawang merah</h3>
                <iframe className="film__video" width="560" height="315" src="https://www.youtube.com/embed/bx1Bh8ZvH84" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </section>
    )
}

export default film