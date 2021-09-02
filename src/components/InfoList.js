import React from 'react';
import Icon_Heart from '../assets/images/fill-1-copy-22.svg';
import Icon_Plane from '../assets/images/fill-1-copy-23.svg';
import Icon_Share from '../assets/images/group-3-copy-20.svg';
import Icon_Comment from '../assets/images/group-3-copy-21.svg';

function InfoList(props) {
  return (
    <ul className='bs-iconinfo-list'>
      <li
        className='iconinfo-list-item'
        style={props.style}>
        <span className='item-icon'>
          <img src={Icon_Heart} />
        </span>
        <span className='item-txt'>120</span>
      </li>
      <li
        className='iconinfo-list-item'
        style={props.style}>
        <span className='item-icon'>
          <img src={Icon_Plane} />
        </span>
        <span className='item-txt'>43K</span>
      </li>
      <li
        className='iconinfo-list-item'
        style={props.style}>
        <span className='item-icon'>
          <img src={Icon_Share} />
        </span>
        <span className='item-txt'>2.3K</span>
      </li>
      <li className='iconinfo-list-item'>
        <span className='item-icon'>
          <img src={Icon_Comment} />
        </span>
        <span className='item-txt'>21</span>
      </li>
    </ul>
  );
}

export default InfoList;
