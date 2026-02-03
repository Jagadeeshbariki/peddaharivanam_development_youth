import React, { useState } from 'react';
import styles from './Menu.module.css';
import MenuData from './MenuConfig.json';
import { Routes, Route, Link} from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Members from '../About/OurMembers/Members';
import Contact from '../Contact/Contact';
import Ourworks from '../OurWorks/Ourworks';
import WorkDetails from '../OurWorks/WorkDetails/WorkDetails';
import Account from '../Accounting/Account';
import Admit from '../Admit/Admit';


const Menu = () => {

  const [ActiveMenu, setActiveMenu] = useState(window.location.hash.substring(1))

// Handling the click event on the menu

const HandleClick=(ClickedMenu)=>{
  setActiveMenu(ClickedMenu)
}

  return (
    <div className={`${styles.MenuContainer}`}>
      <ul className={`${styles.MenuList}`}>
        {
            MenuData.map((MenuItem, ind)=>{
                return <li className={ActiveMenu === MenuItem.link? styles.ActiveClass :""} key={ind}><Link  style={{textDecoration:'none', color:"black"}} onClick={()=>HandleClick(MenuItem.link)} to={MenuItem.link}>{MenuItem.TabName}</Link></li>
            })
        }
      </ul>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/members' element={<Members/>}/>
        <Route path='/contactus' element={<Contact/>} />
        <Route path='/ourworks' element={<Ourworks/>}/>
        <Route path='/ourworks/:workId' element={<WorkDetails/>}/>
        <Route path='/accounts' element={< Account/> }/>
        <Route path='/admit' element={<Admit/>}/>
      </Routes>
    </div>
    
  )
}

export default Menu
