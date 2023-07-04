import React from "react";
import './style.scss'
import { Link } from "react-router-dom";

import Header from "./Header/Header_Progress";







export function Progress() {
    return(<div> 
        <Header/>
        <div className="Head_progress">
            <img src=".\IMG\Progress\Logo.svg"></img>
            <div className="Head_progress__heads">Достижения</div>
            
        </div>
        <div className="text_progress">В 2023</div>

        <div className="Left_progress">
            <div className="Left_progress__text">Лауреат II степени - <br/>Российская <br/>студенческая весна <br/>2023, г. Пермь</div>
            <div className="Left_progress__img"><img src=".\IMG\Progress\1.svg"></img></div>
        </div>
        <div className="Right_progress">
            
            <div className="Right_progress__img"><img src=".\IMG\Progress\2.svg"></img></div>
            <div className="Right_progress__text">Лауреат 1 степени в <br/>номинации «театр мод» - <br/>ФЕСТА 2023</div>
        </div>
        <div className="Left_progress">
            <div className="Left_progress__text">Приз зрительских <br/>симпатий на Profashion <br/>Masters в Москве </div>
            <div className="Left_progress__img"><img src=".\IMG\Progress\3.svg"></img></div>
        </div>
        <div className="text_progress">В 2022</div>

        <div className="Right_progress">
            <div className="Right_progress__img"><img src=".\IMG\Progress\4.svg"></img></div>
            <div className="Right_progress__text">Участие в фестивале <br/>дизайна Точка RU - <br/>Сибирь в Новосибирске</div>
        </div>
        <div className="Left_progress">
            <div className="Left_progress__text">Лауреат 1 степени на конкурсе <br/>Мода 4.0 Evolution в <br/>номинации “PRET-A-PORTER”  <br/>в г. Иваново</div>
            <div className="Left_progress__img"><img src=".\IMG\Progress\5.svg"></img></div>
        </div>
        <div className="Right_progress">
            <div className="Right_progress__img"><img src=".\IMG\Progress\6.svg"></img></div>
            <div className="Right_progress__text">II место в номинации <br/>«Повседневная одежда» - <br/>Адмиралтейская Игла-2022</div>
        </div>
        <div className="Left_progress">
            <div className="Left_progress__text">Лауреат II степени <br/>в еоминации “Театр моды” <br/>на фестивале <br/>fashion meets fashion  </div>
            <div className="Left_progress__img"><img src=".\IMG\Progress\7.svg"></img></div>
        </div>
        <div className="Right_progress">
            <div className="Right_progress__img"><img src=".\IMG\Progress\8.svg"></img></div>
            <div className="Right_progress__text">Лауреат I степени - <br/>Российская студенческая весна <br/>2022, г. Самара</div>
        </div>
        <div className="Home_Progress"><Link to='/' onClick={() => window.scrollTo(0, 0)}><img src=".\IMG\Icons\Home Page.svg"></img></Link></div>

        
        

        </div>)}

export default Progress