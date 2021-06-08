import '../../styling/portal/index.css'
import leftArrow from '../../styling/icons/right-arrow.png';
import homeworkIcon from '../../styling/icons/portal_icons/homework.png';
import lessonsIcon from '../../styling/icons/portal_icons/lessons.png';
import practiceIcon from '../../styling/icons/portal_icons/practice.png';
import settingsIcon from '../../styling/icons/portal_icons/settings.png';
import studyIcon from '../../styling/icons/portal_icons/study.png';
import examIcon from '../../styling/icons/portal_icons/test.png';
import logoutIcon from '../../styling/icons/portal_icons/logout.png';
import newsIcon from '../../styling/icons/portal_icons/newspaper.png';
import childrenIcon from '../../styling/icons/portal_icons/children.png';
import billingsIcon from '../../styling/icons/portal_icons/billings.png';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Circles from '../../components/loading/circles';
import { BrowserRouter as Router, useLocation,  useParams, useHistory  } from "react-router-dom";
import Study from './components/study/study';
 
export default () => {

    const location = useLocation();
    const history = useHistory();
    const [ userType, setUserType ] = useState(-1);
    const [ showErrorMessage, setShowErrorMessage ] = useState(false);
    const type = useParams().type;
    const big_cover = useSelector(state => state.rootReducer.big_cover);
    const user = useSelector(state => state.user);

    const dispatch = useDispatch();

    useEffect(()=>{
        
        switch (type) {
            case "students": setUserType(0); break;
            case "guardians": setUserType(1); break;
            case "tutors": setUserType(2); break;
            default: 
                setUserType(-1); 
                document.body.style.background = "#efc5b5";
                dispatch({type:"TOGGLE_COVER", to:0})
                setShowErrorMessage(true);
                break;
        }        

    }, [location])

    // useEffect(()=>{

    //     if (Object.keys(user)==0) {
    //         dispatch({ type:"TOGGLE_COVER", to:0, big_cover_error_type:2 })

    //     }

    // }, [user])

    const [showPanel, setShowPanel] = useState(true);

    const error_style = { borderRadius:'0.1em', background:"#E81212", color:"#fff", padding: '0.2em 1em' }
    const main_style = { borderRadius:'0.1em', backgroundColor:"#eee", width:'100%' }
    const success_style = { borderRadius:'0.1em', background:"#43C515", color:"#fff", padding: '1em 1em', boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.5)' }
    const loading_style = { borderRadius:'0.1em', background:"#E89F12", color:"#fff", padding: '1em 1em', boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.5)' }
    const loading_circle_style = {main_circumference:"45", mini_circumference:"25", border_width:"2", colour:"#fff"}
    
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")
    const [messageStyle, setMessageStyle] = useState(main_style)

    // 0 student
    // 1 guardian
    // 2 tutor 
    // *- (Everyone not including guardian)
    const panels = [
        //  tutors
        { text:"My Students", icon:childrenIcon, query:"", showTo:[2] },        

        { text:"Study", icon:studyIcon, query:"", showTo:[0, 2] },
        { text:"Homeworks", icon:homeworkIcon, query:"", showTo:[0, 2] },
        { text:"Exam papers", icon:examIcon, query:"", showTo:[0, 2] },
        { text:"Practice", icon:practiceIcon, query:"", showTo:[0, 2] },
        { text:"Lessons", icon:lessonsIcon, query:"", showTo:[0, 2] },
        
        // Guardian
        { text:"Children", icon:childrenIcon, query:"", showTo:[1] },        
        { text:"Billings", icon:billingsIcon, query:"", showTo:[1] },        
        { text:"News & Updates", icon:newsIcon, query:"", showTo:[0, 1, 2] },        

        { text:"Details & Preferences", icon:settingsIcon, query:"", showTo:[0, 1, 2] },        
        

    ];




    const onLogout = () => {
        dispatch({ type:"REMOVE_USER" })
        history.push("/")        
    }

    let panel_comps = [];



    const findCurrent = () => {
        for (let z = 0; z < panels.length; z++) {
            const { showTo } = panels[z]
            
            if (showTo.includes(userType)) return z
    
        }        
    }    

    const [currentIndex, setCurrentIndex] = useState(0);
    for (let z = 0; z < panels.length; z++) {
        const { text, icon, showTo } = panels[z]
        
        if (showTo.includes(userType)){
            
            panel_comps.push(
                <div onClick={()=>setCurrentIndex(z)} 
                style={{borderRight:currentIndex==z?"5px solid #000":"none"}}
                className="portal-button-container">
                    <img className="portal-menu-icons" src={icon}/>
                    <button 
                        className="portal-side-buttons" 
                        key={z}>
                            {text}
                    </button>
                </div>                    
            ) 
            // i++;
            
        }
    }

    return <div style={{overflowY:'auto'}}>
        
        {
                showErrorMessage ? 
                <h1 style={{width:"10em", marginTop:"2em", marginLeft:"2em"}}>Oops, this doesn't seem to be the right place. Trying logging in and we will redirect you</h1>
                : null
        }

        {
            userType != -1 ? 

            <div>
<div onMouseEnter={()=>document.body.style.background="#87cefa"} onMouseLeave={()=>document.body.style.background="#fff"} onClick={()=>setShowPanel(!showPanel)} id="box-button">
            <img  style={{transform: `rotate(${showPanel ? -180:0}deg)`}} className="portal-menu-icons"  src={leftArrow}/>
        </div>

        <div style={{left:showPanel ? "0em" : "-100%" }} id="portal-side-panel">



            <div className="grey-background">
                <p style={{fontFamily:"sfb", fontSize:"35px"}}>{`${user.first_name} ${user.last_name}`}</p>
                <div onClick={()=>onLogout()}>
                    <img src={logoutIcon}/>
                    <button >Sign Out</button>
                </div>
            </div>


        <div  id="message-container" style={Object.assign(messageStyle, {})}>
            {
                loading ? <Circles configuration={loading_circle_style}/> : null
            }
            <p style={{fontFamily:'sfb'}}>{message}</p>
        </div>            

            <div id="portal-side-panel-menu-container">
                {panel_comps}
            </div>
        </div>

        <div style={{marginLeft:showPanel ? "15em" : "4em", width: showPanel ? "70%" : "85%"  }} id="portal-main-content">
            <Study/>

        </div>

            </div>            
            
            : null            
        }


    </div>   
}