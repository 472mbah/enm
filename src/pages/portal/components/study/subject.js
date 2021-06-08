import '../../../../styling/portal/study.css';

export const Subject = (props) => {

    const { name, coverImage, description, link }  = props.data;  

    const generateRandomRGBA = () => Math.floor(Math.random() * 255);
    

    const colour = `rgba(${generateRandomRGBA()}, ${generateRandomRGBA()}, ${generateRandomRGBA()}, 0.2)`


    return (
        <div className="subject-container">
            <img src={coverImage}/>
            <div style={{background:colour}}>
                <h1>{name}</h1>
                <p className="truncated_paragraph">{description}</p>
                <button>View content</button>
            </div>

        </div>
    )
}