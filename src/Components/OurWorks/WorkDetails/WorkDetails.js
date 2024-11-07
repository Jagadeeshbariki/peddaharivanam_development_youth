import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import workData from '../OurworksConfi.json';
import styles from './WorkDetails.module.css';
import Youtube from 'react-youtube';

const WorkDetails = () => {
  const { workId } = useParams();
  const navigate = useNavigate();
  const work = workData.find(w => w.id === parseInt(workId));
  console.log(workId)

  if (!work) {
    return <p>Work not found.</p>;
  }

  return (
    <div className={`${styles.workDetailsContainer}`}>
      <button onClick={() => navigate(-1)}>Back to Works List</button>
      <h2 className={`text-center ${styles.workHeading}`}>{work.title}</h2>
      <p className={styles.workDiscription}>{work.description}</p>

      <h3>Photos</h3>
      <div className={`${styles.ImageContainer}`}>
        {work.photos.map((photo, index) => (
          <img key={index} src={photo} alt={`photo-${index}`}  className={styles.workImg} />
        ))}
      </div>

      <h3>Videos</h3>
      <div className={`${styles.VideoContainer}`}>
        {work.videos.map((video, index) => (
          
           video ?(<Youtube key={index}
            videoId={video}
            opts={{
              width: '400',
              height: '300',
              playerVars: {
                autoplay: 0,
              },
            }} />):<p>Video Not Available</p>
      ))}
      </div>

      <h3>Documents</h3>
      <ul>
        {work.documents.map((doc, index) => (
          <li key={index}>
            <a href={doc.url} target="_blank" rel="noopener noreferrer">{doc.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkDetails;
