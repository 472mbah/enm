import '../../styling/portal/index.css'
import leftArrow from '../../styling/icons/right-arrow.png';
import homeworkIcon from '../../styling/icons/portal_icons/homework.png';
import lessonsIcon from '../../styling/icons/portal_icons/lessons.png';
import practiceIcon from '../../styling/icons/portal_icons/practice.png';
import settingsIcon from '../../styling/icons/portal_icons/settings.png';
import studyIcon from '../../styling/icons/portal_icons/study.png';
import examIcon from '../../styling/icons/portal_icons/test.png';
import { useState } from 'react';
import Circles from '../../components/loading/circles';

export default () => {

    const [showPanel, setShowPanel] = useState(true);

    const error_style = { borderRadius:'0.1em', background:"#E81212", color:"#fff", padding: '0.2em 1em' }
    const main_style = { borderRadius:'0.1em', backgroundColor:"#eee", width:'100%' }
    const success_style = { borderRadius:'0.1em', background:"#43C515", color:"#fff", padding: '1em 1em', boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.5)' }
    const loading_style = { borderRadius:'0.1em', background:"#E89F12", color:"#fff", padding: '1em 1em', boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.5)' }
    const loading_circle_style = {main_circumference:"45", mini_circumference:"25", border_width:"2", colour:"#fff"}
    
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")
    const [messageStyle, setMessageStyle] = useState(main_style)

    const panels = [
        { text:"Study", icon:studyIcon, query:"" },
        { text:"Homeworks", icon:homeworkIcon, query:"" },
        { text:"Exam papers", icon:examIcon, query:"" },
        { text:"Practice", icon:practiceIcon, query:"" },
        { text:"Lessons", icon:lessonsIcon, query:"" },
        { text:"Details & Preferences", icon:settingsIcon, query:"" },        
 
    ];



    let panel_comps = [];

    panels.forEach(({ text, icon }, index)=>
        panel_comps.push(
        
        <div className="portal-button-container">
            <img className="portal-menu-icons" src={icon}/>
            <button 
                className="portal-side-buttons" 
                key={index}>{text}
            </button>
        </div>
        )
    )

    return <div style={{overflowY:'auto'}}>
        
        <div onMouseEnter={()=>document.body.style.background="#e1d590"} onMouseLeave={()=>document.body.style.background="#fff"} onClick={()=>setShowPanel(!showPanel)} id="box-button">
            <img  style={{transform: `rotate(${showPanel ? -180:0}deg)`}} className="portal-menu-icons"  src={leftArrow}/>
        </div>

        <div style={{left:showPanel ? "0em" : "-100%" }} id="portal-side-panel">



            <div className="grey-background">
                <p style={{fontFamily:"sfb", fontSize:"35px"}}>Oumie Bah</p>
                <p >Student</p>
            </div>

            {/* <div id="two-row">

                <button> Logout </button>
            </div> */}

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

        <div style={{marginLeft:showPanel ? "15em" : "4em", width: showPanel ? "70%" : "90%"  }} id="portal-main-content">
            <h1>This is a template title</h1>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.                
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.                
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.                
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.                
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.                
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.                
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.                
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.                
            </p>
        </div>



    </div>   
}