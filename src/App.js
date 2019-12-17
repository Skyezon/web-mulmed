import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './main.css';
import Atas from './component/atas';
import Tengah from './component/tengah';
import Navbar from './component/header/navbar';
import Bawah from './component/bawah'

const App = () => {
  return(
    <div className="wrapper">
      <Navbar />
      <Atas />
      <Tengah />
    </div>
  )
}

export default App;
