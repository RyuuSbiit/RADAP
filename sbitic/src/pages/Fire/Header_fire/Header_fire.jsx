import React from "react";
import './Header_fire_style.scss'
import { Link } from "react-router-dom";


export function Header() {
    return(<div> 
    
    <div className={"Header_Fire"}>
            <div className={"Header_Fire__logo"}>

        
            
            </div>
        <div className={'Header_Fire__menu'}>

            <div><Link to='/' onClick={() => window.scrollTo(0, 0)}>Домой</Link></div>
            <div><Link to='/About_Us' onClick={() => window.scrollTo(0, 0)}>О нас</Link></div>
            <div><Link to='/Northern_fire' onClick={() => window.scrollTo(0, 0)}>Северный огонь</Link></div>
            <div><Link to='/Chui-Estuary' onClick={() => window.scrollTo(0, 0)}>Чуй-Оозы</Link></div>
        
        </div>
        </div>
        
        </div>)}

export default Header;