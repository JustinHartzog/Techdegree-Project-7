import React from 'react';
import Image from './Image';


const ImageList = props => {

  const results = props.data;
  let images = results.map(image =>
    <Image farm={image.farm}
              serverID={image.server}
              id={image.id}
              secret={image.secret}
              key={image.id} />
  )

  return(
    <div className="photo-container">
      <ul>
        {images}
      </ul>
    </div>
  )
}

export default ImageList;
