import React, { useState } from 'react'
import NavChild from './NavChild'
import NavChildDesktop from './NavChildDesktop'
import HeadingLogo from './HeadingLogo'
import { FaBars } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaUntappd} from 'react-icons/fa'


export default function Header () {
    const [touch, setTouch] = useState(false)
    const openCloseMenu = () => {
        touch? setTouch(false): setTouch(true)
    }
    return(
        <div>
            <nav className="desktop-navigation" 
                style={{
                    backgroundColor: 'rgba(0,0,0,0.6)', 
                    // backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), linear-gradient(rgba(255,255,255,0.3))',
                    // opacity: '.1', 
                }}>
                <HeadingLogo className="logo-desktop" style={{backgroundColor: 'pink'}}/>
                <NavChildDesktop type="regular" link ="#about" name="About"/>
                <NavChildDesktop type="regular" link="#food-menu" name="Food Menu" />
                <NavChildDesktop type="regular" link="#beer-menu" name="Beer Menu"/>
                <NavChildDesktop type="regular" link="#contact" name="Contact"/>
                <NavChildDesktop type="socialMedia" link="https://untappd.com/w/gladiator-brewing-co/415104/beer" name={<FaUntappd size="30px"/>}/>
                <NavChildDesktop type="socialMedia" link="https://www.instagram.com/gladiatorbrewingco/?hl=en" name={<FaInstagramSquare size="30px"/>}/>
                <NavChildDesktop type="socialMedia" link="https://twitter.com/pradkecompany?lang=en" name={<FaTwitterSquare size="30px"/>}/>
                <NavChildDesktop type="socialMedia" link="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2Fgladiatorbrewing%2F" name={<FaFacebookSquare size="30px"/>}/>
                
            </nav>
            <nav className="mobile-navigation" 
            style={{
                width: touch? '35vw': '50px',
                height: touch? '100vh': '50px',
                alignItems: touch? 'flex-start': 'center',
                // backgroundColor: touch? 'white': 'rgba(255, 0, 0, 0)', 
                backgroundColor: touch? '#373B43': 'rgba(0,0,0,0.6)', 
                // backgroundImage: touch? 'linear-gradient(#373B43,#415863)' : 'linear-gradient(rgba(0,0,0,0.3), linear-gradient(rgba(255,255,255,0.3))',
                borderColor: 'white', 
                // opacity: touch? '1': '0'
            }}
            >
                
                <FaBars 
                    className="toggle-btn" 
                    size="0px" 
                    color={'white'}
                    onClick={
                        ()=> {
                            touch? setTouch(false): setTouch(true)
                            // openCloseMenu()
                            // touch? alert('touch is true'): alert('touch is false')
                        }
                        
                    }
                    // style={{color: touch? 'green': 'red'}}
                    
                />
                
                <div style={
                    {visibility: touch? 'visible': 'hidden',
                    height: touch? '100px': '0px',
                    width: touch? '25vw': '0px'
                    }
                }>
                <NavChild link="#about"  name="About"/>
                <NavChild link="#food-menu"  name="Food Menu"/>
                <NavChild link="#beer-menu" name="Beer Menu"/>
                <NavChild link="#contact" name="Contact"/>
                <NavChild link="https://untappd.com/w/gladiator-brewing-co/415104/beer" name={<FaUntappd size="30px"/>}/>
                <NavChild link="https://www.instagram.com/gladiatorbrewingco/?hl=en" name={<FaInstagramSquare  size="30px"/>}/>
                <NavChild link="https://twitter.com/pradkecompany?lang=en" name={<FaTwitterSquare link="https://twitter.com/pradkecompany?lang=en" size="30px"/>}/>
                <NavChild link="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2Fgladiatorbrewing%2F" name={<FaFacebookSquare  size="30px"/>}/>
                </div>
                
            </nav>
        </div>
    )
}


