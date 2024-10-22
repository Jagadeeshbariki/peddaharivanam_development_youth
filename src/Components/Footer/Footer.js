import React from 'react';
import styles from './Footer.module.css';
import FooterData from "./FooterConfing.json"

const Footer = () => {
  return (
    <div className={styles.FooterContainer}>
      {
        FooterData.map((Data, ind)=>{
            return <div key={ind} className={styles.FooterSubContainer}>

                <div className={styles.AboutUs}>
                    <h2>Our Details</h2>
                    {
                        Data.AbountUs.map((AboutData, ind)=>{
                            return <div key={ind}>
                                <p><a href={AboutData.PLink} target='_blank' rel='noreferrer'>{AboutData.Phone}</a></p>
                                <p><a href={AboutData.ILink} target='_blank' rel='noreferrer'>{AboutData.Instagram}</a></p>
                                <p><a href={AboutData.YLink} target='_blank' rel='noreferrer'>{AboutData.YouTube}</a></p>
                            </div>
                        })
                    }
                </div>
                <div>
                    <h2>Externel Links</h2>
                    {
                        Data.ExternelLinks.map((ELink, ind)=>{
                            return <div>
                                <p><a href={ELink.Link} target='_blank' rel='noreferrer'>{ELink.Name}</a></p>
                            </div>
                        })
                    }
                </div>
                <div>
                    <h2>About Developer</h2>
                    {
                        Data.AboutDeveloper.map((AboutDev, ind)=>{
                            return <div>
                                 <p><a href={AboutDev.Link} target='_blank' rel='noreferrer'>{AboutDev.Name}</a></p>
                                 <p><a href={AboutDev.WhatsAppLink} target='_blank' rel='noreferrer'>{AboutDev.Phone}</a></p>
                                 <p><a href={AboutDev.MailLink} target='_blank' rel='noreferrer'>{AboutDev.Mail}</a></p>
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

export default Footer
