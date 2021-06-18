import React, { useState } from 'react'
import { FaAllergies, FaAmericanSignLanguageInterpreting } from 'react-icons/fa'
import RestaurantMenuCategory from './RestaurantMenuCategory'
import MenuSection from './MenuSection'

// export default function RestaurantMenu ({a,b,c,d}) {
//     let options = [a,b,c,d]
//     let getOptions = options.map(x => <RestaurantMenuItem category={x}>{x}</RestaurantMenuItem>)
//     return(
//         <div className="category-wrapper">
//             {getOptions}
//         </div>
//     )
// }


export default function RestaurantMenu ({array, getSectionPage}) {
    const [menu, setMenu] = useState(false)
    const [sides, setSides] = useState(false)
    const getSides = () => {
        setMenu(true)
        setSides(true)
    }
    let options = array
    let getOptions = () => options.map(x => <RestaurantMenuCategory category={x} changeFunc={getSectionPage}></RestaurantMenuCategory>)
    const myOptions = <div className="category-wrapper">{getOptions()}</div>
    const flipMenu = () => {
        
            return(
                // <RestaurantMenu array ={["Sides", "Entrees", "Sandwiches", "Specials", "Kids' Menu", ,"Extras",]} />
                // <RestaurantMenu array ={[{section: 'sides', }]}/>
                <div>
                    {myOptions}
                </div>
                
            )
        
    }
    return(
        <div className="category-wrapper">
            {flipMenu()}
        </div>
    )
}

