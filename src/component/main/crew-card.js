import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCheckSquare, faPaw} from '@fortawesome/free-solid-svg-icons'
import { version } from 'punycode'



const namas = ['Juan Sebastian','Bryan Leonardo','Richard Delbert','Sheline Kristanty','Nadhifa Rachma','Yesiana Phan'];
const perans = ['Ibu bawang merah','Ayah bawang putih','Kakek tua','Ibu bawang putih','Bawang putih','Bawang merah']
const objek_name = ['juan','bryan','richard','sheline','nadhifa','yesiana'];
const nims = ['2201754311','2201745004','2201809140','2201750250','2201742860',' 2201745080']
const pos = ['up','up','up','down','down','down']


const crewGen = (namas,perans,objek_name,nims,pos) =>{
    let objeks = []
    for (let i = 0; i < namas.length; i++) {
       var hasil =   {
            key : objek_name[i],
            nama : namas[i],
            peran : perans[i],
            nim : nims[i],
            pos : pos[i]
        }
        objeks.push(hasil)
    }
    return(objeks)
}

const crewCard = ()=>{
    let hasil = crewGen(namas,perans,objek_name,nims,pos)
    console.log(hasil)

    const tagnya = hasil.map((satu) => {
        return(
            <div className={`card__item card__item--${satu.pos}`}>
                <div className="card__picture">
                    <FontAwesomeIcon icon={faPaw} size="3x"/>
                </div>
                <div className="card__desc">
                    <span className="card__name">Nama : {satu.nama}</span>
                    <span className="card__peran">Peran : {satu.peran}</span>
                    <span className="card__nim">Nim &nbsp; &nbsp; : {satu.nim}</span>
                </div>
            </div>
        )
    })
    return(
            tagnya
    
    )
}

export default crewCard