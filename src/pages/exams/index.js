
import '../../styling/allPages/index.css';
import data from './content.json';
import { CombineTest } from '../../components/homepage'
import { useEffect, useState } from 'react';
import { PageHeader } from '../../main_content/pageHeader';
import search from '../../styling/icons/search.png';
import more from '../../styling/icons/more.svg';

import {
    useLocation,
    useParams
  } from "react-router-dom";


export const PageGenerator = () => {
    
    const [subject, changeSubject] = useState('maths')
    const [failed, setFal] = useState(false)
    const id = useParams().id;
    const location = useLocation();



    useEffect(() => {

        if (data.hasOwnProperty(subject))
            changeSubject(id)
        else 
            changeSubject('maths')

    }, [location]);




    return(
        <div className="page-main">

            {/* <PageHeader url={data[subject].header.url} subject={subject}/> */}
            {/* <hr/> */}

            <Search/>

            {/* <div id="page-index-container-main"> */}
                <PageIndex/>
            {/* </div> */}
            

            <hr/>
            <Introduction subject={subject}/>
            <hr/>
            <Mapper subject={subject} area="boards" name="Boards"/>
            <hr/>
            <Mapper subject={subject} area="levels" name="Levels"/>
            <hr/>
            <Papers/>

        </div>)
} 

export const Mapper = ({subject, area, name}) => {


    return (
        <div id={area+"-section"} className="content-container-subjects">
            <p className="header">{name}</p>

            <div className="tutors-collection">
                {
                    data[subject][area].content.map(item=>

                            <Qualif details={item}/>
                        
                        )
                }
            </div>


        </div>
    )

}

const Search = () => {

    const [text, setText] = useState("");

    return (
        <div id="search-container">
            <div>
                <img src={search}/>
                <input onChange={e=>setText(e.target.value)} value={text} placeholder="Search For Exam Papers"/>
            </div>

            <div>
                <button  disabled={text.length==0} type="button" className="small_button" id="search_button">Search</button>
                <button  type="button" className="small_button" id="access_button">Filters</button>
            </div>

        </div>
    )
}

const Papers = () => {

    const items = []

    for (let k = 0; k < 20; k++) {
      items.push(<li className="paper-container" key={k}>

          <p>Mathematics Paper {k+1}</p>

          <div className="right-section">
            <p className="board-name">Edexcel</p>
            {/* <img src={more}/> */}
            <button  type="button" className="small_button" id="search_button">View</button>
            <button  type="button" className="small_button" id="search_button">Download</button>

          </div>

      </li>)
    }

    return (
        <div id={"papers-section"} className="content-container-subjects">
            <p className="header">Papers</p>
            <ul>
                {items}
            </ul>
        </div>
    )

}




export const Qualif = ({details}) => {

    const { text } = details;

    return (<div className="option-box">
        
        <p className="sub-header">
            {text}
        </p>

    </div>)

} 

export const Introduction = ({subject}) => {
    return <div id="overview-section" className="overview-section">

        <p className="header">Overview</p>

        <p>{data[subject].overview.text}</p>

    </div>
}

export const PageIndex = () => {

    const onClick = (section) => {
        const element = document.getElementById(section);
        if (element==undefined) return;
        element.scrollIntoView({behavior: "smooth", block: "end", inline: "center"});
    }

    return (
        <div id="page-index-container">
            <button onClick={()=>onClick("overview-section")}>Overview</button>
            <button onClick={()=>onClick("boards-section")}>Boards</button>
            <button onClick={()=>onClick("levels-section")}>Levels</button>
            <button onClick={()=>onClick("papers-section")}>Papers</button>
        </div>
    )
}

export const Enquire = ({subject}) => {

    return (
        <div id="enquiry-section" className="content-container-subjects">
            <p className="header">Make an Enquiry</p>
            <p className="main-text">{data[subject].enquiry.text}</p>
            <button className="inner_button">Make an enquiry now</button>
        
        </div>
    )

}