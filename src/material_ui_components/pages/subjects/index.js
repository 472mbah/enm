
import '../../styling/allPages/index.css';
import data from './content.json';
import { CombineTest } from '../../components/homepage'
import { useEffect, useState } from 'react';


import { Subject_Gallery } from '../common_functions/subjects_options';

import { PageHeader } from '../../main_content/pageHeader';
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

            {/* <div id="page-index-container-main"> */}
                <PageIndex/>
            {/* </div> */}


            <PageHeader url={data[subject].header.url} subject={subject}/>
            <hr/>
            <Introduction subject={subject}/>
            <hr/>
            <Structure subject={subject}/>
            <hr/>
            <TutorsCollection tutors={data[subject].tutors}/>
            <hr/>
            <Benefits subject={subject}/>
            <hr/>
            <Enquire subject={subject}/>
            <hr/>
            <CombineTest no_border={true}/>
        </div>)
} 

export const SubjectsIntro = () => {

    return(
        <div className="page-main">

            <Subject_Gallery data={data} section_name="subjects"/>
            
        </div>
    )
}

export const Structure = ({subject}) => {


    return (
        <div id="structure-section" className="content-container-subjects">
            <p className="header">Structure</p>

            <div className="tutors-collection">
                {
                    data[subject].structure.content.map(item=>

                            <Qualif details={item}/>
                        
                        )
                }
            </div>


        </div>
    )

}

export const Benefits = ({subject}) => {

    return (
        <div id="benefits-section" className="content-container-subjects">
            <p className="header">Benefits</p>

            <ul>
                {
                    data[subject].benefits.map(({text}, i)=>
                            <li key={i}>{text}</li>
                        )
                }
            </ul>

        </div>
    )

}

export const TutorsCollection = ({tutors}) => {



    return (
        <div id="tutors-section" className="content-container-subjects">
            <p className="header">Tutors</p>
        
            <div className="tutors-collection">
                {tutors.map(item=><Tutors details={item}/>)}
            </div>

        </div>
    )

}

export const Tutors = ({details}) => {

    const { primary, subjects, profile, name } = details;


    return (<div className="details-box">
        
        <div className="personal-box">

            <div className="user-image"></div>
            <p className="main-text">{name}</p>

        </div>


        <div>
            <p className="sub-beta-header">Primary Qualifications</p>
            <p className="main-text">{primary}</p>
        </div>
        <div>
            <p className="sub-beta-header">Subjects</p>
            <p className="main-text">{subjects}</p>
        </div>
        <div>
            <p className="sub-beta-header">Profile</p>
            <p className="main-text">{profile}</p>
        </div>        

        <button className="inner_button">More</button>

    </div>)

} 

export const Option = ({details}) => {

    const { name } = details;

    return (<div className="option-box">
        
        <h2>{name}</h2>

    </div>)

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
            <button onClick={()=>onClick("structure-section")}>Structure</button>
            <button onClick={()=>onClick("tutors-section")}>Tutors</button>
            <button onClick={()=>onClick("benefits-section")}>Benefits</button>
            <button onClick={()=>onClick("enquiry-section")}>Enquiries</button>
            <button onClick={()=>onClick("testimonial-section")}>Testimonials</button>
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