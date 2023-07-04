import React from "react";
import './style.scss'
import { Link } from "react-router-dom";
import Header from "../Home/HeaderHome/Header_home";








export function About_Us() {
    return(<div> 
        <Header/>
        
        <div className="Head">О нас</div>
        <div className="block">
            <div className="block__pic"></div><div className="block__pic2"></div><div className="block__text">Russian Exclusive Design Altai<br/>Politechnic (Российский <br/>эксклюзивный дизайн Алтайского <br/>Политеха) – это творческий <br/>коллектив, объединённый <br/>интересом к моде. Участники – <br/>студенты АлтГТУ им. Ползунова.<br/><br/>"Мы учимся на специальности <br/>«Дизайн и конструирование <br/>изделий легкой промышленности». <br/>У нас есть желание и возможность <br/>показать через творчество свой <br/>взгляд на окружающую <br/>действительность, в том числе <br/>мировую и российскую fashion-<br/>индустрию. Как коллектив REDAP <br/>мы заявляем себя на конкурсах, <br/>показах не только регионального, <br/>но и международного масштаба</div>
            <div><img src=".\IMG\About Us\2.svg" className="img2"></img></div>
            <div className="block__pic3"></div>
            <div><img src=".\IMG\About Us\3.svg" className="img3"></img></div>
            <div><img src=".\IMG\About Us\1.svg" className="img1"></img></div>
        </div>
            <div className="buttons">
            <Link to='/' onClick={() => window.scrollTo(0, 0)}><img src='.\IMG\Icons\Home Page.svg'></img></Link>
            <button type="button" className="button"  ><Link to='/Progress' onClick={() => window.scrollTo(0, 0)}>Достижения</Link></button>
            
            </div>

    </div>)}

export default About_Us