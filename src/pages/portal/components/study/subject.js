import '../../../../styling/portal/study.css';

export const Subject = (props) => {

    const { name, coverImage, description, link, key }  = props.data;  
    // const { key } = props;

    const generateRandomRGBA = () => Math.floor(Math.random() * 255);
    

    const colour = `rgba(${generateRandomRGBA()}, ${generateRandomRGBA()}, ${generateRandomRGBA()}, 0.2)`


    return (
        <div onClick={()=>props.setCurrentSection({ view:1, subject:"maths" })} className="subject-container">
            <img src={coverImage}/>
            <div className="subject-container-inner" style={{background:colour}}>
                <h1>{name}</h1>
                <p className="truncated_paragraph">{description}</p>
                {/* <div className="button-containers">
                    <button onClick={()=>props.setCurrentSection({ view:1, subject:key })}>View Content</button>
                    <button onClick={()=>props.setCurrentSection({ view:2, subject:key })}>Practice</button>
                    <button onClick={()=>props.setCurrentSection({ view:3, subject:key })}>Exam Papers</button>
                    <button onClick={()=>props.setCurrentSection({ view:4, subject:key })}>Lessons</button>
                </div> */}
            </div>

        </div>
    )
}