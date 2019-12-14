import React from 'react'
import Sinopsis from './main/sinopsis'
import Film from './main/film'
import Crew from './main/crew'
import Bawah from './bawah'

const tengah = () =>{
    return(
    <main className='main'>
    <Sinopsis />
    <Film />
    <Crew />
    <Bawah />
    </main>

)}

export default tengah;