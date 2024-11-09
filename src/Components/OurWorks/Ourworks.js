import React from 'react';
import styles from './Ourworks.module.css';
import { useNavigate } from 'react-router-dom';
import OurworksData from './OurworksConfi.json'


const Ourworks = () => {
  const navigate = useNavigate();


  const handleWorkClick = (workId) => {    //to handle the click on the work
    navigate(`/ourworks/${workId}`);
  };
    
  return (
    <div className={`${styles.OurworksContainer}`}>
      <h2 className={styles.WorksHeading}>Our Works</h2>
      <ul>
        {
          OurworksData.map((work)=>{
            return <li className={styles.WorkList}>
              <h3 onClick={()=>handleWorkClick(work.id)} style={{cursor:'pointer', color:"blue"}}>{work.title}</h3>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default Ourworks
