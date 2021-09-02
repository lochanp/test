import React from 'react';

// import '../assets/css/libraries/carousel.css';
import { Carousel } from 'react-responsive-carousel';

function ArtistResponsiveCarousel(data) {
  const image_collection = data.data;

  return (
    <div className="image-carousel">
      <Carousel
        infiniteLoop={true}
        showArrows={true}
        showIndicators={false}
        showStatus={false}
        autoPlay={false}
        emulateTouch={false}>
        {Array.isArray(image_collection) &&
          image_collection.map((imgsname, imgsindex) => (
            <div key={imgsindex}>
              <img className='artwork' src={imgsname} />
            </div>
          ))}
      </Carousel>
    </div>
  );
}

export default ArtistResponsiveCarousel;
