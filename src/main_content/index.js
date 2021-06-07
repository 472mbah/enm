import '../styling/main.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Maths, Introduction } from '../pages/subjects';
import { BrowserRouter as Router, useLocation, Route, Link, useHistory  } from "react-router-dom";
import Circles from '../components/loading/circles';
import cancelIcon from '../styling/icons/cancel.png';
import authentication from '../functions/authentication';





export const BigCover = (props) => {

    const history = useHistory();

    const user = useSelector(state => state.user);
    const error = useSelector(state => state.rootReducer.big_cover_error_type);
    const role = useSelector(state => state.rootReducer.big_cover_role);
    
    const passwords_not_same = "Passwords not the same"
    const passwords_length = "Password length needs to be atleast 8 characters long"
    const loading_message = "Authorising details"
    const error_style = { background:"#E81212", color:"#fff", padding: '0.5em 1em' }
    const main_style = { backgroundColor:"#eee", width:"100%" }
    const success_style = { background:"#43C515", color:"#fff", padding: '1em 1em', boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.5)' }
    const loading_style = { background:"#E89F12", color:"#fff", padding: '1em 1em', boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.5)' }

    const error_style_main = { background:"#F6CDCD" }
    const main_style_main = { backgroundColor:"#FFF" }
    const success_style_main = { background:"#CBF8B6" }
    const loading_style_main = { background:"#ECE2D0" }
    
    const loading_circle_style = {main_circumference:"45", mini_circumference:"25", border_width:"2", colour:"#fff"}

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const [thereIsError, setThereIsError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")
    const [messageStyle, setMessageStyle] = useState(main_style)
    const [backgroundStyle, setBackgroundStyle] = useState(main_style_main)
    


    // stage 1 is loginning user in
    const [stage, setStage] = useState(0);

    const manageSubmit = async () => {

        if (password.length < 8) {
            setThereIsError(true);
            setMessageStyle(error_style);
            setMessage(passwords_length);
            setBackgroundStyle(error_style_main);
            return;
        } 

        if (stage!=1 && password!=repeatPassword) {
            setThereIsError(true);
            setMessageStyle(error_style);
            setMessage(passwords_not_same);
            setBackgroundStyle(error_style_main);
            return;
        }

        setLoading(true)
        setMessageStyle(loading_style);
        setMessage(loading_message);
        setBackgroundStyle(loading_style_main);

        let { success, message, user } = await authentication(email, password, stage!=1 ? Date.now() : -1)
        console.log(success, message, user)
        setThereIsError(!success);
        setMessageStyle(success ? success_style : error_style);
        setMessage(message);
        setBackgroundStyle(success ? success_style_main : error_style_main);
        if (!success) setLoading(false)

        if(success) {
            history.push("/portal/students");
            
            dispatch({ type:"TOGGLE_COVER", to:1 })
            dispatch({ type:"SET_USER", user })    
            
            setStage(2)
            setLoading(false)
            setMessageStyle(main_style);
            setMessage("");
            setBackgroundStyle(main_style_main);

        }

    }

    const resetState = () => {
        if (!thereIsError) return;
        setMessageStyle(main_style);
        setMessage("");
        setBackgroundStyle(main_style_main);        
    }

    const authForm = () => {
        return (
            <div className="container">

                    <label for="email">Email</label>
                    <input disabled={loading} onChange={e=>{setEmail(e.target.value); resetState()}} type="text" placeholder="Enter Email" name="email" id="email" required/>

                    <label for="psw">Password</label>
                    <input disabled={loading} onChange={e=>{setPassword(e.target.value); resetState()}} type="password" placeholder="Enter Password" name="psw" id="psw" required/>

                    {
                        stage!=1 ? <label  for="psw-repeat">Repeat Password</label> : null
                    }                    
                    {
                        stage!=1 ? <input  disabled={loading} onChange={e=>{setRepeatPassword(e.target.value); resetState()}} type="password" placeholder="Repeat Password" required/> : null
                    }



            </div>        
        )                
    }

    const dispatch = useDispatch();

    const interpretTitle = () => {
        switch(stage){
            case 1: return "Login";
            case 2: return `Hello ${user.first_name}`;
            default: return "Sign Up";
        }
    } 

    const manageDetails = () => {
        
    }

    return (<form onSubmit={e => { manageSubmit(); e.preventDefault(); }} style={backgroundStyle} className="registration-frame">
        <div className="container" id="header-container">
            <h1>{interpretTitle()}</h1>
            <button style={{display:stage==2?"none":""}} onClick={()=>{setStage(stage==1?0:1); resetState()}} disabled={loading} type="button" id="instead_button">{stage==1?"Sign Up":"Login"} Instead</button>
            <img onClick={()=>dispatch({type:"TOGGLE_COVER"})} src={cancelIcon} className="form-icon" />
        </div>
        <div  id="message-container" style={Object.assign(messageStyle, {})}>
            {
                loading ? <Circles configuration={loading_circle_style}/> : null
            }
            <p style={{fontFamily:'sfb'}}>{message}</p>
        </div>

        { stage==2? null : authForm() }

        <div style={{display:stage==2?"none":""}} className="container">
            <p >By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
            <button disabled={loading} type="submit" id="register_button">{stage==1?"Login":"Sign Up"}</button>
        </div>

    </form>)
}
