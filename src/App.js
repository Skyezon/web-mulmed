import React from 'react';
import './main.css';
import Atas from './component/atas';
import Tengah from './component/tengah';
import Navbar from './component/header/navbar';

const App = () => {
  return(
    <div>
      <Navbar />
      <Atas />
      <Tengah />
    </div>
  )
}

export default App;
