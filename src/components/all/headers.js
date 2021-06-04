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
import oflgo from '../../styling/logos/logo_mini.jpg';
import { Subjects } from '../../components/homepage';
import { BrowserRouter as Router, useLocation, Route, Link, useHistory  } from "react-router-dom";
import { useState, useEffect } from 'react';




export const GreyHeader = () => {

    // const [menuMobile, setMenuMobile] = useState(false);

    const history = useHistory()

    const dispatch = useDispatch();
    const menuMobile = useSelector(state => state.rootReducer.mobile_menu);

    const [onPortal, setOnPortal] = useState(false);
    const [previous_pos, set_previous_pos] = useState(0);
    const [hide, set_hide] = useState(false);

    const handleClick = () => {
        history.push("/enm");
    }

    const eval_height = () => {
        const currentScrollPos = window.pageYOffset;
        set_hide(previous_pos < currentScrollPos)
        set_previous_pos(currentScrollPos);            
    }



    useEffect(() => {
        window.onscroll = () => eval_height();
        return function cleanupListener() {
            window.onscroll = () => eval_height();
        }
    });

    const location = useLocation();
    useEffect(() => {
        
        setOnPortal(window.location.pathname.includes('portal'));
        
        
    }, [location]);    

    const [hover, setIndex] = useState(false);

    const styling = () => {
        let val = 255;
        let val2 = 0;
        return {
             
            background: `rgba(${val}, ${val}, ${val}, 0.2)`,
            color: `rgba(${val2}, ${val2}, ${val2}, 0.7)`,
            borderBottom: "1.5px solid #ddd",
            transform: `translateY(${hide || onPortal ?'-100':'0'}%)`
        };
    }



    return (
        <div  style={styling()}  onMouseLeave={()=>setIndex(false)} onMouseEnter={()=>setIndex(true)}  id="start-float-header">

        <div  id="grey-header">
            
            <div id="social-icons-container">
                <Loading/>
                <p onClick={handleClick} id="logo">Enmaths</p>
            </div>
            
            <img  onClick={()=>dispatch({ type:"TOGGLE_MOBILE_MENU" })} src={menuMobile ? cross : mobile_option} id="mobile-option-icon"/>

            <div id="secondary-inner-menu">
            {
                Object.keys(data).map(k=> 
                    <div  className="menu-parent">
                        <MenuUnit show={hover==k} index={k} />
                    </div>
                )                
            }
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

    const styling = () => {
        return {
            
        };
    }

    return( 
    
    <div  className={`nav-bar-container`} onMouseOver={()=>setHover(true)} onMouseLeave={()=>setHover(false)} >
        
        {
            single ? 
                <Link to={link}><button  className="nav-bar-button" >{name}</button></Link>
            : <button  className="nav-bar-button" >{name}</button>
        }

        

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