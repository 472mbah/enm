import '../../../../styling/portal/study.css'
import { Subject } from './subject';
import subjects from './subject.json';

export default (props) => {
    
    let subjectsComponent = 
    Object.keys(subjects).map(key=><Subject setCurrentSection={props.setCurrentSection} key={key} data={Object.assign(subjects[key], {key})} />)
    const introduction = "The following are additional resources to help you with your tutoring. Here you can see the notes that the tutors have written to help you understand concepts as well as add your own notes for better consumption during the exam season. Click on a subject to explore."
    
    return (

        <div id="study-main-container">

            <h1 style={{fontSize:"50px"}}>Subjects to study</h1>
            <p>{introduction}</p>
            
            <div id="study-grid-container">
                {subjectsComponent}
                
            </div>
        </div>
    )
}