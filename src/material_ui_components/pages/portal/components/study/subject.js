import '../../../../styling/portal/study.css';

export const Subject = (props) => {

    const { name, coverImage, description, link }  = props.data;  

    return (
        <div className="subject-container">
            <img src={coverImage}/>
            <div>
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}