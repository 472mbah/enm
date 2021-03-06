
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



    // useEffect(() => {

    //     if (data.hasOwnProperty(subject))
    //         changeSubject(id)
    //     else 
    //         changeSubject('maths')

    // }, [location]);


    return(
        <div className="page-main">
            
            <Introduction />

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

export const Qualif = ({details}) => {

    const { text } = details;

    return (<div className="option-box">
        
        <p className="sub-header">
            {text}
        </p>

    </div>)

} 

export const Introduction = () => {
    return <div id="overview-section" className="overview-section">

        <p className="header">Overview</p>

        <p>{data.overview.text}</p>

    </div>
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