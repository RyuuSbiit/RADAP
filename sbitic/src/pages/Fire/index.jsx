import React from "react";
import './style.scss'
import { Link } from "react-router-dom";

import Header from "./Header_fire/Header_fire";







export function Fire() {
    return(<div> 
        <Header/>
        <div className="Head_Fire">
            <img src=".\IMG\Progress\Logo.svg"></img>
            <div className="Head_Fire__heads">Северный огонь</div>
            
        </div>
        <div className="Colection_Fire">
        
            <div className="Colection_Fire__text1"> Коллекция <br/>«Северный огонь» <br/>создавалась по <br/>мотивам «мезенской <br/>росписи» – яркой и <br/>самобытной. В ней<br/> органично <br/>сочетаются  <br/>современные <br/>решения и <br/>исторические нотки.</div>
            
            <div><img src=".\IMG\Fire\1.svg" className="img1_Fire"></img></div>
            <div className="Colection_Fire__block"></div>
            
            

             <div className="Colection_Fire__text2">В коллекции присутствует три основных цвета, каждый из которых отражает элемент огня: <br/>красный - пламя, серый - пепел, белый - дым. Сочетаясь, они органично дополняют друг друга.<br/>В культуре русского севера распространён орнамент в виде геометрических фигур и животных.</div>
             <div><img src=".\IMG\Fire\2.svg" className="img2_Fire"></img></div>
             <div><img src=".\IMG\Fire\3.svg" className="img3_Fire"></img></div>
             <div><img src=".\IMG\Fire\4.svg" className="img4_Fire"></img></div>
             <div className="Colection_Fire__text3">Образ коня на <br/>одежде <br/>символизирует <br/>плодородие, свет <br/>и добро т.к. <br/>считалось, что <br/>именно кони <br/>везут солнце к <br/>небосводу.</div>
             <div><img src=".\IMG\Fire\5.svg" className="img5_Fire"></img></div>
             <div><img src=".\IMG\Fire\6.svg" className="img6_Fire"></img></div>
             <div><img src=".\IMG\Fire\7.svg" className="img7_Fire"></img></div>
             <div className="Colection_Fire__text4">Идея коллекции: <br/>сделать носимую, <br/>повседневную  <br/>одежду в народном <br/>стиле для младшей<br/>и средневозрастной<br/>группы людей, тем<br/>самым знакомя их с<br/>редкими и исчезающими<br/>ремёслами.</div>
             <div><img src=".\IMG\Fire\8.svg" className="img8_Fire"></img></div>

        
        
        </div>
        <div className="Butons_Fire">
        <Link to='/' onClick={() => window.scrollTo(0, 0)}><img src='.\IMG\Icons\Home Page.svg' className="Butons_Fire__img"></img></Link>
        <button type="button" className="button_Fire"  ><Link to='/Chui-Estuary' onClick={() => window.scrollTo(0, 0)}>Смотреть другую коллекцию</Link><img src=".\IMG\Icons\icons.svg"></img></button>
        </div>
        </div>)}

export default Fire