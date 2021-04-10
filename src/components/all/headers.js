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
import { useState, useEffect } from 'react';




export const GreyHeader = () => {

    // const [menuMobile, setMenuMobile] = useState(false);

    const history = useHistory()

    const dispatch = useDispatch();
    const menuMobile = useSelector(state => state.rootReducer.mobile_menu);

    const is_dm = () => {
        let p = window.location.pathname;
        return p=="/enm" || p=="/";
    }



    const [dm, set_dm] = useState(is_dm());
    const [past_slider, set_past_slider] = useState();
    const [previous_pos, set_previous_pos] = useState(0);
    const [hide, set_hide] = useState(false);

    const handleClick = () => {
        history.push("/enm");
    }

    const eval_height = () => {
        set_past_slider(window.pageYOffset>window.innerHeight);
        // const currentScrollPos = window.pageYOffset;
        // const visible = previous_pos < currentScrollPos;
        // set_previous_pos(currentScrollPos)
        // set_hide(!visible)
        // if (window.pageYOffsetprevious_pos) {
            // set_previous_pos(window.pageYOffset);            
        // }
    }



    const location = useLocation();
    useEffect(() => {

        set_dm(is_dm());

    }, [location]);

    const eval_show = (curr) => {
        return previous_pos>curr
    }

    useEffect(() => {
        window.onscroll = () => eval_height();
        
        return function cleanupListener() {
            window.onscroll = () => eval_height();
        }
      }, []);


    const [hover, setIndex] = useState(false);

    const styling = () => {
        let val = dm & !past_slider ? 0 : 255;
        let val2 = dm & !past_slider ? 255 : 0;
        // let hide = 
        // set_previous_pos(window.pageYOffset)
        return {
            background: `rgba(${val}, ${val}, ${val}, 0.2)`,
            color: `rgba(${val2}, ${val2}, ${val2}, 0.7)`,
            borderBottom: !dm || past_slider ? "1.5px solid #ddd" : "none",
            // transform: `translateY(${!hide?'-100':'0'}%)`
        };
    }

    return (
        <div  style={styling()}  onMouseLeave={()=>setIndex(false)} onMouseEnter={()=>setIndex(true)}  id="start-float-header">
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
                        <MenuUnit dm={dm & !past_slider} show={hover==k} index={k} />
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

const MenuUnit = ({ index, dm }) => {
    
    const [hover, setHover] = useState(false);

    const { name, options, link } = data[index];
    const single = data[index].hasOwnProperty("link");

    const styling = () => {
        let val2 = dm ? 255 : 0;
        return {
            color: `rgba(${val2}, ${val2}, ${val2}, 0.7)`,
        };
    }

    return( 
    
    <div  className={`nav-bar-container`} onMouseOver={()=>setHover(true)} onMouseLeave={()=>setHover(false)} >
        
        {
            single ? 
                <Link to={link}><button style={styling()}  className="nav-bar-button" >{name}</button></Link>
            : <button style={styling()} className="nav-bar-button" >{name}</button>
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