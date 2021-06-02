import './circle.css'

export default (props) => {



    const { main_circumference, mini_circumference, border_width, colour } = props.configuration;
    const margin = (main_circumference-mini_circumference)/2;

    const style = { 
        boxSizing: "border-box",
        display: "block",
        position: "absolute",
        width: `${mini_circumference}px`,
        height: `${mini_circumference}px`,
        margin: `${margin}px`,
        border: `${border_width}px solid ${colour}`,
        borderRadius: "50%",
        animation: "lds-grid-circle 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite",
        borderColor: "#fff transparent transparent transparent",
    }
        
    return (
<div class="lds-grid-circle" style={{height:`${main_circumference}px`, width:`${main_circumference}px`}}>
    
    <div style={style} ></div>
    <div style={style} ></div>
    <div style={style} ></div>
    <div style={style} ></div>

    {/* <div ></div>
    <div ></div>
    <div ></div>
    <div ></div> */}


    </div>
        
    )
}