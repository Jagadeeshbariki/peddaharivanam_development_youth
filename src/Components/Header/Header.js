import React from 'react';
import styles from './Header.module.css';
import logo from '../../Assets/LogoWithoutBG.png';

const Header = () => {
  return (
    <div className={`${styles.HeaderContainer}`}>
        <div className={`${styles.LogoContainer}`}>
              <img className={`${styles.logo}`} src={logo} alt='Logo'/>
              <p>Pedda Harivanam Development Youth</p>
        </div>
    </div>
  )
}

export default Header
