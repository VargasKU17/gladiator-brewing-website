import MenuItem from "./MenuItem";
import SectionHeading from './SectionHeading'

export default function SidesMenu ({goBackFunc}) {
    return(
        <div>
            <SectionHeading goBackFunc={goBackFunc} section={`Sides`} />
            <MenuItem item={'side 1'} description={`It's really good.`}/> 
            <MenuItem item={'side 2'} description={`It's really good.`}/> 
            <MenuItem item={'side 3'} description={`It's really good.`}/> 
            <MenuItem item={'side 4'} description={`It's really good.`}/> 
            <MenuItem item={'side 5'} description={`It's really good.`}/> 
            <MenuItem item={'side 6'} description={`It's really good.`}/> 
            <MenuItem item={'side 7'} description={`It's really good.`}/> 
            <MenuItem item={'side 8'} description={`It's really good.`}/> 
        </div>
    )
}