import './styling/start.css';
//https://reactcommunity.org/react-transition-group/transition
import chat from './styling/icons/chat.svg';
import { Registration, Query } from './main_content';
import { GreyHeader, MainHeader } from './components/all/headers';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { IntroductionV2, Categories, Testemonials, PortalBadge, PortalBadgeV2 } from './components/homepage/index.js';
import { BrowserRouter as Router, useLocation, Route, Link, useHistory  } from "react-router-dom";
import { PageGenerator as Pgs } from './pages/subjects';
import { SubjectsIntro } from './pages/subjects';
import { ExamsIntro } from './pages/exams';
import { PageGenerator as Pge } from './pages/exams';
import { PageGenerator as Abo } from './pages/about';
import { PageGenerator as Tut } from './pages/tutors';
import { PageGenerator as Jbs } from './pages/jobs';
import { Footer } from './components/footer';
import { MobileMenu } from './components/all/headers' 
import { Slider } from './pages/common_functions/Slider/Slider';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 1,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 1 },
  exited:  { opacity: 1 },
};
//#endregion


export const Main = () => {

    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const big_cover = useSelector(state => state.rootReducer.big_cover);
    const big_cover_to = useSelector(state => state.rootReducer.big_cover_index);
    const mobile  = useSelector(state => state.rootReducer.dimensions);

    useEffect(() => {
        const handleWindowResize = () => dispatch({type:"SET_MOBILE", mobile:window.innerWidth < 500});
        console.log(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        // return () => window.removeEventListener("resize", handleWindowResize);
      });

    return <div  id="start-container">

{                    big_cover ? <div id="big-cover">
                        {/* <Registration/> */}
                        {
                            big_cover_to==0 ? <Registration/>  :
                                            <Query/>
                        }

                    </div> : null}



        <GreyHeader/>
        <MainBody/>
        
        <img onClick={()=>dispatch({type:"TOGGLE_COVER", to:1})} id="chat-box-button" src={chat} />
        
    </div>
    
}

const MainBody = () => {

    const menuMobile = useSelector(state => state.rootReducer.mobile_menu);

    return (
        <div id="main-body">
            {
                menuMobile ? <MobileMenu/> : null
            }
            <div id="main-body-inner">
                <Route exact path="/" component={HomePage} />
                <Route exact path="/enm" component={HomePage} />
                <Route exact path="/subjects/" component={SubjectsIntro}  />
                <Route exact path="/exams/" component={ExamsIntro}  />
                <Route exact path="/subjects/:id" component={Pgs}  />
                <Route exact path="/exams/:id" component={Pge}  />
                <Route exact path="/about" component={Abo}  />
                <Route exact path="/tutors" component={Tut}  />
                <Route exact path="/jobs" component={Jbs}  />
            </div>
            <Footer/>
        </div>
    )
}

const HomePage = () => {
    return (
        <div id="main-body-page">
                <IntroductionV2/>
                <Categories/>

                <PortalBadgeV2/>
                {/* <hr className="line-break"/> */}
                {/* <hr className="line-break"/> */}
                <Testemonials/>
        </div>
    )
}

