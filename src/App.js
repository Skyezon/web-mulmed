import React from 'react';
import './main.css';
import Atas from './component/atas';
import Tengah from './component/tengah';
import Navbar from './component/header/navbar';
import Bawah from './component/bawah'

const App = () => {
  return(
    <div>
      <Navbar />
      <Atas />
      <Tengah />
      <Bawah />
    </div>
  )
}

export default App;
