import React from 'react';
import styles from './Admit.module.css';
import admitData from './AdmitConfig.json';

const Admit = () => {
  return (
    <div className={styles.AdmitContainer}>
      <div className={styles.AdmitHeader}>
        <h2>Admit Section</h2>
        <p>
          This section highlights volunteer profiles, transparent panchayat
          account summaries, and working details for ongoing village
          development. Use it to add and review information in a structured
          way.
        </p>
      </div>

      <div className={styles.SectionWrapper}>
        <h3 className={styles.SectionTitle}>Volunteer Profiles</h3>
        <div className={styles.SectionGrid}>
          {admitData.volunteerProfiles.map((profile) => (
            <div className={styles.Card} key={profile.name}>
              <h4>{profile.name}</h4>
              <p>{profile.role}</p>
              <ul>
                {profile.focus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.SectionWrapper}>
        <h3 className={styles.SectionTitle}>Panchayat Account Details</h3>
        <div className={styles.SectionGrid}>
          {admitData.panchayatAccounts.map((account) => (
            <div className={styles.Card} key={account.title}>
              <h4>{account.title}</h4>
              <ul>
                {account.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.SectionWrapper}>
        <h3 className={styles.SectionTitle}>Working Details</h3>
        <div className={styles.SectionGrid}>
          {admitData.workingDetails.map((work) => (
            <div className={styles.Card} key={work.title}>
              <h4>{work.title}</h4>
              <ul>
                {work.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admit;
