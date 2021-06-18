import React, { useState } from 'react'

export default function NavChild ({name, link}) {
    const [touch, setTouch] = useState(false)
    return(
        <a style={{color: 'inherit', textDecoration: 'none'}}href={link}>
        <div className="nav-child" 
                    onMouseMove={()=> setTouch(true)}
                    onMouseLeave={()=> setTouch(false)}
                    style={{
                        backgroundColor: touch? '#45adad': '#e6eeff',
                        // backgroundColor: touch? '#e6eeff': 'transparent',
                    //    backgroundColor: 'pink', 
                        // color: touch? 'white': '#7d92ba'
                    }}
                >
                {/* {name} */}
                {name}
        </div>
        </a>
    )
}