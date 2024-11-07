import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import workData from '../OurworksConfi.json';
import styles from './WorkDetails.module.css';

const WorkDetails = () => {
  const { workId } = useParams();
  const navigate = useNavigate();
  const work = workData.find(w => w.id === parseInt(workId));
  console.log(workId)

  if (!work) {
    return <p>Work not found.</p>;
  }

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back to Works List</button>
      <h2 className={`text-center ${styles.workHeading}`}>{work.title}</h2>
      <p>{work.description}</p>

      <h3>Photos</h3>
      <div style={{ display: 'flex', gap: '10px' }}>
        {work.photos.map((photo, index) => (
          <img key={index} src={photo} alt={`photo-${index}`} style={{ width: '500px', height: 'auto' }} className={styles.workImg} />
        ))}
      </div>

      <h3>Videos</h3>
      {work.videos.map((video, index) => (
        <video key={index} controls style={{ width: '100%', marginBottom: '10px' }}>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ))}

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
