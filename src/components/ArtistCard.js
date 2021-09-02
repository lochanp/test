import React, { useEffect, useState } from 'react'
import InfoList from './InfoList'
// import infocard from '../assets/images/dummy/info-card-278X278.jpg'
import { useHistory } from 'react-router-dom';
import { checkIfExist, checkIfNull } from '../utils/DataCheck';
import Moment from 'react-moment';

function ArtistCard({image, data}) {  
    let history = useHistory();

    const [artistName, setartistName] = useState("");
    const [title, settitle] = useState("");
    const [medium, setmedium] = useState("");
    const [artworkDate, setartworkDate] = useState("");
    const [style, setstyle] = useState("");
    const [size, setsize] = useState({
        "length": "-",
        "height": "-",
        "depth": "-",
        "unit": "-"
    })

    useEffect(() => {
        checkIfExist("name",data)?setartistName(data.name):setartistName("-");
        checkIfExist("medium",data)?(checkIfNull(data.medium)?setmedium("-"):setmedium(data.medium.name)):setmedium("-");
        checkIfExist("title",data)?settitle(data.title):settitle("-");
        checkIfExist("paintedAt",data)?setartworkDate(data.paintedAt):setartworkDate("-");
        checkIfExist("style",data)?(checkIfNull(data.style)?setstyle("-"):setstyle(data.style.name)):setstyle("-");
        checkIfExist("size",data)?setsize({
            "length": checkIfExist("length",data.size)?data.size.length:"-",
            "height": checkIfExist("height",data.size)?data.size.height:"-",
            "depth": checkIfExist("depth",data.size)?data.size.depth:"-",
            "unit": checkIfExist("unit",data.size)?data.size.unit:"-"
        }):setsize({...size});
    }, [])

    return (
        <div className="bs-info-card" onClick={()=>{history.push(`/view-artwork/${data.artworkId}`)}}>
            <div className="card-pic-wrap">
                    <img src={image} alt="" className="" />
            </div>
            <InfoList/>
            {
                (data!=undefined)?
                    <div className="card-info">
                        <small className="card-info-lbl">{artistName}  |  <Moment format="MMM YYYY" date={ artworkDate } /></small>
                        <h2 className="card-info-title">{title}</h2>
                        <dl className="card-dl">
                            <dt className="card-dt">Medium: </dt>
                            <dd className="card-dd">{medium}</dd>
                            <dt className="card-dt">Style: </dt>
                            <dd className="card-dd">{style}</dd>
                            <dt className="card-dt">Size: </dt>
                            <dd className="card-dd">{`${size.length} ${size.unit} x ${size.height} ${size.unit} x ${size.depth} ${size.unit}`}</dd>
                            <dt className="card-dt">Original: </dt>
                            <dd className="card-dd">{`₹ ${data.price}`}</dd>
                            <dt className="card-dt">Prints: </dt>
                            <dd className="card-dd">From {`₹ ${data.price}`}</dd>
                        </dl>
                    </div>
            :
                <></>
            }
        </div>
    )
}

export default ArtistCard
