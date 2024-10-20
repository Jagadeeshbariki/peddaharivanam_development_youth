import React from 'react';
import styles from './Home.module.css';
import DevImg from '../../Assets/ImgDev.png';

const Home = () => {
  return (
    <div className={`${styles.HomeContainer}`}>
      <div className={`${styles.HomeIntro}`}>
        <div className={`${styles.OurGoals}`}>
            <i className={`${styles.slogon}`}>"Village Growth Starts with Youth Empowerment!"</i>
            <h2>Our Aims</h2>
            <ol>
                <li> Community Development</li>
                <li>Infrastructure Development</li>
                <li>Agriculture and Livelihood Support</li>
                <li>Health and Well-being</li>
                <li> Environmental Conservation</li>
                <li>Government Schemes and Social Welfare</li>
                <li>Digital Literacy and E-Governance</li>
                <li>Emergency Relief and Disaster Management</li>
            </ol>
        </div>
        <div className={`${styles.ImgDevOfVlg}`}>
            <img className={`${styles.devimg}`} src={DevImg} alt='VillageImg' />
        </div>
      </div>
    </div>
  )
}

export default Home
