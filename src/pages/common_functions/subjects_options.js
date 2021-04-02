import MediaCard from '../../material_ui_components/MediaCard';
import math_b from '../../styling/backgrounds/math_b.jpg';
import english_b from '../../styling/backgrounds/english_b.jpg';
import science_b from '../../styling/backgrounds/science_b.jpg';
import languages_b from '../../styling/backgrounds/languages_b.jpg';
import geogrpahy_b from '../../styling/backgrounds/geography_b.jpg';
import psychology_b from '../../styling/backgrounds/psychology_b.jpg';

export const Subject_Gallery = ({ section_name, data }) => {

    const subs = []

    const toUpper =  (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1, txt.length).toLowerCase();
    }

    const selectBackground = (key) => {
        switch(key) {
            case "maths": return math_b;
            case "english": return english_b;
            case "science": return science_b;
            case "languages": return languages_b;
            case "humanities": return geogrpahy_b;
            case "psychology": return psychology_b;
            default: return math_b;
        }
    }

    Object.keys(data).forEach((key, i)=>{
        // console.log(key)
        subs.push(<div key={i}  className="subject-container-index"><MediaCard type={section_name} key_={key} 
        data={{img:selectBackground(key), title:toUpper(key), description:"Waiting for description"}} 
        text="Get details" /></div>)
    })

    return(
        <div className="page-main-subjects-list-main-container">
            <h1>{toUpper(section_name)}</h1>
            <div className="page-main-subjects-list-container">
                {subs}
            </div>
        </div>              
    )
}