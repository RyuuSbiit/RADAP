import React from "react";
import './style.scss'
import { Link } from "react-router-dom";


export function HomePage() {
    return( 
        <div className={"Header"}>
            <div className={"Header__logo"}>

        <img src='.\IMG\Logo\Logo.svg'></img>
            
            </div>
        <div className={'Header__menu'}>

            <div><Link to='/'>Домой</Link></div>
            <div><Link to='/'>О нас</Link></div>
            <div><Link to='/'>Северный огонь</Link></div>
            <div><Link to='/'>Чуй-Оозы</Link></div>
        
        </div>
        </div>)
}
export default HomePage;