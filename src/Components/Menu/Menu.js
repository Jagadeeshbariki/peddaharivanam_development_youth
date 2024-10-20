import React from 'react';
import styles from './Menu.module.css';
import MenuData from './MenuConfig.json'

const Menu = () => {
  return (
    <div className={`${styles.MenuContainer}`}>
      <ul className={`${styles.MenuList}`}>
        {
            MenuData.map((MenuItem, ind)=>{
                return <li key={ind}>{MenuItem.TabName}</li>
            })
        }
      </ul>
    </div>
  )
}

export default Menu
