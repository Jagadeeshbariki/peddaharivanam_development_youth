import React from 'react';
import Youtube from 'react-youtube';
import styles from './Videos.module.css';

const Videos = () => {

  const VideoId=[
    
    "wU7RNOECpyI",
    "XNRgnWWDFws",
    "MJ-tSXXhprg",
    "HKLNHyDQnnY",
    "Fxy1ufl11Uo"
  ]
  return (
    <div className={`${styles.YVideos}`}>
      {
        VideoId.map((VId, ind)=>{
          return <Youtube key={ind}
          videoId={VId}
          opts={{
            width: '400',
            height: '300',
            playerVars: {
              autoplay: 0,
            },
          }} />
        })
      }
    </div>
  )
}

export default Videos
