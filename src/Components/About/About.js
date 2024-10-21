import React from 'react';
import styles from './About.module.css';
import AboutData from './AboutConfig.json';
const About = () => {
  return (
    <div className={`${styles.AboutContainer}`}>
        {
          AboutData.map((about, ind)=>{
            return <div  key={ind}>
            <div className={styles.HeadingSection}>
              <h2 className={styles.AboutHeading}>How We Have Started</h2>
              <a href="#Members">Our Members</a>
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
            <h2 id='Members' className={styles.MembersHeading}>Our Gourp Members</h2>
            <div className={`${styles.MembersContainer}`}>
              {
                about.Members.map((member, ind)=>{
                  return <div className={`${styles.MemberCard}`} key={ind}>
                    <img className={`${styles.MemberImg} img-thumbnail`} src={member.ImageURL} alt={member.Name} width={100} height={150}/>
                    <p><b><i>Name: {member.Name}</i></b></p>
                    <p><b>Age: </b>{member.Age}</p>
                    <p><b>Qualification:</b>{member.Qualification}</p>
                    <p><b>What Motivate Him to Join Our Group:</b>{member.Motivation}</p>
                  </div>
                })
              }
            </div>
            </div>
          })
        }
    </div>
  )
}

export default About
