import MenuItem from "./MenuItem";
import SectionHeading from './SectionHeading'

export default function SpecialsMenu ({goBackFunc}) {
    return(
        <div>
            <SectionHeading goBackFunc={goBackFunc} section={'Specials'} />
            <MenuItem item={'Special 1'} description={`It's really good.`}/> 
            <MenuItem item={'Special 2'} description={`It's really good.`}/> 
            <MenuItem item={'Special 3'} description={`It's really good.`}/> 
            <MenuItem item={'Special 4'} description={`It's really good.`}/> 
        </div>
    )
}