import { Subject } from './subject';
import subjects from './subject.json';

export default () => {
    
    let subjectsComponent = 
    Object.keys(subjects).map(key=><Subject key={key} data={subjects[key]} />)
    
    return (
        <div>
            <p>Choose an option below to get started</p>
            {subjectsComponent}
            
        </div>
    )
}