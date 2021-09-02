import React, { useState, useEffect } from 'react'


import Ic_Next from "../assets/images/ic-next.svg";
import Ic_Previous from "../assets/images/ic-previous.svg";

// portraits
import aiony from '../assets/images/portraitss/aiony1.jpg'
import austin from '../assets/images/portraitss/austin2.jpg'
import houcine from '../assets/images/portraitss/houcine3.jpg'
import jurica from '../assets/images/portraitss/jurica4.jpg'
import michael from '../assets/images/portraitss/michael5.jpg'
import philip from '../assets/images/portraitss/philip6.jpg'
import leene from '../assets/images/portraitss/leene7.jpg'
import robert from '../assets/images/portraitss/robert8.jpg'
import stefan from '../assets/images/portraitss/stefan9.jpg'
import { connect } from 'react-redux';

function ArtistCaraousel(props) {
    
  // this array holds all the images name
  // const image_collection = [aiony, austin, houcine, jurica, philip, michael, leene, robert, stefan];
  const image_collection = props.getArtwork.artworkDetails.images;

  // this state holds which image index is active
  const [activeIndex, setactiveIndex] = useState( 0 );
  
  // this state holds the activeindex for color selection

  // console.log(data)

  // this state holds which image is active 
  // const [activeImg, setactiveImg] = useState( image_collection[ activeIndex !== -1 || image_collection.length + 1 ? (activeIndex) : (0) ] );
  const [activeImg, setactiveImg] = useState( image_collection[ activeIndex ] );

  useEffect(() => {
    setactiveImg(image_collection[ activeIndex ])
  }, [])


  function SetImageIndex( moveahead ) {
    if ( moveahead === 'increase' ){
      if ( activeIndex !== image_collection.length ){
        if ( activeIndex >= 0 && activeIndex < ( image_collection.length - 1 )){
          setactiveIndex( activeIndex + 1 )
          setactiveImg( image_collection[ activeIndex + 1 ] )
          console.log(activeIndex)
        }
      }
    }else if ( moveahead === 'decrease' ){
      if ( activeIndex !== 0 && activeIndex < image_collection.length){
        setactiveImg( image_collection[ activeIndex - 1 ] )
        setactiveIndex( activeIndex - 1 )
        console.log(activeIndex)
      }
    }
  }



  function SetAll(name, index) {
    setactiveImg( name );
    setactiveIndex( index );
  }

  // useEffect(() => {
  //   SetAll(image_collection[0], 0)
  // }, [])
 
  return (

    <div className="caraousel-main-container">
      <div className="caraousel-image-container" >
        {/* this will decreement the index to show the previous image */}

        <picture>
            {/* <source media="(min-width: 1024px)" srcset={Artwork1} />
            <source media="(max-width: 1024px)" srcset={Artwork1} /> */}
            {/* { console.log(data.data[0]) }
                      {console.log("hi")} */}
            <img className="caraousel-image" src={ activeImg } alt="artist-photo"/>
        </picture>
        {/* <img className = "caraousel-image"src={ activeImg } alt = "current image" /> */}
      </div>
      <div className="caraousel-container" >
        <img className = "image-controls" src = { Ic_Previous } onClick={ () => SetImageIndex('decrease') } alt = "icprevious" />
        <div className="caraousel-button-container" >
          {/* function lets you get all the image and its index */}
          {
            image_collection.map( (imgsname, imgsindex) => (
              <div key={ imgsindex } >
                {/* the anonymous function lets you set the active image and its index */}
                <button className={(imgsindex === activeIndex) ? "carousel-buttons-color color-holding-active" : "carousel-buttons-color" } onClick={() => SetAll(imgsname, imgsindex) } ></button>
              </div>
            ) )
          }
        </div>
        {/* this will increement the index to show the next image */}
        <img className = "image-controls" src = { Ic_Next } onClick={ () => SetImageIndex('increase') }  alt = "icnext" />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  getArtwork: state.getArtwork
})

export default connect(mapStateToProps)(ArtistCaraousel)
