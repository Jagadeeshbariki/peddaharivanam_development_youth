import React from 'react';
import styles from './About.module.css';
import AboutData from './AboutConfig.json';
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <div className={`${styles.AboutContainer}`}>
        {
          AboutData.map((about, ind)=>{
            return <div  key={ind}>
            <div className={styles.HeadingSection}>
              <h2 className={styles.AboutHeading}>How We Have Started</h2>
              <Link to="/members">Our Members</Link>
            </div>
              {
                about.history.map((para, ind)=>{
                  return <div key={ind} className={styles.AboutPara}>
                    <p >
                    {para.p}
                  </p>
                  </div>
                })
              }
            </div>
          })
        }

     
    </div>
  )
}

export default About
