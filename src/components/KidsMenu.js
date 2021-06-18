import MenuItem from "./MenuItem";
import SectionHeading from './SectionHeading'

export default function KidsMenu ({goBackFunc}) {
    return(
        <div>
            <SectionHeading goBackFunc={goBackFunc} section={`Kid's Menu`} />
            <MenuItem item={'Kids Menu Item 1'} description={`It's really good. It's really good. It's really good. It's really good. It's really good. It's really good.`}/> 
            <MenuItem item={'Kids Menu Item  2'} description={`It's really good. It's really good. It's really good. It's really good. It's really good. It's really good.`}/> 
            <MenuItem item={'Kids Menu Item  3'} description={`It's really good. It's really good. It's really good. It's really good. It's really good. It's really good`}/> 
        </div>
    )
}