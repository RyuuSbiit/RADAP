import React from "react";
import './style.scss'
import { Link } from "react-router-dom";








export function Basement() {
    return(<div>
        <div className="Basement">
            <div className="Basement__info">
            <img src='.\IMG\Logo\Logo_base.svg'></img>
            <div>REDAP</div>
            </div>
            <div className="Basement__team">
            ©️prod by ryuu & ph.baklanova
            </div>
            <div className="Basement__icons">
                <Link to='https://vk.com/red__ap' onClick={() => window.scrollTo(0, 0)}><img src=".\IMG\Icons\VK com.svg"/></Link>
                <Link to='https://instagram.com/_redap_?igshid=MzRlODBiNWFlZA==' onClick={() => window.scrollTo(0, 0)}><img src=".\IMG\Icons\Instagram.svg"/></Link>
            </div>
        </div>
    </div>)}

export default Basement