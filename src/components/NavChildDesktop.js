import React, { useState } from 'react'
import {link} from 'react-scroll'

export default function NavChild ({name, type, link}) {
    const [touch, setTouch] = useState(false)
    return(
        <a style={{color: 'inherit', textDecoration: 'none'}}href={link}>
        <div className="nav-child-desktop" 
                    onMouseMove={()=> setTouch(true)}
                    onMouseLeave={()=> setTouch(false)}
                    style={{
                        width: type === 'socialMedia'? '5vw': '12vw',
                        // backgroundColor: touch? '#45adad': 'white',
                        backgroundColor: touch? '#e6eeff': 'transparent',
                        // color: touch? 'white': '#7d92ba',
                        color: touch? '#353A43': 'white',
                        borderColor: 'white', 
                        // backgroundColor: 'pink',
                    }}
                >
                    {name}
                {/* <a style={{color: 'inherit', textDecoration: 'none'}}href={link}>{name}</a> */}
        </div>
        </a>
    )
}