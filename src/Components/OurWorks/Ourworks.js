import React from 'react';
import styles from './Ourworks.module.css';
import { useNavigate } from 'react-router-dom';
import OurworksData from './OurworksConfi.json';

const Ourworks = () => {
  const navigate = useNavigate();

  const handleWorkClick = (workId) => {
    navigate(`/ourworks/${workId}`);
  };

  const getShortDescription = (description) => {
    const words = description.split(" ");
    if (words.length > 25) {
      return words.slice(0, 25).join(" ") + "...";
    }
    return description;
  };

  return (
    <div className={styles.OurworksContainer}>
      <h2 className={styles.WorksHeading}>Our Works</h2>

      <ul className={styles.WorkListContainer}>
        {OurworksData.map((work) => (
          <li key={work.id} className={styles.WorkList}>
            {/* Title */}
            <h3
              className={styles.WorkTitle}
              onClick={() => handleWorkClick(work.id)}
            >
              {work.title}
            </h3>

            <div className={styles.ourWorkSubContainer}>
              {/* Image */}
              {work.photos && work.photos.length > 0 && (
                <img
                  src={work.photos[0]}
                  alt={work.title}
                  className={styles.WorkImage}
                  
                />
              )}

              {/* Description */}
              <p className={styles.WorkDescription}>
                {getShortDescription(work.description)}
              </p>

              {/* Read More button */}
              {work.description.split(" ").length > 25 && (
                <button
                  className={styles.ReadMoreButton}
                  onClick={() => handleWorkClick(work.id)}
                >
                  Read More
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ourworks;
