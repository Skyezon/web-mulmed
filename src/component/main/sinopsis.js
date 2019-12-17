import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm} from '@fortawesome/free-solid-svg-icons'

const sinopsis = () => {
    return(
        <section className='main__container'>
            {/* <img className='main__poster' src='../img/favicon.jpg' alt='poster'/> */}
               <div className="article__icon">
                   </div> 
                <article className='article' id="Sinopsis">
                <FontAwesomeIcon icon={faFilm} size="5x"/>
                    <h3 className='article__heading'>Bawang putih dan Bawang merah</h3>
                <p className='article__sinopsis'>Pada suatu hari hidup seorang gadis cantik bernama bawang putih, ia tinggal bersama ibu tiri dan kakak tirinya. Ibu tiri dan kakak tirinya selalu menyiksanya, namun suatu ketika terjadi suatu musibah. Siapakah yang akan mengalami musibah tersebut? Bagaimana kelanjutan ceritanya? Mari simak cerita berikut ini. </p> 
            </article>    
        </section>
    )
}

export default sinopsis