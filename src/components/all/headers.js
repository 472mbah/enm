import '../../styling/components/header.css';
import instagram from '../../styling/icons/instagram.png';
import facebook from '../../styling/icons/facebook.png';
import youtube from '../../styling/icons/youtube.png';
import linkedin from '../../styling/icons/linkedin.png';
import twitter from '../../styling/icons/twitter.png';
import { Loading } from '../loading';
import data from './header.json';
import { BrowserRouter as Router, useLocation, Route, Link, useHistory  } from "react-router-dom";
import { useState } from 'react';



export const GreyHeader = () => {


    const history = useHistory()

    const handleClick = () => {
        history.push("/");
    }

    const [hover, setIndex] = useState(false);

    const style = hover => ({
        zIndex: hover  ? '5' : '1',
    })


    return (
        <div  style={style(hover)} onMouseLeave={()=>setIndex(false)} onMouseEnter={()=>setIndex(true)}  id="start-float-header">

        <div  id="grey-header">
            
            <div id="social-icons-container">
                <Loading/>
                <p onClick={handleClick} id="logo">Enmaths</p>
            </div>
            {/* <div id="pages-container"> */}
            {
                Object.keys(data).map(k=> 
                    <div  className="menu-parent">
                        <MenuUnit show={hover==k} index={k} />
                    </div>
                )                
            }
            <button id="big-purple">Portal</button>


        </div> </div>
    )
}







const MenuUnit = ({ index }) => {
    
    const [hover, setHover] = useState(false);

    const { name, options } = data[index];
    const single = data[index].hasOwnProperty("link");
    
    
    return( 
    
    <div className={`nav-bar-container`} onMouseOver={()=>setHover(true)} onMouseLeave={()=>setHover(false)} >
        
        <button className={`nav-bar-button`} >{name}</button>
            {
                hover? <div id="fill"></div> : null
            }
           
            
            <div style={{height:hover?'auto':'0px', transition: "1s", overflow: hover?"auto":"hidden"}}  className="drop-down-container">
            
                {
                    options.map(({text, url })=>
                        <Link to={url}> <button >{text}</button> </Link>
                    )
                }

            </div>   

            





    </div>
    )
}

