import React from 'react';
import styles from './Contact.module.css';
import ContactData from './ContactConfig.json';

const Contact = () => {
  return (
    <div className={`${styles.ContactContainer}`}>
      <h2>Contact Us</h2>
      <p>We are here to answer any questions and discuss how we can work together for our village's development.</p>
      <div className={styles.contactForm}>
        <iframe src="https://ee.kobotoolbox.org/x/Zfn9HBkd" title='Contact Us Form'  frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </div>

     <div className={`${styles.SocialMediaContainer}`}>
        <h2>Our Social Media Accounts</h2>
        <div className={styles.Icons}>
            
            {
                ContactData.map((Data, ind)=>{
                    return <div className={styles.SocialMediaIcons}>
                        <a href={Data.URLofsocialMedia} target="_blank" rel="noreferrer"><img src={Data.LogoURL} alt={Data.Name} width={60} height={60} /> </a>
                    </div>
                })
            }
        </div>
     </div>
     
    </div>
  )
}

export default Contact
