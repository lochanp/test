import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux';
import Icon_Filter from '../assets/images/ic-filter.svg'
import Icon_Sort from '../assets/images/ic-sort.svg'
import Icon_Dropdown from '../assets/images/ic-dd-black.svg'
import FilterOption from './FilterOption'

function Filters({filters,searchFilterUpdate}) {
    const [active, setactive] = useState({
        option1: false,
        option2: false,
        option3: false,
        option4: false,
        option5: false,
        option6: false,
    });

    // const [priceFilter, setpriceFilter] = useState([]);

    // useEffect(() => {
    //     setpriceFilter(filters.priceFilter);
    // }, [])

    function handleSearchFilterUpdate(name,value,filter,pos){
        if(active.option1===true){
            searchFilterUpdate(name,value,filter,"price",pos);
        }
        if(active.option2===true){
            searchFilterUpdate(name,value,filter,"color",pos);
        }
        if(active.option3===true){
            searchFilterUpdate(name,value,filter,"orientation",pos);
        }
        if(active.option4===true){
            searchFilterUpdate(name,value,filter,"size",pos);
        }
        if(active.option5===true){
            searchFilterUpdate(name,value,filter,"medium",pos);
        }
        if(active.option6===true){
            searchFilterUpdate(name,value,filter,"style",pos);
        }
    }

    function handleToggle(temp){
        switch (temp) {
            case "price":
                setactive({
                    ...active,
                    option1: !(active["option1"]),
                    option2: false,
                    option3: false,
                    option4: false,
                    option5: false,
                    option6: false,
                })
                break;
            case "color":
                setactive({
                    ...active,
                    option1: false,
                    option2: !(active["option2"]),
                    option3: false,
                    option4: false,
                    option5: false,
                    option6: false,
                })
                break;
            case "orientation":
                setactive({
                    ...active,
                    option1: false,
                    option2: false,
                    option3: !(active["option3"]),
                    option4: false,
                    option5: false,
                    option6: false,
                })
                break;
            case "size":
                setactive({
                    ...active,
                    option1: false,
                    option2: false,
                    option3: false,
                    option4: !(active["option4"]),
                    option5: false,
                    option6: false,
                })
                break;
            case "medium":
                setactive({
                    ...active,
                    option1: false,
                    option2: false,
                    option3: false,
                    option4: false,
                    option5: !(active["option5"]),
                    option6: false,
                })
                break;
            case "style":
                setactive({
                    ...active,
                    option1: false,
                    option2: false,
                    option3: false,
                    option4: false,
                    option5: false,
                    option6: !(active["option6"])
                })
                break;
            default:
                console.log("Something went wrong with filters")
                break;
        }
    }

    function useOutsideAlerter(ref) {
        useEffect(() => {
          /**
           * Alert if clicked on outside of element
           */
          function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setactive({
                    ...active,
                    option1: false,
                    option2: false,
                    option3: false,
                    option4: false,
                    option5: false,
                    option6: false
                })
            }
          }
          // Bind the event listener
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
          };
        }, [ref]);
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return (
        <div className="filter-container">
            <div className="filter-container-items" ref={wrapperRef}>
            <img className="filter-icon" src={Icon_Filter} alt="Filter"/>
            <FilterOption searchFilterUpdate={handleSearchFilterUpdate} filterOpts={filters.priceFilter} name="price" isToggled={active.option1} handleToggle={handleToggle} />
            <FilterOption searchFilterUpdate={handleSearchFilterUpdate} filterOpts={[]} name="color" isToggled={active.option2} handleToggle={handleToggle} />
            <FilterOption searchFilterUpdate={handleSearchFilterUpdate} filterOpts={filters.orientationFilter} name="orientation" isToggled={active.option3} handleToggle={handleToggle} />
            <FilterOption searchFilterUpdate={handleSearchFilterUpdate} filterOpts={filters.sizeFilter} name="size" isToggled={active.option4} handleToggle={handleToggle} />
            <FilterOption searchFilterUpdate={handleSearchFilterUpdate} filterOpts={filters.mediumList} name="medium" isToggled={active.option5} handleToggle={handleToggle} />
            <FilterOption searchFilterUpdate={handleSearchFilterUpdate} filterOpts={filters.styleList} name="style" isToggled={active.option6} handleToggle={handleToggle} />
            </div>
            <div>
                <button className="sort-option">
                    <img src={Icon_Sort} className="sort-icon" />
                    <span>Sort by Recency</span>
                    <img src={Icon_Dropdown} className="sort-dd" />
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    searchResults: state.searchResults
})

export default connect(mapStateToProps)(Filters)
