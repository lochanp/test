import React, { useState } from 'react'

function TestPage() {
    const [textbox, settextbox] = useState("")
    const [tags, settags] = useState([])

    function handleAddTag(){
        settags(...tags,[textbox]);
        settextbox("");
        console.log(tags)
    }

    return (
        <div>
            <input type="text" value={textbox} onChange={(e)=>{settextbox(e.target.value)}} />
            <button onClick={()=>{handleAddTag()}}>Add Tags</button>
            <br/>
            {/* {tags.map((value,index)=>(
                <button style={{background:"#000", color: "#fff", margin: "2px"}}>{value}</button>
            ))} */}
        </div>
    )
}

export default TestPage
