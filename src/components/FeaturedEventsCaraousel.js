import React, { useEffect, useRef, useState } from 'react'
import Moment from 'react-moment'

import Arrow_Left_Long from '../assets/images/arrow-left-long.svg';
import Arrow_Right_Long from '../assets/images/arrow-right-long.svg';
import Ic_Next from "../assets/images/ic-next.svg";
import Ic_Previous from "../assets/images/ic-previous.svg";
import InfoList from './InfoList';

function FeaturedEventsCaraousel({eventList}) {
    const image_collection = eventList

    // this state holds which image index is active
    const [activeIndex, setactiveIndex] = useState( 0 );
    
    // this state holds the activeindex for color selection
    const [activeContainer, setactiveContainer] = useState( image_collection[ activeIndex ] );

    const imageSize = React.useRef()
    const imageContainer = useRef()

    // useEffect(() => {
    //     handleSize(imageSize, "From useEFFECT")
    // }, [])

    function SetImageIndex( moveahead ) {
        if ( moveahead === 'increase' ){
            if ( activeIndex !== image_collection.length ){
                if ( activeIndex >= 0 && activeIndex < ( image_collection.length - 1 )){
                setactiveIndex( activeIndex + 1 )
                setactiveContainer( image_collection[ activeIndex + 1 ] )
                }
            }
            if(activeIndex==image_collection.length - 1){
                setactiveIndex( 0 )
                setactiveContainer( image_collection[ 0 ] )
            }
        }
        if ( moveahead === 'decrease' ){
            if ( activeIndex !== 0 && activeIndex < image_collection.length){
                setactiveIndex( activeIndex - 1 ) 
                setactiveContainer( image_collection[ activeIndex - 1 ] )
            }
            if(activeIndex==0){
                setactiveIndex( image_collection.length - 1 )
                setactiveContainer( image_collection[ image_collection.length - 1 ] )
            }
        }
    }


    function SetAll( name, index ) {
        setactiveIndex( index );
        setactiveContainer( image_collection[ index ] )
    }

    return (
        <div className="featured-events-caraousel">
            <div className="caraousel-event-container">
                <div className={ "caraousel-image-container" } ref={ imageContainer } >
                    {/* this will decreement the index to show the previous image */}

                    <picture>
                        <img className="caraousel-image" ref={ imageSize } src={ activeContainer.masterImage } alt="artist-photo"/>
                    </picture>
                </div>
                <div className="caraousel-event-content" >
                    <div className="carousel-content">
                        <h2 className="gallery-name">{activeContainer.organizer}</h2>
                        <h1 className="event-title">{activeContainer.name}</h1>
                        <p className="event-details">
                        {activeContainer.description}
                        </p>
                        <div className="alltag-box event-tags">
                            <button className="tag-labels">
                                <span>
                                    <Moment format="DD MMM" date={ activeContainer.eventStartDate } /> -&nbsp;
                                    <Moment format="DD MMM YYYY" date={ activeContainer.eventEndDate } />
                                </span>
                            </button>
                            <button className="tag-labels location">
                                <span>
                                    {activeContainer.location}
                                </span>
                            </button>
                        </div>
                        <div className="action-container">
                            <a href={`/view-event/${activeContainer.eventId}`}><img src={Arrow_Right_Long} />View Details</a>
                            <a href={`/events`}><img src={Arrow_Right_Long} />View all events</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="infolist-container" >
                <InfoList/>
            </div>
                                

            <div className="caraousel-container" >
                <img className = "image-controls" src = { Ic_Previous } onClick={ () => SetImageIndex('decrease') } alt = "icprevious" />
                <div className="caraousel-button-container" >
                    {/* function lets you get all the image and its index */}
                    {
                        Array.isArray(image_collection) && image_collection.map( (imgsname, imgsindex) => (
                            <div key={ imgsindex } >
                            {/* the anonymous function lets you set the active image and its index */}
                            <button key={ imgsindex * 1001 } className={(imgsindex === activeIndex) ? "carousel-buttons-color color-holding-active" : "carousel-buttons-color" } onClick={() => SetAll(imgsname, imgsindex) } ></button>
                            </div>
                        ) )
                    }
                </div>
                {/* this will increement the index to show the next image */}
                <img className = "image-controls" src = { Ic_Next } onClick={ () => SetImageIndex('increase') }  alt = "icnext" />
            </div>
        </div>
    )
}

export default FeaturedEventsCaraousel
