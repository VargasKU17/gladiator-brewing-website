import React, { useState } from 'react'
import RestaurantMenu from './RestaurantMenu'
import MenuItem from './MenuItem'
import MenuSection from './MenuSection'
import SidesMenu from './SidesMenu'
import EntreesMenu from './EntreesMenu'
import SandwichMenu from './SandwichesMenu'
import SpecialsMenu from './SpecialsMenu'
import KidsMenu from './KidsMenu'
import ExtrasMenu from './ExtrasMenu'
import Contact from './Contact'
import Footer from './Footer'



export default function Home () {
    // const [sections, setSections] = useState(true)
    // const [sides, setSides] = useState(false)
    // const [entrees, setEntrees] = useState(false)
    // const [sandwiches, setSandwiches] = useState(false)
    const [menuContent, setMenuContent] = useState('sections')
    const selectMenuContent = () => {
        if (menuContent === 'sections'){
          return <MenuSections goBackFunc={()=>setMenuContent('sections')}/>
        } else if (menuContent === 'Sides'){
          return <SidesMenu goBackFunc={()=>setMenuContent('sections')}/>
        } else if (menuContent === 'Entrees'){
            return <EntreesMenu goBackFunc={()=>setMenuContent('sections')}/>
        } else if (menuContent === 'Sandwiches'){
            return <SandwichMenu goBackFunc={()=>setMenuContent('sections')}/>
        }else if (menuContent === 'Specials'){
            return <SpecialsMenu goBackFunc={()=>setMenuContent('sections')}/>
        }else if (menuContent === `Kids' Menu`){
            return <KidsMenu goBackFunc={()=>setMenuContent('sections')}/>
        }else if (menuContent === 'Extras'){
            return <ExtrasMenu goBackFunc={()=>setMenuContent('sections')}/>
        }
      }
    const MenuSections = () => {
        return (
            <div>
                <RestaurantMenu 
                    // array ={[{section: 'sides', action: }, {section: 'entrees', action: ()=>alert('entrees function')}, {section: 'sandwiches', action: ()=>alert('sandwich function')}]}
                    array ={["Sides", "Entrees", "Sandwiches", "Specials", "Kids' Menu", "Extras",]}
                    // changeFunc={()=>alert('this is the change func')}
                    getSectionPage={x=>setMenuContent(x)}
                />
            </div>
        )}
    

    
    return(
        <div className="home">
            <div className="attention-getter" >
                <div className="heading">
                    {/* <h1 >Gladiator</h1>
                    <h6>Brewing Co.</h6> */}
                </div>
            </div>
            <div className="opening-text" id="about">
                <div className="h1-wrapper">
                    <h1>Welcome to Gladiator Brewing Co. </h1>
                </div>
          
                <div className="intro">
                    <div className="para-wrapper">
                    
                    <div className="food-and-mug">
                    <   p className="welcome">
                        {/* &nbsp;&nbsp;&nbsp;&nbsp; */}
                        <div className="food-and-mug-text">
                            <h2>Local Craft Beer, Great Food and Live Music </h2>
                            <h3>In Clarksville Tennesee</h3>
                        </div>
                        
                   
                        </p>
                    </div>
                    
                    </div>

                    <div className="para-wrapper" id="food-menu">
                        <div className="important" >
    
                            Food Menu
                        </div>
                        <div >
                             {/* this works for now...do not not change */}
                             {/* <RestaurantMenu array ={["Sides", "Entrees", "Sandwiches", "Specials", "Kids' Menu", ,"Extras",]}/> */}

                            {/* do this with an array that also contains individual functions that 
                            will be passed in via props to conditionally render Home */}
                            {selectMenuContent()}
                             {/* <RestaurantMenu 
                             array ={[{section: 'sides', action: ()=>alert('sides function')}, {section: 'entrees', action: ()=>alert('entrees function')}, {section: 'sandwiches', action: ()=>alert('sandwich function')}]}
                             changeFunc={()=>alert('this is the change func')}
                             /> */}
                             {/* <RestaurantMenu array ={[{item: 'sides', menu: }]} /> */}
                        </div>
                    </div>

                    <div className="para-wrapper" id="beer-menu">
                        <div className="important" >
                            Beer Menu
                        </div> 
                        <div>
                            <MenuItem item={'Name of Beer'} proof={'6%'} description={`I swear I've had it before and it's really good, but I can't remember how to spell any of these beers`}/>
                            <MenuItem item={'Name of Beer'} proof={'6%'} description={`I swear I've had it before and it's really good, but I can't remember how to spell any of these beers`}/>
                            <MenuItem item={'Name of Beer'} proof={'6%'} description={`I swear I've had it before and it's really good, but I can't remember how to spell any of these beers`}/>
                            <MenuItem item={'Name of Beer'} proof={'6%'} description={`I swear I've had it before and it's really good, but I can't remember how to spell any of these beers`}/>
                            <MenuItem item={'Name of Beer'} proof={'6%'} description={`I swear I've had it before and it's really good, but I can't remember how to spell any of these beers`}/>
                            <MenuItem item={'Name of Beer'} proof={'6%'} description={`I swear I've had it before and it's really good, but I can't remember how to spell any of these beers`}/>
                            <MenuItem item={'Name of Beer'} proof={'6%'} description={`I swear I've had it before and it's really good, but I can't remember how to spell any of these beers`}/>
                        </div>
                    </div>
                </div>
                <Contact />
                <Footer />
            </div>
            
            
            
      </div>
    )
}