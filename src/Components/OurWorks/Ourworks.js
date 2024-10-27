import React from 'react';
import styles from './Ourworks.module.css';
import OurworksData from './OurworksConfi.json'
import { Link, Routes, Route } from 'react-router-dom';
import Gallary from './Gallary/Gallary';
import Videos from './Videos/Videos';
import Documents from './Documents/Documents';

const Ourworks = () => {
    
  return (
    <div className={`${styles.OurworksContainer}`}>
      <div className={`${styles.OurworksNavMenu}`}>
        {
           OurworksData.OurWorksNavMenu.map((Buttons, ind)=>{
                return <Link key={ind} to={Buttons.link}>
                    <button key={ind} className={`btn btn-primary ${styles.NavBtn}`}>{Buttons.BtnName}</button>
                </Link>
           })
        }
      </div>

      <Routes>
        <Route path='gallary' element={<Gallary/>}/>
        <Route path='videos' element={<Videos/>}/>
        <Route path='documents' element={<Documents/>}/>
      </Routes>
    </div>
  )
}

export default Ourworks
