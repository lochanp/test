import React, { useState, useRef, useEffect } from 'react';
import { Modal } from '@material-ui/core';
import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css'

// import '../assets/css/libraries/dropdown.css'

// import for files

import Icon_Close from '../assets/images/ic-close.svg';
import Icon_Next from '../assets/images/ic-next.svg';
import Icon_TriangleDrop from '../assets/images/triangle-copy-4.svg';
import * as ArtworkActions from '../store/artworkStore/actions';
import Icon_Check from '../assets/images/ic-check.svg';
import { connect } from 'react-redux';

function ReportArtworkModal({
  modalOpen,
  setIsOpen,
  handleModalSubmit,
  reasons,
  openModal,
  closeModal,
}) {
  // for modal dropdown
  const [modalDropdownSelected, setModalDropdownSelected] =
    useState();

  // for options in modal dropdown
  const [selectedOption, setSelectedOption] =
    useState('Select Reason');
  const [comment, setcomment] = useState('');

  const options = [
    'Plagiarism',
    'Politicalsss Inciting',
    'Vulgarity',
    'False Work',
    'Others',
  ];

  // useEffect(() => {
  //   props.reportOption();
  // }, [])

  // for accessing the child using useRef is .current.children[0]

  // for plagiarism and it's child { useREF }
  const plagiarism = useRef();
  const plagiarismIMG = useRef();
  const plagiarismTEXT = useRef();

  // for political and it's child { useREF }
  const political = useRef();
  const politicalIMG = useRef();
  const politicalTEXT = useRef();

  // for vulgarity and it's child { useREF }
  const vulgarity = useRef();
  const vulgarityIMG = useRef();
  const vulgarityTEXT = useRef();

  // for falsewrk and it's child { useREF }
  const falsewrk = useRef();
  const falsewrkIMG = useRef();
  const falsewrkTEXT = useRef();

  // for others and it's child { useREF }
  const others = useRef();
  const othersIMG = useRef();
  const othersTEXT = useRef();

  // for inputDrop
  const inputDrop = useRef();

  function handleSubmitClick() {
    handleModalSubmit(selectedOption.value, comment);
    setSelectedOption('Select Reason');
    setcomment('');
  }

  return (
    <div className='main-modal-container'>
      <Modal
        open={modalOpen}
        ariaHideApp={false}
        onRequestClose={closeModal}>
        <div className='contactModal-page modal-container'>
          <div className='close-icon' onClick={closeModal}>
            <span>Close</span>
            <img src={Icon_Close} alt='' />
          </div>
          <div className='modalMain-content'>
            <form className='contact-form'>
              <div className='modal-title'>
                Report the Artwork
                <hr className='seperator' />
              </div>
              <div className='input-container report-dropdown-menu'>
                <input
                  className='dropdown-menu'
                  ref={inputDrop}
                  type='text'
                  placeholder='Select Reason'
                />
                <img
                  src={Icon_TriangleDrop}
                  style={{
                    width: '2rem',
                    paddingTop: '7%',
                  }}
                />
                <div className='dropdown-container'>
                  <Dropdown
                    options={reasons}
                    onChange={setSelectedOption}
                    value={selectedOption}
                    placeholder='Select Reason'
                    arrowClosed={
                      <img
                        src={Icon_TriangleDrop}
                        className='arrow-closed'
                      />
                    }
                  />
                </div>
              </div>
              <div className='input-container'>
                <input
                  type='text'
                  placeholder='Comments or query if any'
                  value={comment}
                  onChange={(e) => {
                    setcomment(e.target.value);
                  }}
                />
              </div>
              <div className='buttons'>
                <div
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className='contact-btn'>
                  <img
                    className='arrow-img'
                    src={Icon_Next}
                    style={{ width: '2rem' }}
                  />
                  <span className=''>Cancel</span>
                </div>
                <div
                  onClick={() => {
                    handleSubmitClick();
                  }}
                  className='contact-btn'>
                  <img
                    className='arrow-img'
                    src={Icon_Next}
                    style={{ width: '2rem' }}
                  />
                  <span className=''>Submit</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => ({
  getArtwork: state.getArtwork,
});

const mapDispatchToProps = (dispatch) => ({
  reportOption: (data) =>
    dispatch(ArtworkActions.reportOption(data)),
  reportOptionInit: () =>
    dispatch(ArtworkActions.reportOptionInit()),
  reportArtwork: (data) =>
    dispatch(ArtworkActions.reportArtwork(data)),
  reportArtworkInit: () =>
    dispatch(ArtworkActions.reportArtworkInit()),
});

export default ReportArtworkModal;
