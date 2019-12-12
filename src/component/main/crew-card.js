import React from 'react'
import { version } from 'punycode'

const namas = ['Juan sebastian','Bryan leonardo','Richard Delbert','Sheline tan','Nadhifa Z','Yesiana phan'];
const perans = ['Ibu bawang merah','Ayah bawang putih','Kakek tua','Ibu bawang putih','Bawang putih','Bawang merah']
const objek_name = ['juan','bryan','richard','sheline','nadhifa','yesiana']


const crewGen = (namas,perans,objek_name) =>{
    let objeks = []
    for (let i = 0; i < namas.length; i++) {
       var hasil =   {
            key : objek_name[i],
            nama : namas[i],
            peran : perans[i]
        }
        objeks.push(hasil)
    }
    return(objeks)
}

const crewCard = ()=>{
    let hasil = crewGen(namas,perans,objek_name)
    
    return(
        <div>
            nanti ada crew 3 diatas <br />
            terus 3 dibawa ada peran sama nama <br />
            sampe sini dulu  T_T <br />
            kalau ada tambahan kasih tau yak<br /><br />
            btw itu nanti perlu foto kalian :)
        </div>
    )
}

export default crewCard