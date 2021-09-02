import React from 'react'

function ColorPalette({colors=["#ff0000","#00ff00","#0000ff"]}) {
    return (
        <div style={{width: "100%", display: "flex", paddingBottom: "30px"}}>
            {colors.map((item,index)=>{
                return <div key={index} style={{height: "42px", width: "100%", background: `${item}`, display: "flex", alignItems:"center"}}>
                    {(index===0)?<p style={{marginLeft:"15px", color: "#fff"}}>palette</p>:""}
                </div>
            })}
        </div>
    )
}

export default ColorPalette
