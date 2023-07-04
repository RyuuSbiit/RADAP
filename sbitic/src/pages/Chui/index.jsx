import React from "react";
import './style.scss'
import { Link } from "react-router-dom";
import Header from "./Header_Chui/Header_Chui";








export function Chui() {
    return(<div> 
        <Header/>
        <div className="Head_Chui">
            <img src=".\IMG\Chui\logo.svg"></img>
            <div className="Head_Chui__heads">Чуй-Оозы</div>
            
        </div>
        <div className="Colection_Chui">
            <div><img src=".\IMG\Chui\1.svg" className="img1_Chui"></img></div>
            <div className="Colection_Chui__block1"></div>
            <div className="Colection_Chui__text1">Коллекция одежды Чуй-Оозы<br/> воплощает <br/>завораживающее явление,<br/>наполняющее природу Алтая<br/> особенной<br/>атмосферой - слияние рек Катуни и <br/>Чуи.<br/>Это легендарное место получило <br/>название Чуй-Оозы, другое <br/>название<br/>"Верблюжья шея". Дословно "Чуй"<br/>означает "вода", "Оозы" - русло <br/>реки,<br/> берега.</div>
            <div className="Colection_Chui__block2"></div>
            <div><img src=".\IMG\Chui\2.svg" className="img2_Chui"></img></div>
            <div className="Colection_Chui__text2">Вдохновением послужила легенда <br/>Чуй-Оозы о верблюде, который спас<br/>алтайца от холода.<br/>Кристальные реки, редкие растения<br/>местности нашли отражение в<br/>бирюзовых и зеленый цветах<br/>коллекции.<br/>Плавность линий, перетекающих в<br/>форму подчеркивается природными<br/>оттенками приглушонных тонов,<br/>будто приглушенных пылью<br/>столетней легенды.</div>
            <div className="Colection_Chui__block3"></div>
            <div className="Colection_Chui__block4"></div>
            <div className="Colection_Chui__block5"></div>
            <div className="Colection_Chui__block7"></div>
            <div className="Colection_Chui__block9"></div>
            <div className="Colection_Chui__block11"></div>
            <div><img src=".\IMG\Chui\22.svg" className="img22_Chui"></img></div>
            <div className="Colection_Chui__block12"></div>
            <div><img src=".\IMG\Chui\14.svg" className="img14_Chui"></img></div>
            <div className="Colection_Chui__block10"></div>
            <div><img src=".\IMG\Chui\9.svg" className="img9_Chui"></img></div>
            <div className="Colection_Chui__block8"></div>
            <div className="Colection_Chui__block6"></div>
            <div><img src=".\IMG\Chui\3.svg" className="img3_Chui"></img></div>
            <div><img src=".\IMG\Chui\4.svg" className="img4_Chui"></img></div>
            <div><img src=".\IMG\Chui\5.svg" className="img5_Chui"></img></div>
            <div><img src=".\IMG\Chui\6.svg" className="img6_Chui"></img></div>
            <div><img src=".\IMG\Chui\7.svg" className="img7_Chui"></img></div>
            <div><img src=".\IMG\Chui\8.svg" className="img8_Chui"></img></div>
            <div><img src=".\IMG\Chui\10.svg" className="img10_Chui"></img></div>
            <div><img src=".\IMG\Chui\11.svg" className="img11_Chui"></img></div>
            <div><img src=".\IMG\Chui\12.svg" className="img12_Chui"></img></div>
            <div><img src=".\IMG\Chui\13.svg" className="img13_Chui"></img></div>
            <div><img src=".\IMG\Chui\15.svg" className="img15_Chui"></img></div>
            <div><img src=".\IMG\Chui\16.svg" className="img16_Chui"></img></div>
            <div><img src=".\IMG\Chui\17.svg" className="img17_Chui"></img></div>
            <div><img src=".\IMG\Chui\18.svg" className="img18_Chui"></img></div>
            <div><img src=".\IMG\Chui\19.svg" className="img19_Chui"></img></div>
            <div><img src=".\IMG\Chui\20.svg" className="img20_Chui"></img></div>
            <div><img src=".\IMG\Chui\21.svg" className="img21_Chui"></img></div>
        </div>
        <div className="Butons_Chui">
        <div className="Butons_Chui__block1"></div>
        <div className="Butons_Chui__block2"></div>
        <div className="Butons_Chui__block3">
        <div className="Buton_Chui">
        <Link to='/' onClick={() => window.scrollTo(0, 0)}><img src='.\IMG\Icons\Home Page.svg' className="Buton_Chui__img"></img></Link>
        <button type="button" className="Buton_Chui" ><Link to='/Northern_fire' onClick={() => window.scrollTo(0, 0)}>Смотреть другую коллекцию</Link><img src=".\IMG\Icons\icons.svg"></img></button>
        </div>
        </div>
        </div>
        

        </div>)}

export default Chui
