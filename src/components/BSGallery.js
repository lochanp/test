import React from 'react'
import infocard from '../assets/images/gallery-360-view.jpg'
import Arrow_Right_Long from '../assets/images/arrow-right-long.svg'


function BSGallery({image, background}) {
    return (
        <div className="bs-gallery" style={{background: `${background}`}}>
    <div className="glry-img set-bg">
        <picture>
            <source media="(min-width: 1024px)" srcSet={image} />
            <source media="(max-width: 1024px)" srcSet={image} />
            <img className="fetch-img-src" src={image} alt="" className="" />
        </picture>
    </div>
    <div className="glry-info">
        <h2 className="glry-name">National Gallery of Modern Art</h2>
        <h3 className="glry-title">Masters of the twentieth century</h3>
        <div className="glry-desc">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                quis
                nostrud .</p>
        </div>
        <ul className="glry-lbl-list">
            <li className="glry-lbl">24th August 2020</li>
            <li className="glry-lbl">Mumbai</li>
        </ul>
        <div className="cm-act-wrap">
            <a href="#" className="btn btn-link-icon-down"><span>View Details</span><img className="icon" src={Arrow_Right_Long} /></a>
            <a href="#" className="btn btn-link-icon-down"><span>View all events</span><img className="icon" src={Arrow_Right_Long} /></a>
        </div>
    </div>
   {/*#include virtual="bs-icon-info-list.shtml" */}
</div>
    )
}

export default BSGallery
