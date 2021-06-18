import MenuItem from "./MenuItem";
import SectionHeading from './SectionHeading'

export default function EntreesMenu ({goBackFunc}) {
    return(
        <div>
            <SectionHeading goBackFunc={goBackFunc} section={'Entrées'} />
            <MenuItem item={'Entree 1'} description={` It's really good. It's really good. It's really good. `}/> 
            <MenuItem item={'Entree 2'} description={` It's really good. It's really good. It's really good. `}/> 
            <MenuItem item={'Entree 3'} description={` It's really good. It's really good. It's really good. `}/> 
            <MenuItem item={'Entree 4'} description={` It's really good. It's really good. It's really good. `}/> 
            <MenuItem item={'Entree 5'} description={` It's really good. It's really good. It's really good. `}/> 
            <MenuItem item={'Entree 6'} description={` It's really good. It's really good. It's really good. `}/> 
            <MenuItem item={'Entree 7'} description={` It's really good. It's really good. It's really good. `}/> 
            <MenuItem item={'Entree 8'} description={` It's really good. It's really good. It's really good. `}/> 
        </div>
    )
}