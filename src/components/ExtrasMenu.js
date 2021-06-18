import React, { useState } from 'react'
import MenuItem from "./MenuItem";
import SectionHeading from './SectionHeading'
export default function KidsMenu ({goBackFunc}) {
    
    
    return(
        <div>
            <SectionHeading goBackFunc={goBackFunc} section={'Extras'} />
            <MenuItem item={'Extra Item 1'} description={`It's really good. It's really good. It's really good. It's really good. It's really good. It's really good.`}/> 
            <MenuItem item={'Extra Item  2'} description={`It's really good. It's really good. It's really good. It's really good. It's really good. It's really good.`}/> 
            <MenuItem item={'Extra Item  3'} description={`It's really good. It's really good. It's really good. It's really good. It's really good. It's really good`}/> 
        </div>
    )
}