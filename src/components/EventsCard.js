// Project Name: TGP Consumer Webapp
// -----------------------------
// Author: Lochan
// Last Updated:   23/7/2021, 11:30:00 pm

import React from 'react';
import Moment from 'react-moment';
import img from '../assets/images/exibition-room.png';
import Arrow from '../assets/images/ic-arrow.svg';
import InfoList from '../components/InfoList';
import { useHistory } from 'react-router-dom';

function EventsCard(props) {
  let history = useHistory();
  return (
    <div>
      <div className='row'>
        <div className='col'>
          <div className='card'>
            <div class='img-main-container'>
              <img
                src={props.imgMain}
                className='img-main'
                alt='art'
              />
            </div>
            <InfoList />
            <hr className='custom-separator' />
            <div className='card-body'>
              <p
                className='location'
                style={{ fontSize: '14px' }}>
                {props.eventLocation}
              </p>
              <h5 className='card-title'>
                {props.eventTitle}
              </h5>
              <div className='card-text'>
                <p className='date'>
                  <span>
                    <Moment
                      format='DD MMM YYYY'
                      date={props.eventStartDate}
                    />
                  </span>
                  {' - '}
                  <span>
                    <Moment
                      format='DD MMM YYYY'
                      date={props.eventEndDate}
                    />
                  </span>
                </p>
                <p className='details'>
                  <label>Place: </label>
                  {props.eventPlace}
                </p>
                <p className='details'>
                  <label>Registration: </label> Free
                </p>
              </div>
              <div className='card-btn'>
                <p>
                  <img
                    className='arr'
                    src={Arrow}
                    alt='icon'
                  />
                  <a
                    className='details-btn'
                    onClick={() => {
                      history.push(`/view-event/${props.eventId}`);
                    }}>
                    View Details
                  </a>
                </p>
                <p className='btn-2'>
                  <img
                    className='arr'
                    src={Arrow}
                    alt='icon'
                  />
                  <a href='#' className='details-btn'>
                    View Website
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsCard;
