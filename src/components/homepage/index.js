import '../../styling/homepage/index.css';
import { useDispatch}  from 'react-redux';
import { useState, useEffect }  from 'react';

import applied_maths_icon from '../../styling/icons/subject_icons/applied_maths_icon.png';
import english_icon from '../../styling/icons/subject_icons/english_icon.png';
import humanities_icon from '../../styling/icons/subject_icons/humanities_icon.png';
import languages_icon from '../../styling/icons/subject_icons/languages_icon.png';
import maths_icon from '../../styling/icons/subject_icons/maths_icon.png';
import psychology_icon from '../../styling/icons/subject_icons/psychology_icon.png';
import science_icon from '../../styling/icons/subject_icons/science_icon.png';

// import high5 from '../../styling/icons/high_5.svg';
import stars_ from '../../styling/icons/stars.svg';
import arrow from '../../styling/icons/arrow.svg';
import rightArrow from '../../styling/icons/right-arrow.png';
import leftArrow from '../../styling/icons/left-arrow.png';
import portal_badge from '../../styling/icons/portalBadge.svg';
import Slider from '../../pages/common_functions/Slider/Slider';

import pic1 from '../../styling/backgrounds/pexels-photo-1.jpeg';

import pic2 from '../../styling/backgrounds/pexels-photo-2.jpeg';
import pic3 from '../../styling/backgrounds/pexels-photo-3.jpeg';
import pic4 from '../../styling/backgrounds/pexels-photo-4.jpeg';
import pic5 from '../../styling/backgrounds/pexels-photo-5.jpeg';
// src\styling\backgrounds\pexels-photo-1.jpeg
const images = [
  pic5, pic1, pic2, pic3, pic4, 
  // 'https://images.pexels.com/photos/6325967/pexels-photo-6325967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  // 'https://images.pexels.com/photos/6147069/pexels-photo-6147069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  // 'https://images.pexels.com/photos/5905881/pexels-photo-5905881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  // 'https://images.pexels.com/photos/5553098/pexels-photo-5553098.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  // 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
  // 'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
  // 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
  // 'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80',
]


// icons 
// maths => https://www.flaticon.com/free-icon/math_3320938?term=maths&page=1&position=9&page=1&position=9&related_id=3320938&origin=search
// english => https://www.flaticon.com/free-icon/book_2421033?term=reading&page=1&position=1&page=1&position=1&related_id=2421033&origin=search
// science => https://www.flaticon.com/free-icon/atom_2933803?term=physics&page=1&position=2&page=1&position=2&related_id=2933803&origin=search
// languages => https://www.flaticon.com/free-icon/linguistics_4459037?term=english&related_id=4459037
// humanities => https://www.flaticon.com/free-icon/worldwide_814587?term=world&page=1&position=12&page=1&position=12&related_id=814587&origin=search
// psychology => https://www.flaticon.com/free-icon/autism_1491171?term=psychology&page=1&position=4&page=1&position=4&related_id=1491171&origin=search

// backgrounds
// maths image => https://www.freepik.com/free-vector/chalkboard-with-math-elements_1159689.htm#page=1&query=mathematics%20background&position=1
// english image => https://www.freepik.com/premium-photo/english-word-with-letter-beads-blue-background_3935695.htm#page=1&query=english%20background&position=8
// science => https://www.freepik.com/free-vector/hand-drawn-science-education-background_7546631.htm#page=1&query=science%20background&position=1
// languages => https://www.freepik.com/free-vector/language-composition-with-flat-design_2609860.htm#page=1&query=languages%20background&position=15
// geogrpahy => https://www.freepik.com/free-photo/world-globe-classroom-blurred-background_2728039.htm#page=1&query=geography%20background&position=3
// psychology => https://www.freepik.com/premium-vector/human-silhouette-sees-brain-head-which-is-connected-brain-illustrations_9866775.htm#page=1&query=psychology%20background&position=23



const IntroSliderBackground = ({ current, images }) => {



    return (
        <div id="background-slider-container">
            <div id="background-slider-original">
                <Slider images={images} current={current}/>
            </div>
            <div id="background-slider-filter"></div>
        </div>        
    )
}

