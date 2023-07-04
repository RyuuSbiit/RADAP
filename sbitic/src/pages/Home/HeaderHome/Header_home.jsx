import React from "react";
import './style_header.scss'
import { Link } from "react-router-dom";


export function Header() {
    return(<div> 
    
    <div className={"Header_home"}>
            <div className={"Header_home__logo"}>

        <img src='.\IMG\Logo\Logo.svg'></img>
            
            </div>
        <div className={'Header_home__menu'}>

            <div><Link to='/' onClick={() => window.scrollTo(0, 0)}>Домой</Link></div>
            <div><Link to='/About_Us' onClick={() => window.scrollTo(0, 0)}>О нас</Link></div>
            <div><Link to='/Northern_fire' onClick={() => window.scrollTo(0, 0)}>Северный огонь</Link></div>
            <div><Link to='/Chui-Estuary' onClick={() => window.scrollTo(0, 0)}>Чуй-Оозы</Link></div>
        
        </div>
        </div>
        
        </div>)}

export default Header;