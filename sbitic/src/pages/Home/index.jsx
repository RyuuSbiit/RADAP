import React from "react";
import './style.scss'
import { Link } from "react-router-dom";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import Header from "./HeaderHome/Header_home";







export function HomePage() {
    return(<div> 
        <Header/>
    
        
    
        <div className="AboutUs_home">
            <div className="AboutUs_home__img"><img src='.\IMG\HomePage\mainPic.svg'></img></div>
            
            <div className="AboutUs_home__block">
                <div className="AboutUs_home__text">Russian Exclusive Design Altai Politechnic<br/> (Российский эксклюзивный дизайн Алтайского<br/> Политеха) – это творческий коллектив,<br/> объединённый интересом к моде. Участники – <br/>студенты АлтГТУ им. Ползунова.</div>
                <button type="button" className="button"  ><Link to='/About_Us' onClick={() => window.scrollTo(0, 0)}>Больше о нас</Link><img src='.\IMG\Icons\icons.svg'></img></button>
            </div>



        </div>
        <div className="Progress_home">

            <div className="Progress_home__heading">Достижения</div>
            <div className="Progress_home__heading">В 2023</div>
            <div className="Progress_home__right">Лауреат II степени -<br/> Российская<br/> студенческая весна <br/>2023, г. Пермь</div>
            <div className="Progress_home__left">Лауреат 1 степени в<br/> номинации «театр мод» -<br/> ФЕСТА 2023</div>
            <div className="Progress_home__right">Приз зрительских <br/>симпатий на Profashion<br/> Masters в Москве </div>
            <div className="Progress_home__heading">В 2022</div>
            <div className="Progress_home__left">Лауреат 1 степени на конкурсе<br/> Мода 4.0 Evolution в г. Иваново</div>
            <div className="Progress_home__right">Участие в фестивале <br/>дизайна Точка RU - <br/>Сибирь в Новосибирске</div>
            <div className="Progress_home__left">II место в номинации<br/> «Повседневная одежда» - <br/>Адмиралтейская Игла-2022</div>
            <button type="button" className="button"  ><Link to='/Progress' onClick={() => window.scrollTo(0, 0)}>Читать остальное</Link></button>

        </div>
        <div className="Fire_home">

            <div className="Fire_home__heading">Коллекция “Северный огонь”</div>
            <div className="Fire_home"><img src='.\IMG\HomePage\Fire.svg'></img></div>
            <div className="Fire_home__text">Коллекция «Северный огонь» <br/>Создавалась по мотивам «мезенской росписи» – яркой и самобытной.<br/> В ней органично сочетаются  современные решения и исторические нотки.</div>
            <button type="button" className="button"  ><Link to='/Northern_fire' onClick={() => window.scrollTo(0, 0)}>Смотреть всю коллекцию</Link></button>
        </div>
        <div className="Chui_home">

            <div className="Chui_home__heading">Коллекция “Чуй-оозы”</div>
            <div className="Chui_home__img"><div><img src='.\IMG\HomePage\Chui1.svg'></img></div><div><img src='.\IMG\HomePage\Chui2.svg'></img></div></div>
            <div className="Chui_home__text">Коллекция одежды Чуй-Оозы воплощает завораживающее<br/> явление, наполняющее природу Алтая особенной<br/> атмосферой - слияние рек Катуни и Чуи.</div>
            <button type="button" className="button"  ><Link to={'/Chui-Estuary'} onClick={() => window.scrollTo(0, 0)}>Смотреть всю коллекцию</Link></button>
        </div>
        <div className="Contact_home">
            <div className="Contact_home__heading">Контакты</div>
            <div className="Contact_home__block"> 
                <div><img src='.\IMG\Icons\Phone.svg'></img>Телефон</div>
                <div><Link to="https://vk.com/red__ap" onClick={() => window.scrollTo(0, 0)}><img src='.\IMG\Icons\VKontakte.svg'></img>VK</Link></div>
                <div><img src='.\IMG\Icons\Address.svg'></img>Адрес</div>
            </div>
            <div className="Contact_home__block"> 
                <div>+7 (983) 389-63-75</div>
                <div><Link to="https://vk.com/red__ap" onClick={() => window.scrollTo(0, 0)}>https://vk.com/red__ap</Link></div>
                <div>г.Барнаул,  пер. Некрасова 64  </div>
            </div>    
            <YMaps ><div className="map">
            <Map width='80%' height='750px' position='reletive' defaultState={{ center: [53.348774, 83.789334], zoom: 17 }} ><Placemark geometry={[53.348774, 83.789334]}></Placemark></Map></div>
            </YMaps>
        </div>
        </div>)
}
export default HomePage;