export const IntroductionV2 = () => {
    
    const [current, setCurrent] = useState(0)
    const [add, set_add] = useState(true);

    const handleClick = (forced=false, forward=false, selective=undefined) => {
        let val = 0;

        if (forced){ 

            if (current==0 && !forward) val = images.length-1;
            else val = (current + (forward ? 1:-1)) % images.length;

            setCurrent(val);
            return;
        }

        if (selective!=undefined) val=selective;
        else val = (current + (add ? 1:-1)) % images.length;
        
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

    const dispatch = useDispatch();
    
    return (
        <div id="intro-first">
            <IntroSliderBackground images={images} current={current}/>

    <div  className="introduction-containerV2">

            
            <div className="introduction-containerV3">
                <h1 id="intro-tag-header">
                Smart and easy online learning, just for you.
                </h1>

                <p id="welcome-sentence-mini">
                We offer one-to-one help to students in the UK lessons so they can understand the world around them better.
                </p>

                <button onClick={()=>dispatch({type:"TOGGLE_COVER", to:0})} id="start-now">Start now</button>

                <SliderTracker current={current} handleClick={handleClick} size={images.length}/>

            </div>


    </div>
    </div>
    )
}

const SliderTracker = ({ size, current, handleClick }) => {
    
    let circles = [];
    for (let a = 0; a < size; a++){
        circles.push(<div key={a} 
            style={{
                border:`3px solid rgba(255, 255, 255, ${current==a? 0.7 : 0.3})`}}
            className="circles"
            onClick={()=>handleClick(false, false, a)}
            ></div>);
    }

    
    return (
        <div id="tracker-container">
            {/* <button onClick={()=>handleClick(true, false)}>Back</button> */}
            <img  className="arrows" src={leftArrow} onClick={()=>handleClick(true, false)}/>
            { 
                circles
            }
            <img  className="arrows" src={rightArrow} onClick={()=>handleClick(true, true)}/>
            
        </div>
    )
}

export const Subjects = () => {

    let data = [
        { img:maths_icon, title:"Maths", text:"This is a description of the following subject. Write whatever you wish here." },
        { img:english_icon, title:"English", text:"This is a description of the following subject. Write whatever you wish here." },
        { img:humanities_icon, title:"Humanities", text:"This is a description of the following subject. Write whatever you wish here." },
        { img:psychology_icon, title:"Psychology", text:"This is a description of the following subject. Write whatever you wish here." },
        { img:languages_icon, title:"Languages", text:"This is a description of the following subject. Write whatever you wish here." },
        { img:science_icon, title:"Science", text:"This is a description of the following subject. Write whatever you wish here." },
    ]

    let applied = { img:applied_maths_icon, title:"Applied Maths", text:"Start coding with your favorite language on any platform, OS, and device." }
         
    let sections = [];

    data.forEach(subject=>
    
        sections.push(<Subjects_mini data={subject}/>)

    )

    sections.push(<div className="blank"></div>);
    sections.push(<Subjects_mini data={applied}/>);
    sections.push(<div className="blank"></div>);


    return (
        <div className="board-component-main">
            <div className="component-header-title">Subjects</div>
            <div id="subjects-inner-container">
                {sections}
            </div>
        </div>
    )
}

const Subjects_mini = ({ data, show=true }) => {
    
    const { img, title, text } = data;

    return (
        <div id="subjects-container-mini">
            <img src={img }/>
            <h2>{title}</h2>
            { show? <p id="subjects-description">{text}</p> : null}
        </div>
    )
}

export const PortalBadge = () => {
    
    const dispatch = useDispatch();
    
    return (<div id="portalbadge-container" className="introduction-container">
        

        <div id="text-container">
            <p id="intro-text-a" className="intro-text">
            Practical resources on our Portal
            </p>

            <p id="welcome-sentence">
            Our Portals offers educational resources whenever you need them and makes communication with tutors easier.
            </p>

            <button onClick={()=>dispatch({type:"TOGGLE_COVER", to:0})} id="start-now">Try now</button>

        </div>

        <div id="portal-badge">
            <img src={portal_badge}/>
        </div>


    </div>)
}

export const PortalBadgeV2 = () => {
    
    
    return (<div className="introduction-containerV2">
        
        
            <h1 id="intro-tag-header">
            <span className="quote">"</span>Practical resources<span className="quote">"</span>
            </h1>

            <p id="welcome-sentence">
            Our Portals offers educational resources whenever you need them and makes communication with tutors easier.</p>

            <img id="pb_img" src={portal_badge}/>


    </div>)
}

export const Categories = () => {
    return (
        <div className="board-component-main">
            <div className="component-header-title">Qualifications</div>

        <div className="regular-cont-main-frame">
            {/* <Slider/> */}

            <h2 id="intro-text-b" className="intro-text">
            We offer a fully  personalised tutoring service designed for the UK curriculum.
            </h2>


            <CategsMini/>

        </div>
        </div>
    )
}

const CategsMini = () => {
    
    const cats = [
        {
            name: 'A-Levels',
            range: '16-18',
            background:"#41B8DE"
        },
        {
            name: 'GCSE',
            range: '12-16',
            background:"#41DEA5"
        },
        {
            name: 'I-GCSE',
            range: '12-16',
            background:"#607C72"
        },
        {
            name: 'The 11+',
            range: '07-11',
            background:"#DE41C5"
        },                        
    ]
    // 
    return(
        <div id="cats-mini-container">
            
            {cats.map(({name, range, background})=>
                
                    <div  className="cats-mini-section">
                        
                        <h3 style={{color:background}} className="cats-mini-name">{name}</h3>
                        <p style={{background}} className="cats-mini-range">{range}</p>

                    </div>
                
                )}

        </div>
    )
}

export const Testemonials = ({ no_border }) => {
    return (
        <div className="board-component-main">
            <div className="component-header-title">Testimonials</div>
        <div className={no_border ? "regular-cont-main-frame-no-b":"regular-cont-main-frame"}>



            <TesteMini dont_show_arrow={true}/>
            <TesteMini/>

        </div>
        </div>
    )
}

const TesteMini = ({ dont_show_arrow }) => {
    
    const cats = [
        {
            name: 'Lilly Smith',
            comment: 'Mr Christian was a kind tutor who had a friendly manner. He worked conscientiously through the A-Level material supporting me all the way.',
            date: '5 months ago',
            stars:5
        },
                       
    ]
    
    return(

        <div className="cats-mini-container-prime">

            <div id="cats-mini-container">
                
                {cats.map(({name, comment, date})=>
                    
                        <div  className="testim-mini-container">
                            
                            <p className="testim-mini-name">{name}</p>
                            <p className="testim-mini-date">{date}</p>
                            <p className="textim-mini-comment">{comment}</p>
                            <img src={stars_}/>

                        </div>
                    
                    )}


            </div>
            {
                dont_show_arrow ? null : <img className="arrow-icon" src={arrow}/>
            }
            

        </div>
    )
}

export const CombineTest = () => {
    return (
        <div id="testimonial-section" className="cats-mini-container-prime">
            <TesteMini dont_show_arrow={true}/>
            <TesteMini dont_show_arrow={true}/>
            <img className="arrow-icon" src={arrow}/>
        </div>
    )
}

