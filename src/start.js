import './styling/start.css';
//https://reactcommunity.org/react-transition-group/transition
import chat from './styling/icons/chat.svg';
import { Registration, Query } from './main_content';
import { GreyHeader } from './components/all/headers';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { IntroductionV2, Categories, Testemonials, Subjects, PortalBadgeV2 } from './components/homepage/index.js';
import { BrowserRouter as Router,  Route  } from "react-router-dom";
import { PageGenerator as Pgs } from './pages/subjects';
import { SubjectsIntro } from './pages/subjects';
import { ExamsIntro } from './pages/exams';
import { PageGenerator as Pge } from './pages/exams';
import { PageGenerator as Abo } from './pages/about';
import { PageGenerator as Tut } from './pages/tutors';
import { PageGenerator as Jbs } from './pages/jobs';
import { Footer } from './components/footer';
import { MobileMenu } from './components/all/headers' 
import FileManager from './pages/common_functions/FileViewer';




export const Main = () => {

    const dispatch = useDispatch();
    const big_cover = useSelector(state => state.rootReducer.big_cover);
    const big_cover_to = useSelector(state => state.rootReducer.big_cover_index);
    const [hideOnScroll, setHideOnScroll] = useState(true)

    // const id = useParams().id;


    // useEffect(() => {
    //     const handleWindowResize = () => dispatch({type:"SET_MOBILE", mobile:window.innerWidth < 500});
    //     window.addEventListener("resize", handleWindowResize);
    //   });

    



    return <div  id="start-container">

{                    big_cover ? <div id="big-cover">
                        {
                            big_cover_to==0 ? <Registration/>  :
                            big_cover_to==1 ? <Query/> : <FileManager/>
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

            <Route exact path="/" component={HomePage} />
            <Route exact path="/enm" component={HomePage} />

            <div id="main-body-mini">
                <div id="main-body-inner">

                    <Route exact path="/subjects/" component={SubjectsIntro}  />
                    <Route exact path="/exams/" component={ExamsIntro}  />
                    <Route exact path="/subjects/:id" component={Pgs}  />
                    <Route exact path="/exams/:id" component={Pge}  />
                    <Route exact path="/about" component={Abo}  />
                    <Route exact path="/tutors" component={Tut}  />
                    <Route exact path="/jobs" component={Jbs}  />
                    <Footer/>

                </div>
            </div>

        </div>
    )
}

const HomePage = () => {
    return (
        <div id="main-body-page">
                <IntroductionV2/>
            <div id="main-body-mini">
                <div id="main-body-inner">
                    <Categories/>
                    <PortalBadgeV2/>
                    <Subjects/>
                    <Testemonials/>
                </div>                
            </div>                
        </div>
    )
}

