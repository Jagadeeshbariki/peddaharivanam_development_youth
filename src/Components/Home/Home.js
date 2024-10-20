import React from 'react';
import styles from './Home.module.css';
import DevImg from '../../Assets/ImgDev.png';
import YouthImg from '../../Assets/YouthImage.png';

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
            <a href='https://wa.me/916300963789?text=I%20am%20interested%20to%20Join%20Your%20Group' target="_blank" rel="noreferrer"><button className={`${styles.JoinBtn}`}>Join Us</button></a>
        </div>
        <div className={`${styles.ImgDevOfVlg}`}>
            <img className={`${styles.devimg}`} src={DevImg} alt='VillageImg' />
        </div>
      </div>
      <h2 className={`${styles.HomeSecondSectionHeading}`}>Pedda Harivanam Development Youth: Building a Brighter Future Together</h2>
      <div className={`${styles.HomeSecondSection}`}>
        <div className={`${styles.OurIntro}`}>
          
          <p><em><b>"Pedda Harivanam Development Youth"</b></em> is a non-political group of passionate youth dedicated to the betterment of our village. Our mission is to address local issues, foster growth, and ensure transparency by holding local leaders, panchayati, and sachivalayam employees accountable for village development. We will actively engage in activities that improve infrastructure, promote cleanliness, and bring modern facilities to the village, such as public services and health initiatives. By uniting, we aim to build a brighter future for Pedda Harivanam, empowering the next generation and ensuring that every voice in our village is heard.</p>

          <p><b>Let’s work together for a cleaner, healthier, and more prosperous village!</b></p>
        </div>
        <div className={`${styles.secondSectionImg}`}>
         <img src={YouthImg} alt='Youth Discussion' />
        </div>
      </div>
    </div>
  )
}

export default Home
