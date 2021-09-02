import React, { useEffect, useRef, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import queryString from 'query-string'

function FilterItem({handleItemClick,name,at,filter,pos}) {
    const checkboxRef = useRef(false);
    // function useQuery() {
    //   return new URLSearchParams(useLocation().search);
    // }
    
    // let query = useQuery();
    let history = useHistory();
    const { search,pathname } = useLocation();

    // const temp = useLocation();
    // console.log("Here is", temp)
    
    const values = queryString.parse(search)

    const [checked, setchecked] = useState(false);

    useEffect(() => {
        // setchecked()
        
        if(values[`${at}`]!=undefined){
            // console.log(values[`${at}`].split(' ').indexOf(`${pos}`)>=0)
            if(values[`${at}`].split(' ').indexOf(`${pos}`)>=0){
                setchecked(true)
            }
        }
    }, [])

    function handleClick(){
        checkboxRef.current.checked = !(checkboxRef.current.checked)
        if(checkboxRef.current.checked === true){
            // console.log(values)
            if(`${at}` in values){
                values[`${at}`] += `${pos} `
            }
            else{
                values[`${at}`] = `${pos} `
            }
            let temp = queryString.stringify(values);
            // console.log(temp)
            history.push(`${pathname}?${temp}`)
            // window.location.href = `${pathname}?${temp}`;
        }
        if(checkboxRef.current.checked === false){
            // let newval = values[`${at}`].replace(pos,"")
            // values[`${at}`] = newval
            // let temp = queryString.stringify(values);
            // history.push(`search-results?${temp}`)

            let newval = values[`${at}`].split(' ');
            // console.log(newval)
            let newarr = newval.filter(temp => temp != pos);
            // console.log(newarr)
            let newurl = newarr.join(' ')
            values[`${at}`] = newurl
            let temp = queryString.stringify(values);
            history.push(`${pathname}?${temp}`)
            // window.location.href = `${pathname}?${temp}`;
            // newval[pos] = ""
            // console.log(values)
        }
        // console.log(values)
        handleItemClick(name,checkboxRef.current.checked,filter,pos);
    }

    // useEffect(() => {
    //     console.log(query.get(name))
    // }, [])
    
    return (
        <div className="container" onClick={()=>{handleClick()}}>
            <div className="text-container">
                {name}
            </div>
            <input ref={checkboxRef} type="checkbox" onLoad={(e)=>{e.target.checked=checked}} checked={checked} onChange={()=>{console.log("Changed")}} /> 
            <span className="checkmark"></span>
        </div>
    )
}

export default FilterItem
