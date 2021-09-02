import React, { useEffect, useState } from 'react';
import Icon_Expand from '../assets/images/ic-expand.svg';
import Icon_Collapse from '../assets/images/ic-collapse.svg';
import FilterItem from './FilterItem';
import { v4 as uuidv4 } from 'uuid';
import { useLocation } from 'react-router-dom';

function FilterOption({
  name,
  isToggled,
  filterOpts,
  handleToggle,
  searchFilterUpdate,
}) {
  const [filterOptions, setfilterOptions] = useState([]);

  useEffect(() => {
    setfilterOptions(filterOpts);
  }, [filterOpts]);

  function handleItemClick(name, value, filter, pos) {
    // console.log(name,value);
    searchFilterUpdate(name, value, filter, pos);
  }

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  
  let query = useQuery();


  return (
    <div>
      <button
        className='filter-option'
        onClick={() => handleToggle(name)}>
        <img
          src={
            isToggled === false
              ? `${Icon_Expand}`
              : `${Icon_Collapse}`
          }
        />
        <span
          className={
            isToggled ? `${'bold'}` : `${'normal'}`
          }>
          {name}
        </span>
      </button>
      <div
        className='filter-items-container'
        style={{
          display: isToggled === false ? 'none' : 'flex',
        }}
        onBlur={()=>{console.log("AAA")}}
        >
        {filterOptions !== undefined &&
        filterOptions.length > 0 ? (
          filterOptions.map((value, index) => (
            <FilterItem
              key={uuidv4()}
              pos={index}
              at={name}
              name={value.name}
              filter={value.filter}
              handleItemClick={handleItemClick}
            />
          ))
        ) : (
          <span>&nbsp;</span>
        )}
      </div>
    </div>
  );
}

export default FilterOption;
