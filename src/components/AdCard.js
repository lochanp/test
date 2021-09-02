import React from 'react'
import infocard from '../assets/images/gallery-360-view.jpg'
import Arrow_Right_Long_Grey from '../assets/images/arrow-right-long-grey.svg'


function AdCard({image, background}) {
    return (
        <div className="bs-gallery thm-dark">
    <div className="glry-img set-bg">
        <picture>
            <source media="(min-width: 1024px)" srcSet={image} />
            <source media="(max-width: 1024px)" srcSet={image} />
            <img className="fetch-img-src" src={image} alt="" className="" />
        </picture>
    </div>
    <div className="glry-info">
        <h2 className="glry-name">National Gallery of Modern Art</h2>
        <h3 className="glry-title">Enjoy the latest works in VR</h3>
        <div className="glry-desc">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                quis
                nostrud .</p>
        </div>
        <ul className="glry-lbl-list">
            <li className="glry-lbl">Online</li>
            <li className="glry-lbl">Free</li>
        </ul>
        <div className="cm-act-wrap">
            <a href="#" className="btn btn-link-icon-down"><span>View Details</span><img className="icon" src={Arrow_Right_Long_Grey} /></a>
            <a href="#" className="btn btn-link-icon-down"><span>360 tour</span><img className="icon" src={Arrow_Right_Long_Grey} /></a>
            <a href="#" className="btn btn-link-icon-down"><span>VR Tour</span><img className="icon" src={Arrow_Right_Long_Grey} /></a>
        </div>
    </div>
   {/*#include virtual="bs-icon-info-list.shtml" */}
</div>
    )
}

export default AdCard
