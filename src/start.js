import './styling/start.css';
import chat from './styling/icons/chat.svg';
import { Registration } from './main_content';
import { GreyHeader, MainHeader } from './components/all/headers';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { Introduction, Categories, Testemonials } from './components/homepage/index.js';
import { BrowserRouter as Router, useLocation, Route, Link, useHistory  } from "react-router-dom";
import { PageGenerator } from './pages/subjects';

export const Main = () => {


    const big_cover = useSelector(state => state.rootReducer.big_cover);

    return <div  id="start-container">
       {
        big_cover ? <div id="big-cover">
          
          <Registration/>

        </div> : null
      }
        <GreyHeader/>
        <MainBody/>
        <img id="chat-box-button" src={chat} />
    </div>
}

const MainBody = () => {
    return (
        <div id="main-body">
            <div id="main-body-inner">
                <Route exact path="/" component={HomePage} />
                <Route exact path="/subjects/:id" component={PageGenerator}  />
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

