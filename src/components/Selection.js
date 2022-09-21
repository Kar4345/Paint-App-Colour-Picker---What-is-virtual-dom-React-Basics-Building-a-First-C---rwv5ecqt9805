import React, { useState } from "react";

export default function Selection(props){
    const [style,setStyle] = useState({
        background: ''
    });
    const {key,applyColor} = props;
    return(
        <div id={key} className="fix-box" style={{background:style.background,cursor:"pointer"}} onClick={()=>{
            applyColor((value)=>{
                setStyle(value);
            })
        }} >
            <h2 className="subheading">Selection</h2>
        </div>
    )
}