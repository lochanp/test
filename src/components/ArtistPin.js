import React from 'react'
import ArtistPic1 from '../assets/images/artist-1.png'
import ArtistPic2 from '../assets/images/artist-2.png'
import ArtistPic3 from '../assets/images/artist-3.png'
import ArtistPic4 from '../assets/images/artist-4.png'
import Arrow_Right_Long from '../assets/images/arrow-right-long.svg'
import { useHistory } from 'react-router-dom'


function ArtistPin({artistId,name,userHandle,picture,address}) {
    let history = useHistory();

    return (
        <div className="artist-pin">
            <img className="artist-pic" src={picture} />
            <h4 className="artist-name">{name}</h4>
            <h2 className="artist-handle">{userHandle}</h2>
            <p className="artist-location">{(address!=undefined)?`${address.city}, ${address.country}`:"-"}</p>
            <button onClick={()=>{history.push(`/view-artist/${userHandle}`)}}>
                <img src={Arrow_Right_Long} />
                <span>View Details</span>
            </button>
        </div>
    )
}

export default ArtistPin
