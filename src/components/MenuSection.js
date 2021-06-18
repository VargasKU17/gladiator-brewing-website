import React, { useState } from 'react'
import { FaBackward } from 'react-icons/fa'
import MenuItem from './MenuItem'

export default function MenuSection ({section, array, goBackFunc}) {
    let options = array
    let getOptions = () => options.map(x => {
    return(
    <div 
    className="menu-section" 
    style={{
        display:'flex', 
        alignItems: 'center', 
        justifyContent:'center', 
        flexDirection: 'row', 
        width: '60vw',
        borderColor: 'white',
        borderStyle: 'solid', 
    }}
    >
        <div>
            <h3>{x.item}</h3>
            <p>
                {x.description }
            </p>
        </div>
    </div>)})
    return(
        <div>
            <div className="menu-section-title">
                <h3>{section}</h3>
                <FaBackward onClick={goBackFunc}/>
            </div>
            <div className="category-wrapper">
            {getOptions()}
            </div>
        </div>
        
    )
}