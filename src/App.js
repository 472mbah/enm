import React, { Component, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './styling/index.css';
import './styling/App/nav.css';
import { Main, Registration } from './main_content';
import { Introduction } from './pages/subjects';
import { BrowserRouter as Router, Route, Link, useHistory  } from "react-router-dom";
import { Footer } from './main_content/footer';
import { Main as Start } from './start.js';

export default () => {
  const dispatch = useDispatch();

  const big_cover = useSelector(state => state.rootReducer.big_cover);

  return (

    <div>



      <Router>
        <Start/>
      {/* {
        big_cover ? <div id="big-cover">
          
          <Registration/>

        </div> : null
      }

      <div style={{background:require('./styling/backgrounds/mainB.jpg')}} id={big_cover?"show_blur":"no_blur"}>
        <NavBar/>
        <Main/>
      </div>
      <Footer/> */}
      </Router>
    </div>

  );
  
}  

const barData = [{name:"Why ENMATHS", options:[
  {name:"About us"}, {name:"Our team"}, {name:"Our tutors"}, {name:"How we work"}, {name:"Testimonials"}
]}, {name:"Subjects", options:[
  {name:"Maths", url:"/subjects/maths"}, {name:"English"}, {name:"Science"}
]}, {name:"Private Tutors", options:[

]}, {name:"Contact Us", options:[

]}]

const NavBar = () => {
  const [menus, setMenus] = useState(barData);

  

  return (
    <div id="nav-header">
      <div id="nav-header-inner">

        <div id="logo-container">
          <h1 id="logo-text">Enmaths</h1>
        </div>
        
        
        <div id="nav-dash-contain">

        <div id="nav-meta">

          <button>Portal</button>
          <button>Enquire now</button>
          <button>Apply to a tutor</button>
          <p>0333 910 4120</p>
        </div>

        <hr/> 
        <div id="nav-navigation">
          {
            menus.map(data=>
              <Tab data={data}/>
            )
          }
        </div>
        </div>

      
      </div>
    
    </div>
  );

}

const Tab = (data) => {

  const {name, options} = data.data
  const [show, toggleShow] = useState(false);
  useEffect(()=>{
    if (options==undefined) {
      options = [];
    }
  }, [])
  
  return (<div onMouseEnter={()=>toggleShow(true)}  onMouseLeave={()=>toggleShow(false)}  
  className="navbar-section-container">
    <p>{name}</p>
    <div style={{position:"fixed"}}>
    {
      show && options.length > 0 ? <ShowExtension options={options} /> : null
    }
    </div>
  </div>)

}

const ShowExtension = ({options}) => {

  return (
    <div className={"options-section"}>
      {
        options.map(item=>
          // <button >{item.name}</button>
          <Sect item={item}/>
          )
      }
    </div>
  )
}


const Sect = ({item}) => {
  const history = useHistory()

  function handleClick(url) {
    history.push(url);
  }
  return <button onClick={()=>handleClick(item.url==undefined ? "/home":item.url)}>{item.name}</button>
}