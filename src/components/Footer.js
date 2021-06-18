import React, { useState } from 'react'
import NavChildDesktop from './NavChildDesktop'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaUntappd} from 'react-icons/fa'


export default function Footer () {
    return (
            <nav className = "footer">
               
                <div>
                    <a href={"#about"}>About</a>
                </div>
                <div>
                    <a href={"#food-menu"}>Food Menu</a>
                </div>
                <div>
                    <a href={"#beer-menu"}>Beer Menu</a>
                </div>
                <div>
                    <a href={"#contact"}>Contact</a>
                </div>
                
                <div>
                <a style={{color: 'inherit', textDecoration: 'none'}} href={"https://untappd.com/w/gladiator-brewing-co/415104/beer" }><FaUntappd className="footer-icons" size="15px"/></a>
                    
                </div>
                <div>
                    <a style={{color: 'inherit', textDecoration: 'none'}} href={"https://www.instagram.com/gladiatorbrewingco/?hl=en"}><FaInstagramSquare className="footer-icons" size="15px"/></a>
                </div>
                <div>
                    <a style={{color: 'inherit', textDecoration: 'none'}} href={"https://twitter.com/pradkecompany?lang=en"}><FaTwitterSquare className="footer-icons" size="15px"/></a>
                </div>
                <div>
                    <a style={{color: 'inherit', textDecoration: 'none'}} href={"https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2Fgladiatorbrewing%2F"}><FaFacebookSquare className="footer-icons" size="15px"/></a>
                </div>
                
            </nav>
    )
}