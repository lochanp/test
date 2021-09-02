import React, { useContext, useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

// import Paper from '@material-ui/core/Paper';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
import Icon_Search from '../assets/images/ic-search.svg'
import Icon_DropDown from '../assets/images/ic-dd-black-big.svg'
import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';

import * as SearchActions from '../store/searchStore/actions'
import * as ArtistActions from '../store/artistStore/actions';
import * as EventActions from '../store/eventStore/actions';
import ArtworkContext from '../utils/DataContext';


function Search(props) {
    let history = useHistory();
    const [selectedOption, setSelectedOption] = useState("Art");
    const [searchTerm, setsearchTerm] = useState("")
    const [selection, setSelection] = useState("Item1");
    const contextArts = useContext( ArtworkContext )

    const [filterA, setFilterA] = useState("OptC");
    const [filterB, setFilterB] = useState("OptD");
    const [filterC, setFilterC] = useState("OptA");
    const [filterD, setFilterD] = useState("OptA");

    // console.log(props.active)

    useEffect(() => {
        if(props.active!==undefined){
            if(props.active==="artfinder"){
                setSelection("Item2")
            }
        }
    }, [])

    const [artFinderFilters, setartFinderFilters] = useState({
        "orientation": [],
        "quickSizeFilter": [],
        "quickPriceFilter": [],
        "searchTerm": "child"
    })

    function handleSelection(){
        if(selection==="Item1"){
            setSelection("Item2");
        }
        else{
            setSelection("Item1")
        }
    }

    function handleArtistSearch(){
        props.getArtistsList({
            "limit": 20, 
            "offset": 0, 
            "searchTerm": searchTerm
        })
    }

    useEffect(() => {
        if(props.getArtist.getArtistsListSuccess===true){
            props.getArtistsListInit();
            // window.location.href = `/search-artists`;
            history.push('/search-artists');
        }
        if(props.getArtist.getArtistsListFailure===true){
            props.getArtistsListInit();
        }
    }, [props.getArtist])

    function handleSearch(){
        if(searchTerm.length>0){
            if(selectedOption.value=="Artists"){
                handleArtistSearch();
            }
            else if(selectedOption.value=="Events"){
                // window.location.href = `/search-events?q=${searchTerm}`;
                history.push(`/search-events?q=${searchTerm}`)
            }
            else{
                contextArts.setisSearchRefreshed(true);
                // window.location.href = `/search-results?q=${searchTerm}`;
                history.push(`/search-results?q=${searchTerm}`)
            }
        }
    }

    function handleArtFinder(){
        // console.log("Working");
        // window.location.href = `/search-results?q=`;
        let 
            orientation = "",
            price = "",
            size = "";

        switch (filterA) {
            case "OptA":
                price="0%20"
                break;
            case "OptB":
                price="0%201%202%203%20"
                break;
            case "OptC":
                price="5%20"
                break;
            case "OptD":
                price="0%201%202%203%204%205%20"
                break;
            default:
                console.log("Something went wrong")
                break;
        }

        switch (filterD) {
            case "OptA":
                size="0%20"
                break;
            case "OptB":
                size="0%201%202%20"
                break;
            case "OptC":
                size="0%201%202%203%204%20"
                break;
            case "OptD":
                size="0%201%202%203%204%205%20"
                break;
            default:
                console.log("Something went wrong")
                break;
        }

        switch (filterB) {
            case "OptA":
                orientation="0%20"
                break;
            case "OptB":
                orientation="1%20"
                break;
            case "OptC":
                orientation="2%20"
                break;
            case "OptD":
                orientation="0%201%202%20"
                break;
            default:
                console.log("Something went wrong")
                break;
        }

        // window.location.href = `/search-results?orientation=${orientation}&price=${price}&q=&size=${size}`;
        contextArts.setisSearchRefreshed(true);
        history.push(`/search-results?orientation=${orientation}&price=${price}&q=&size=${size}`)
        // `/search-results?orientation=0%20&price=0%20&q=&size=0%20`
        // history.push(`/search-results?q=`)
        // props.searchArtwork({
        //     "limit": 20,
        //     "offset": 0,
        //     "data": {
        //         "price": [],
        //         "size": [],
        //         "orientation": [],
        //         "medium": [],
        //         "style": [],
        //         "searchTerm": ""
        //     }
        // })
    }

    // useEffect(() => {
    //     props.getFilters();
    // }, [])

    // useEffect(() => {
    //     if(props.searchResults.getSearchResultsSuccess===true){
    //         props.searchArtworkInit();
    //         props.getFilters();
    //     }
    //     if(props.searchResults.getSearchResultsFailure===true){
    //         props.searchArtworkInit();
    //     }
    //     if(props.searchResults.getFiltersSuccess===true){
    //         props.getFiltersInit();
    //         history.push('/search-results');
    //     }
    //     if(props.searchResults.getFiltersFailure===true){
    //         props.getFiltersInit();
    //     }
    // }, [props.searchResults])

    const options = [
        'Art', 'Artists', 'Events'
    ];

    // useEffect(() => {
    //     console.log(selectedOption)
    // }, [selectedOption])

    // useEffect(() => {
    //     console.log(filterB)
    // }, [filterB])

    const handleKeyboardEvent = (e) => {
        if(e.keyCode === 13){
            handleSearch();
        }
    }

    return (
        <div className="search-container" onKeyDown={handleKeyboardEvent}>
            <h1>Make your spaces picture perfect</h1>
            <div className="search-actions">
                <button onClick={handleSelection} className={(selection==="Item1")?"button-active":"button-inactive"}>Free Search</button>
                <button onClick={handleSelection} className={(selection==="Item2")?"button-active":"button-inactive"}>Art Finder</button>
            </div>
            {
                (selection==="Item1")?
            <>
            <div className="input-container">
                <Dropdown options={options} onChange={setSelectedOption} value={selectedOption} placeholder="Select an option" arrowClosed={<img src={Icon_DropDown} className="arrow-closed" />} />
                <div className="">
                        <div className="entry-container">
                        <input type="text" maxLength={250} value={searchTerm} onChange={(e)=>{setsearchTerm(e.target.value)}} placeholder="Enter any meaningful term to start your search" />
                        <img style={{cursor:"pointer", filter: `${(searchTerm.length>0)?"opacity(1)":"opacity(0.3)"}`}} src={Icon_Search} onClick={()=>{handleSearch()}} />
                        </div>
                        <p>e.g. Oil painting, Watercolor, Acrylic, Artist name, Abstract, landscape etc.</p>
                </div>
            </div>
            </>:
            (selection==="Item2")?
            <>
                <div className="options-container">
                    <div className="options-a">
                        <div className="option-a1">
                            <p>Price (INR)</p>
                            <div className="btn-container">
                                <button id="OptA" onClick={(e)=>{setFilterA(e.target.id)}}>&lt; 5K</button>
                                <button id="OptB" onClick={(e)=>{setFilterA(e.target.id)}}>&lt; 50k</button>
                                <button id="OptC" onClick={(e)=>{setFilterA(e.target.id)}}>&gt; 1L</button>
                                <button id="OptD" onClick={(e)=>{setFilterA(e.target.id)}}>Show all</button>
                            </div>
                            <div className="option-selection-container">
                                <button id="OptA" onClick={(e)=>{setFilterA(e.target.id)}} className={(filterA==="OptA")?"button-active":""}>&nbsp;</button>
                                <button id="OptB" onClick={(e)=>{setFilterA(e.target.id)}} className={(filterA==="OptB")?"button-active":""}>&nbsp;</button>
                                <button id="OptC" onClick={(e)=>{setFilterA(e.target.id)}} className={(filterA==="OptC")?"button-active":""}>&nbsp;</button>
                                <button id="OptD" onClick={(e)=>{setFilterA(e.target.id)}} className={(filterA==="OptD")?"button-active":""}>&nbsp;</button>
                            </div>
                        </div>
                        <div className="option-a2">
                            <p>Orientation</p>
                            <div className="btn-container">
                            <button id="OptA" onClick={(e)=>{setFilterB(e.target.id)}}>Square</button>
                            <button id="OptB" onClick={(e)=>{setFilterB(e.target.id)}}>Portrait</button>
                            <button id="OptC" onClick={(e)=>{setFilterB(e.target.id)}}>Landscape</button>
                            <button id="OptD" onClick={(e)=>{setFilterB(e.target.id)}}>Show all</button>
                            </div>
                            <div className="option-selection-container">
                                <button id="OptA" onClick={(e)=>{setFilterB(e.target.id)}} className={(filterB==="OptA")?"button-active":""}>&nbsp;</button>
                                <button id="OptB" onClick={(e)=>{setFilterB(e.target.id)}} className={(filterB==="OptB")?"button-active":""}>&nbsp;</button>
                                <button id="OptC" onClick={(e)=>{setFilterB(e.target.id)}} className={(filterB==="OptC")?"button-active":""}>&nbsp;</button>
                                <button id="OptD" onClick={(e)=>{setFilterB(e.target.id)}} className={(filterB==="OptD")?"button-active":""}>&nbsp;</button>
                            </div>
                        </div>
                    </div>
                    <div className="options-a">
                        <div className="option-a1">
                            <p>Color</p>
                            <div className="btn-container">
                                <button id="OptA" onClick={(e)=>{setFilterC(e.target.id)}}>Warm</button>
                                <button id="OptB" onClick={(e)=>{setFilterC(e.target.id)}}>Cool</button>
                                <button id="OptC" onClick={(e)=>{setFilterC(e.target.id)}}>Mixed</button>
                                <button id="OptD" onClick={(e)=>{setFilterC(e.target.id)}}>Show all</button>
                            </div>
                            <div className="option-selection-container">
                                <button id="OptA" onClick={(e)=>{setFilterC(e.target.id)}} className={(filterC==="OptA")?"button-active":""}>&nbsp;</button>
                                <button id="OptB" onClick={(e)=>{setFilterC(e.target.id)}} className={(filterC==="OptB")?"button-active":""}>&nbsp;</button>
                                <button id="OptC" onClick={(e)=>{setFilterC(e.target.id)}} className={(filterC==="OptC")?"button-active":""}>&nbsp;</button>
                                <button id="OptD" onClick={(e)=>{setFilterC(e.target.id)}} className={(filterC==="OptD")?"button-active":""}>&nbsp;</button>
                            </div>
                        </div>
                        <div className="option-a2">
                            <p>Size</p>
                            <div className="btn-container">
                                <button id="OptA" onClick={(e)=>{setFilterD(e.target.id)}}>Miniatures</button>
                                <button id="OptB" onClick={(e)=>{setFilterD(e.target.id)}}>Average</button>
                                <button id="OptC" onClick={(e)=>{setFilterD(e.target.id)}}>Large</button>
                                <button id="OptD" onClick={(e)=>{setFilterD(e.target.id)}}>Show all</button>
                            </div>
                            <div className="option-selection-container">
                                <button id="OptA" onClick={(e)=>{setFilterD(e.target.id)}} className={(filterD==="OptA")?"button-active":""}>&nbsp;</button>
                                <button id="OptB" onClick={(e)=>{setFilterD(e.target.id)}} className={(filterD==="OptB")?"button-active":""}>&nbsp;</button>
                                <button id="OptC" onClick={(e)=>{setFilterD(e.target.id)}} className={(filterD==="OptC")?"button-active":""}>&nbsp;</button>
                                <button id="OptD" onClick={(e)=>{setFilterD(e.target.id)}} className={(filterD==="OptD")?"button-active":""}>&nbsp;</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>:
            <span>Something went wrong</span>
            }
            {(selection==="Item2")?<img className="search-icon" src={Icon_Search} onClick={()=>{handleArtFinder()}} />:<span>&nbsp;</span>}
        </div>
    )
}

const mapStateToProps = state => ({
    searchResults: state.searchResults,
    getArtist: state.getArtist,
    getEvents: state.getEvents
})
  
const mapDispatchToProps = dispatch => ({
    getFilters: (data) => dispatch(SearchActions.getFilters(data)),
    getFiltersInit: () => dispatch(SearchActions.getFiltersInit()),
    searchArtwork: (data) => dispatch(SearchActions.searchArtwork(data)),
    searchArtworkInit: () => dispatch(SearchActions.searchArtworkInit()),
    getArtistsList: (data) => dispatch(ArtistActions.getArtistsList(data)),
    getArtistsListInit: () => dispatch(ArtistActions.getArtistsListInit()),
    getActiveEvents: (data) => dispatch(EventActions.getActiveEvents(data)),
    getActiveEventsInit: () => dispatch(EventActions.getActiveEventsInit())
})

export default connect(mapStateToProps,mapDispatchToProps)(Search)
