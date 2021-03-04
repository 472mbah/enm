import '../../styling/homepage/index.css';
import { useDispatch}  from 'react-redux';
import high5 from '../../styling/icons/high_5.svg';
import stars_ from '../../styling/icons/stars.svg';
import arrow from '../../styling/icons/arrow.svg';

export const Introduction = () => {
    
    const dispatch = useDispatch();
    
    return (<div id="introduction-container">
        
        
        <div id="text-container">
            <p id="intro-text-a" className="intro-text">
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

export const Categories = () => {
    return (
        <div className="regualr-cont-main-frame">

            <div>

            <p id="intro-text-b" className="intro-text">
            We offer a fully  personalised tutoring service for the following...
            </p>

            </div>

            <CategsMini/>

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
    
    return(
        <div id="cats-mini-container">
            
            {cats.map(({name, range, background})=>
                
                    <div  className="cats-mini-section">
                        
                        <p className="cats-mini-name">{name}</p>
                        <p style={{background}} className="cats-mini-range">{range}</p>

                    </div>
                
                )}

        </div>
    )
}

export const Testemonials = ({ no_border }) => {
    return (
        <div className={no_border ? "regualr-cont-main-frame-no-b":"regualr-cont-main-frame"}>

            <div>

            <p  id="intro-text-c" className="intro-text">
            Quick words from our students...
            </p>

            </div>

            <TesteMini/>

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

