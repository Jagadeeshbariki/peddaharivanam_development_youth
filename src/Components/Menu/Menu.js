import React from 'react';
import styles from './Menu.module.css';
import MenuData from './MenuConfig.json';
import { Routes, Route, Link} from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Members from '../About/OurMembers/Members';
import Contact from '../Contact/Contact';


const Menu = () => {
  return (
    <div className={`${styles.MenuContainer}`}>
      <ul className={`${styles.MenuList}`}>
        {
            MenuData.map((MenuItem, ind)=>{
                return <li key={ind}><Link style={{textDecoration:'none', color:"black"}} to={MenuItem.link}>{MenuItem.TabName}</Link></li>
            })
        }
      </ul>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/members' element={<Members/>}/>
        <Route path='/contactus' element={<Contact/>} />
      </Routes>
    </div>
    
  )
}

export default Menu
