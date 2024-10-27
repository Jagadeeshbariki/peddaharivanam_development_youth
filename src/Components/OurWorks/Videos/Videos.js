import React from 'react';
import Youtube from 'react-youtube';
import styles from './Videos.module.css';

const Videos = () => {

  const VideoId=[
    "XNRgnWWDFws",
    "wU7RNOECpyI",
    "uKtk0FeOZw8",
    "gXbjujix5lU",
    "R0KqA9DMqbI"
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
