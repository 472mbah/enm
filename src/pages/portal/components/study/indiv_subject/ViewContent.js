import '../../../../../styling/portal/study.css'
import subjects from '../subject.json';
import Slider from '../../../../common_functions/Slider/Slider'
import { useState, useEffect } from 'react';

import childrenIcon from '../../../../../styling/icons/portal_icons/children.png';
import searchIcon from '../../../../../styling/icons/search.png';
import practiceIcon from '../../../../../styling/icons/portal_icons/practice.png';
import studyIcon from '../../../../../styling/icons/portal_icons/study.png';
import examIcon from '../../../../../styling/icons/portal_icons/test.png';

export default (props) => {
    const { content, name, description, coverImage, icon } = subjects[props.subject];

    const images = [coverImage, "https://image.freepik.com/free-photo/image-engineering-objects-workplace-top-view-construction-concept-engineering-tools-vintage-tone-retro-filter-effect-soft-focus-selective-focus_1418-706.jpg", "https://image.freepik.com/free-photo/image-engineering-objects-workplace-top-view-construction-concept-engineering-tools-vintage-tone-retro-filter-effect-soft-focus-selective-focus_1418-469.jpg", "https://image.freepik.com/free-photo/technician-repairing-computer-computer-hardware-repairing-upgrade-technology_1150-8861.jpg", "https://image.freepik.com/free-photo/back-school-child-plus-arms-crossed-notepad_1134-1297.jpg"]

    const [current, setCurrent] = useState(0)
    const [add, set_add] = useState(true);

    const handleClick = () => {
        let val = (current + (add ? 1:-1)) % images.length;
        setCurrent(val);
        if (val==(images.length-1)) set_add(false);
        if (val==0) set_add(true);
    }
  
    useEffect(() => {
      const timer = setInterval(() => {
  
        handleClick()
      }, 4000);
      return () => clearTimeout(timer);
    });

    const renderTopicsPanel = () => 
    (
        <div id="topics-panel">
            <div className="icon-tab">
                <img src={studyIcon}/>
                <img src={practiceIcon}/>
                <img src={examIcon}/>
                <img src={childrenIcon}/>
            </div>

            <img id="search-icon" src={searchIcon}/>

            
        </div>        
    ) 

    const contentSection = content.map(({name, description, lastUpdate, coverImage}, i)=>
        
        <div className="topic-container">
            <h3>{name}</h3>
            <p>{description}</p>

            <div className="icon-tab">
                <img src={studyIcon}/>
                <img src={practiceIcon}/>
                <img src={examIcon}/>
                {/* <img src={childrenIcon}/> */}

            </div>
            
            <p className="last-update">Last update: {lastUpdate}</p>
        
        </div>

    )


    return (

        <div id="subject-main-container">
            <div id="header-icon-contain">
                <img src={icon}/>
                <h1>{name}</h1>

            </div>
            <Slider images={images} height={"15em"} current={current}/>
            <p>{description}</p>
            <h2>Topics</h2>
            <div>
            { renderTopicsPanel() }
            </div>
            <div id="topic-container">
            {contentSection}
            </div>

        </div>
    )
}