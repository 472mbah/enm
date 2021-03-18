import '../../styling/components/header.css';
// import instagram from '../../styling/icons/instagram.png';
// import facebook from '../../styling/icons/facebook.png';
// import youtube from '../../styling/icons/youtube.png';
// import linkedin from '../../styling/icons/linkedin.png';
// import twitter from '../../styling/icons/twitter.png';
import mobile_option from '../../styling/icons/mobile_option.svg';
import cross from '../../styling/icons/cross.svg';
import { Loading } from '../loading';
import { useSelector, useDispatch } from 'react-redux'; 
import data from './header.json';
import { BrowserRouter as Router, useLocation, Route, Link, useHistory  } from "react-router-dom";
import { useState } from 'react';




export const GreyHeader = () => {

    // const [menuMobile, setMenuMobile] = useState(false);

    const history = useHistory()

    const dispatch = useDispatch();
    const menuMobile = useSelector(state => state.rootReducer.mobile_menu);

    const handleClick = () => {
        history.push("/enm");
    }


    const [hover, setIndex] = useState(false);


    return (
        <div  onMouseLeave={()=>setIndex(false)} onMouseEnter={()=>setIndex(true)}  id="start-float-header">
            {/* {
                mobile ? 
            } */}
        <div  id="grey-header">
            
            <div id="social-icons-container">
                <Loading/>
                <p onClick={handleClick} id="logo">Enmaths</p>
            </div>
            
            <img onClick={()=>dispatch({ type:"TOGGLE_MOBILE_MENU" })} src={menuMobile ? cross : mobile_option} id="mobile-option-icon"/>


            <div id="secondary-inner-menu">
            {
                Object.keys(data).map(k=> 
                    <div  className="menu-parent">
                        <MenuUnit show={hover==k} index={k} />
                    </div>
                )                
            }
            </div>
            <div id="secondary-inner-header">
                <button id="big-purple">Portal</button>
            </div>

            </div> 
        
        </div>
    )
}

export const MobileMenu = () => {
    return (<div id="mobile-menu-container">
            {
                Object.keys(data).map(k=> 
                    <div  className="menu-parent">
                        <MenuUnitMobile index={k} />
                    </div>
                )                
            }

    </div>)
    
} 

const MenuUnit = ({ index }) => {
    
    const [hover, setHover] = useState(false);

    const { name, options, link } = data[index];
    const single = data[index].hasOwnProperty("link");

    return( 
    
    <div className={`nav-bar-container`} onMouseOver={()=>setHover(true)} onMouseLeave={()=>setHover(false)} >
        
        {
            single ? 
                <Link to={link}><button  className={`nav-bar-button`} >{name}</button></Link>
            : <button className={`nav-bar-button`} >{name}</button>
        }

        
            {
                hover? <div id="fill"></div> : null
            }
           


            {/* <div style={{border: options.length>0&&hover?'1.5px solid #ddd':'none', height:hover?'auto':'0px', transition: "0.2s", overflow: hover?"auto":"hidden"}}  className="drop-down-container">
            
                {
                    options.map(({text, url })=>
                        <Link to={url}> <button >{text}</button> </Link>
                    )
                }

            </div>    */}

    </div>
    )
}

const MenuUnitMobile = ({ index }) => {
    
    const dispatch = useDispatch();

    const [hover, setHover] = useState(false);

    const { name, options, link } = data[index];
    const single = data[index].hasOwnProperty("link");

    return( 
    
    <div className="nav-bar-container-mobile" onMouseOver={()=>setHover(true)} onMouseLeave={()=>setHover(false)} >
        
        {
            single ? 
                <Link to={link}><button onClick={()=>dispatch({ type:"TOGGLE_MOBILE_MENU" })}  className="nav-bar-button-mobile" >{name}</button></Link>
            : <button onClick={()=>dispatch({ type:"TOGGLE_MOBILE_MENU" })} className="nav-bar-button-mobile" >{name}</button>
        }

        
            {/* {
                hover? <div id="fill"></div> : null
            } */}
           


            {/* <div style={{border: options.length>0&&hover?'1.5px solid #ddd':'none', height:hover?'auto':'0px', transition: "0.2s", overflow: hover?"auto":"hidden"}}  className="drop-down-container">
            
                {
                    options.map(({text, url })=>
                        <Link to={url}> <button >{text}</button> </Link>
                    )
                }

            </div>    */}

    </div>
    )
}