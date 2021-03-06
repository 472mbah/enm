import './styling/start.css';
import { Transition } from 'react-transition-group';
//https://reactcommunity.org/react-transition-group/transition
import chat from './styling/icons/chat.svg';
import { Registration, Query } from './main_content';
import { GreyHeader, MainHeader } from './components/all/headers';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { Introduction, Categories, Testemonials } from './components/homepage/index.js';
import { BrowserRouter as Router, useLocation, Route, Link, useHistory  } from "react-router-dom";
import { PageGenerator as Pgs } from './pages/subjects';
import { PageGenerator as Pge } from './pages/exams';
import { PageGenerator as Abo } from './pages/about';
import { PageGenerator as Tut } from './pages/tutors';
import { PageGenerator as Jbs } from './pages/jobs';

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

export const Main = () => {

    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const big_cover = useSelector(state => state.rootReducer.big_cover);
    const big_cover_to = useSelector(state => state.rootReducer.big_cover_index);

    return <div  id="start-container">
        <Transition in={big_cover} timeout={{ appear: 500, enter: 300, exit: 500,}}>
            {state => (
                <div id="big-cover-container" style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                    
                  }}>
{                    big_cover ? <div id="big-cover">
                        {/* <Registration/> */}
                        {
                            big_cover_to==0 ? <Registration/>  :
                                            <Query/>
                        }

                    </div> : null}
                 </div>                
            )}
      </Transition>


        <GreyHeader/>
        <MainBody/>
        <img onClick={()=>dispatch({type:"TOGGLE_COVER", to:1})} id="chat-box-button" src={chat} />
    
    </div>
    
}

const MainBody = () => {
    return (
        <div id="main-body">
            <div id="main-body-inner">
                <Route exact path="/" component={HomePage} />
                <Route exact path="/enm" component={HomePage} />
                <Route exact path="/subjects/:id" component={Pgs}  />
                <Route exact path="/exams/:id" component={Pge}  />
                <Route exact path="/about" component={Abo}  />
                <Route exact path="/tutors" component={Tut}  />
                <Route exact path="/jobs" component={Jbs}  />
            </div>
        </div>
    )
}

const HomePage = () => {
    return (
        <div id="main-body-page">
                <Introduction/>
                {/* <hr className="line-break"/> */}
                <Categories/>
                {/* <hr className="line-break"/> */}
                <Testemonials/>
        </div>
    )
}

