import React, { useEffect, useState } from 'react'
import Icon_Search from '../assets/images/ic-search.svg'
import Arrow_Right_Long from '../assets/images/arrow-right-long.svg'
import { connect } from 'react-redux';

import * as ArtistActions from '../store/artistStore/actions';
import { useHistory } from 'react-router-dom';
import Icon_Add from '../assets/images/ic-add.svg'



function ArtistLinks(props) {
    let history = useHistory();

    const [activeLetter, setActiveLetter] = useState("T");
    let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const [searchTerm, setsearchTerm] = useState("")
    const [artistNames, setartistNames] = useState([]);

    function handleArtistSearch(){
        if(searchTerm.length>0){
            props.getArtistsList({
                "limit": 20, 
                "offset": 0, 
                "searchTerm": searchTerm
            })
        }
    }

    useEffect(() => {
        props.getArtistNameList({
            "selectedAlphabet": activeLetter, 
            "limit": 36, 
            "offset": 0
        })
    }, [activeLetter])



    useEffect(() => {
        if(props.getArtist.getArtistsListSuccess===true){
            props.getArtistsListInit();
            history.push('/search-artists');
        }
        if(props.getArtist.getArtistsListFailure===true){
            props.getArtistsListInit();
        }
        if(props.getArtist.getArtistNamesListSuccess===true){
            props.getArtistNameListInit();
            setartistNames(
                props.getArtist.artistNameList.artists
            )
        }
        if(props.getArtist.getArtistNamesListFailure===true){
            props.getArtistNameListInit();
        }
    }, [props.getArtist])

    const handleKeyboardEvent = (e) => {
        if(e.keyCode === 13){
            handleArtistSearch();
        }
    }

    return (
        <div className="artist-links" onKeyDown={handleKeyboardEvent}>
            <h1>Looking for an artist</h1>
            <div className="input-container">
                <input type="text" maxLength={250} value={searchTerm} onChange={(e)=>{setsearchTerm(e.target.value)}} placeholder="Type artist’s name" />
                <img src={Icon_Search} style={{cursor:"pointer", filter: `${(searchTerm.length>0)?"opacity(1)":"opacity(0.3)"}`}} onClick={handleArtistSearch} />
            </div>
            <p>
            We hope to find who you are looking for here. If we are not able to then we would get our teams to look for the searched artist
            </p>
            <div className="footer-letters">
                {
                    letters.map((e)=>
                        <button className={(e===activeLetter)? "footer-buttons footer-button-active" : "footer-buttons"} key={e} onClick={(e)=>{setActiveLetter(e.target.innerText)}}>{e}</button>
                    )
                }
            </div>
            <div className="footer-artist-list">
                <div className="artists-col">
                    {
                        artistNames.map((value,index)=>(
                            <span onClick={()=>{history.push(`/view-artist/${value.userHandle}`)}}>{value.name}</span>
                        ))
                    }
                </div>
            </div>
            <div style={{
                width: "100%", 
                display: "flex", 
                justifyContent: "center", 
                // marginTop: "64px", 
                marginBottom: "95px"}}>
                    {/* <button className="artist-load-more">
                        <img src={Icon_Add} />
                        <span>Load more</span>
                    </button> */}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    getArtist: state.getArtist
})
  
const mapDispatchToProps = dispatch => ({
    getArtistsList: (data) => dispatch(ArtistActions.getArtistsList(data)),
    getArtistsListInit: () => dispatch(ArtistActions.getArtistsListInit()),
    getArtistNameList: (data) => dispatch(ArtistActions.getArtistNameList(data)),
    getArtistNameListInit: () => dispatch(ArtistActions.getArtistNameListInit()),
    getFeaturedArtists: (data) => dispatch(ArtistActions.getFeaturedArtists(data)),
    getFeaturedArtistsInit: () => dispatch(ArtistActions.getFeaturedArtistsInit())
})

export default connect(mapStateToProps,mapDispatchToProps)(ArtistLinks)
