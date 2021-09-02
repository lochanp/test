import { createContext, useState } from 'react';

const ArtworkContext = createContext();

// contex function to to provide context
export const ContextProvider = ( { children } ) => {
    // Common States
    const [searchModalOpen, setSearchModalOpen] = useState(false);
    const [isBack, setisBack] = useState(false);
    
    // States for Home
    const [artworks, setArtworks] = useState([])
    const [homeOffset, sethomeOffset] = useState(0);
    const [homeCurrentPage, sethomeCurrentPage] = useState(1);
    const [homeLastPage, sethomeLastPage] = useState(Number.MAX_SAFE_INTEGER);

    // States for Search Artwork
    const [searchArtworks, setSearchArtworks] = useState([]);
    const [filters, setFilters] = useState(undefined);
    const [searchOffset, setSearchOffset] = useState(0);
    const [searchCurrentPage, setsearchCurrentPage] = useState(1);
    const [searchLastPage, setsearchLastPage] = useState(Number.MAX_SAFE_INTEGER);
    const [searchTotalResults, setsearchTotalResults] = useState(0);
    const [isSearchRefreshed, setisSearchRefreshed] = useState(false);
    const [isSearchFiltered, setisSearchFiltered] = useState(false);

    // States for Events
    const date = new Date();
    var currentmonth = date.getMonth()
    const [monthIndex, setmonthIndex] = useState(currentmonth);
    const [eventsHomeList, seteventsHomeList] = useState([]);


    return(
        <ArtworkContext.Provider value = {{ isSearchFiltered,setisSearchFiltered,searchModalOpen,setSearchModalOpen,artworks,setArtworks,homeOffset,sethomeOffset,homeCurrentPage,sethomeCurrentPage,homeLastPage,sethomeLastPage,searchArtworks,setSearchArtworks,filters,setFilters,searchOffset,setSearchOffset,searchCurrentPage,setsearchCurrentPage,searchLastPage,setsearchLastPage,searchTotalResults,setsearchTotalResults,isSearchRefreshed,setisSearchRefreshed,monthIndex,setmonthIndex,eventsHomeList,seteventsHomeList,isBack,setisBack }}>
            { children }
        </ArtworkContext.Provider>
    )    
}

export default ArtworkContext;