import MenuItem from "./MenuItem";
import SectionHeading from './SectionHeading'

export default function SandwichMenu ({goBackFunc}) {
    return(
        <div>
            <SectionHeading goBackFunc={goBackFunc} section={`Kid's Menu`} />
            <MenuItem item={'Sandwich 1'} description={`It's really good.`}/> 
            <MenuItem item={'Sandwich 2'} description={`It's really good.`}/> 
            <MenuItem item={'Sandwich 3'} description={`It's really good.`}/> 
            <MenuItem item={'Sandwich 4'} description={`It's really good.`}/> 
            <MenuItem item={'Sandwich 5'} description={`It's really good.`}/> 
            <MenuItem item={'Sandwich 6'} description={`It's really good.`}/> 
            <MenuItem item={'Sandwich 7'} description={`It's really good.`}/> 
            <MenuItem item={'Sandwich 8'} description={`It's really good.`}/> 
        </div>
    )
}