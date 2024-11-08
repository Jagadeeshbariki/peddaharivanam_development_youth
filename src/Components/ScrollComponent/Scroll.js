import React, { useEffect, useState } from 'react';
import styles from './Scroll.module.css';

const Scroll = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const menuElement = document.querySelector('.menu'); // Make sure this selector matches your menu component

      if (menuElement) {
        const menuPosition = menuElement.getBoundingClientRect();
        

        // Update logic to check if menu top is out of view
        const menuIsOutOfView = menuPosition.top < 0;
        

        // Show the button if menu is out of view and scrolled down
        setVisible(window.scrollY > 200 && menuIsOutOfView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button 
      className={`${styles['scroll-to-top']} ${visible ? styles.show : ''}`}
      onClick={handleClick}
    >
      <img className={styles.btnImg} src='https://cdn-icons-png.flaticon.com/128/10486/10486739.png' alt='Go To Top' />
    </button>
  );
};

export default Scroll;
