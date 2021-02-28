import '../styling/allPages/index.css';

export const PageHeader = ({ subject, url }) => {
    

    
    return (<div className="page-header">

        <img className="subject-image" src={url}/>
        <div id="black-grey-out">
            <p>/subjects/<b>{subject}</b></p> 
        </div>
    </div>)
}