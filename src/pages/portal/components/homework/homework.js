import { useState } from "react";
import "../../../../styling/portal/homework.css"

export const Homework = (prop) => {
    const { title, description, setDate, dueDate, setBy, subject, completed } = prop.data;

    const [completed_, setCompleted] = useState(completed)

    return (
        <div className="individual-homework-container">
            {/* <p>{subject}</p> */}
            <h2>{title}</h2>
            <p className="truncated_paragraph-two">{description}</p>
            <div className="apart-div"><p>Set on:</p> <p className="box-span">{setDate}</p></div>
            <div className="apart-div"><p>Due on:</p> <p className="box-span">{dueDate}</p></div>
            <div className="apart-div"><p>Set By:</p> <p className="box-span">{setBy}</p></div>
            <div className="completed-section">
                <p>Completed:</p>
                <div>
                    <button onClick={()=>setCompleted(true)} style={{background:completed_?"#dbeee0":"#f3f3f3"}} id="yes" className="completed-button">Yes</button>               
                    <button onClick={()=>setCompleted(false)} style={{background:!completed_?"#efc5b5":"#f3f3f3"}} id="no" className="completed-button">No</button>               
                </div>
            </div>
        </div>
    )

}

export const HomeworkGroup = (prop) => {
    const { group, name } = prop.data;
    const indivStyle = {
        display:"inline-block",
        marginRight: "4em",
        marginBottom: "2em"
    }


    let homeworkGroup = group.map((element, i) => <div key={i} style={indivStyle}>
        <Homework data={element}/>
    </div>);

    const capitalise = name => {
        let parts = name.split("")
        parts[0] = parts[0].toUpperCase();
        return parts.join("");
    }

    return (
        <div className="homework-group-container">
            <h1 >{capitalise(name)}</h1>
            <div class="horizontal_dotted_line"></div>
            <div>{homeworkGroup}</div>
        </div>
    )
}