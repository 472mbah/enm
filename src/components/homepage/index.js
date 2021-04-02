import '../../styling/homepage/index.css';
import { useDispatch}  from 'react-redux';
import high5 from '../../styling/icons/high_5.svg';
import stars_ from '../../styling/icons/stars.svg';
import arrow from '../../styling/icons/arrow.svg';
import portal_badge from '../../styling/icons/portalBadge.svg';

// maths image => https://www.freepik.com/free-vector/chalkboard-with-math-elements_1159689.htm#page=1&query=mathematics%20background&position=1
// english image => https://www.freepik.com/premium-photo/english-word-with-letter-beads-blue-background_3935695.htm#page=1&query=english%20background&position=8
// science => https://www.freepik.com/free-vector/hand-drawn-science-education-background_7546631.htm#page=1&query=science%20background&position=1
// languages => https://www.freepik.com/free-vector/language-composition-with-flat-design_2609860.htm#page=1&query=languages%20background&position=15
// geogrpahy => https://www.freepik.com/free-photo/world-globe-classroom-blurred-background_2728039.htm#page=1&query=geography%20background&position=3
// psychology => https://www.freepik.com/premium-vector/human-silhouette-sees-brain-head-which-is-connected-brain-illustrations_9866775.htm#page=1&query=psychology%20background&position=23

export const Introduction = () => {
    
    const dispatch = useDispatch();
    
    return (<div className="introduction-container">
        
        
        <div id="text-container">
            <p  className="intro-text">
            Smart and easy online learning
            </p>

            <p id="welcome-sentence">
            We offer one-to-one help to students in the UK lessons so they can understand the world around them better.
            </p>

            <button onClick={()=>dispatch({type:"TOGGLE_COVER", to:0})} id="start-now">Start now</button>

        </div>


        <div id="high-5">
            <img src={high5}/>
        </div>

    </div>)
}

export const IntroductionV2 = () => {
    
    const dispatch = useDispatch();
    
    return (<div className="introduction-containerV2">
        
        
            <h1 id="intro-tag-header">
            Smart and easy online learning, just for you.
            </h1>

            <p id="welcome-sentence">
            We offer one-to-one help to students in the UK lessons so they can understand the world around them better.
            </p>

            <button onClick={()=>dispatch({type:"TOGGLE_COVER", to:0})} id="start-now">Start now</button>



    </div>)
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

