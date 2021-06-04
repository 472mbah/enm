import '../styling/main.css';
import { useDispatch, useStore } from 'react-redux';
import { useState } from 'react';
import { Maths, Introduction } from '../pages/subjects';
import { BrowserRouter as Router, useLocation, Route, Link, useHistory  } from "react-router-dom";
import Circles from '../components/loading/circles';
import cancelIcon from '../styling/icons/cancel.png';
import authentication from '../functions/authentication';

export const Main = () => {
    const location = useLocation();


    // const exp = location.pathname == '/' || location.pathname == '/home';
    const exp = false;

    return (
        <div style={{background:exp?"":"white"}} id="main-content"> 
            <div  id="main-content-inner">
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                {/* <Route exact path="/subjects/maths" component={Maths} /> */}

      {/* <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} /> */}
            </div>
        </div>
        )
}


export const Home = () => {
    const dispatch = useDispatch();

    return (
    <div id="m-c-i-container">

        <div id="m-c-i-container-inner">
            <p id="m-c-i-header">Smart and easy online Tutoring</p>
            <p id="m-c-i-text">You can study with us to help you better understand the world around you</p>
            <button onClick={()=>dispatch({type:"TOGGLE_COVER"})}>Start now</button>
        </div>

        <Introduction/>
        <LatestNews/>
        <ReviewsContainer/>

    </div>

    )    
}

export const Query = () => {

    const dispatch = useDispatch();


    return (<form className="registration-frame">
        <div className="container">
            <h1>Queries</h1>
            <div id="container-first">
                <button onClick={()=>dispatch({type:"TOGGLE_COVER", to:0})} type="button" className="small_button" id="access_button">Register</button>
                <button onClick={()=>dispatch({type:"TOGGLE_COVER"})} type="button" className="small_button" id="cancel_button">Cancel</button>
            </div>
            <p id="introduction-text">Want to get in touch, send us a quick message</p>            
        </div>
        <div className="container">


                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email (optional)" name="email" id="email" required/>

                <label for="psw"><b>Telephone</b></label>
                <input type="password" placeholder="Enter Phone number (optional)" name="psw" id="psw" required/>

                <label for="psw-repeat"><b>Repeat </b></label>
                <textarea type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>
                <hr/>

                <button type="submit" id="register_button">Send Query</button>

    
        </div>


    </form>)
}

export const Registration = (props) => {

    const history = useHistory();

    const passwords_not_same = "Passwords not the same"
    const passwords_length = "Password length needs to be atleast 8 characters long"
    const loading_message = "Authorising details"
    const error_style = { background:"#E81212", color:"#fff", padding: '0.5em 1em' }
    const main_style = { backgroundColor:"#eee", width:'100%' }
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
            dispatch({ type:"TOGGLE_COVER", to:1 })
            history.push("/portal")
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


    return (<form onSubmit={e => { manageSubmit(); e.preventDefault(); }} style={backgroundStyle} className="registration-frame">
        <div className="container" id="header-container">
            <h1>{stage==1?"Login":"Sign Up"}</h1>
            <button onClick={()=>{setStage(stage==1?0:1); resetState()}} disabled={loading} type="button" id="instead_button">{stage==1?"Sign Up":"Login"} Instead</button>
            <img onClick={()=>dispatch({type:"TOGGLE_COVER"})} src={cancelIcon} className="form-icon" />
        </div>

        <div  id="message-container" style={Object.assign(messageStyle, {})}>
            {
                loading ? <Circles configuration={loading_circle_style}/> : null
            }
            <p style={{fontFamily:'sfb'}}>{message}</p>
        </div>

        { authForm() }

        <div className="container">
            <p >By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
            <button disabled={loading} type="submit" id="register_button">{stage==1?"Login":"Sign Up"}</button>
        </div>

    </form>)
}

export const LatestNews = () => {

    const data1 = {
        title:"COVID-19 SCHOOL SHUTDOWN –  HOW GRADES WILL BE AWARDED THIS SUMMER", content:`Given the odd timing and an incomplete school year, Ofqual is directing schools to make grade and ranking judgements based on existing evidence. 
        That means schools are not required to set additional homework tasks to help determine grades. The regulator says no student should be at a disadvantage if they were unable to complete assignments with deadlines set after schools were closed.
        And where additional work has been submitted after schools were shut on 20. March, heads should note any indication of a change in student performance.
        Schools aren’t required to send supporting evidence directly to exam boards, but need to retain records in case of any queries about their data. 
        Students should not be asked to complete any non-exam assessment work, or submit any marks for non-exam assessment work.`
        , image:"https://www.fleet-tutors.co.uk/wp-content/uploads/2019/12/course-4.jpg"
    }
    
    const data2 = {
        title:"EASTER REVISION – START EARLY, FINISH STRONG", content:`In a few short weeks the Easter holidays will be upon us and that might signal the start of your GCSE & A Level exam revision period. But why wait until the holidays to begin revising? Why not make the most of the time you have available now and start your revision sooner rather than later? 
        No one ever said, ‘I wish I’d studied for less time’, most complaints are that there isn’t enough time to go over everything you need to cover. 
        By starting your exam revision now, you have time to create a well thought out and comprehensive revision timetable, and get cracking on those subjects you need extra time to study for. `
        , image:"https://www.fleet-tutors.co.uk/wp-content/uploads/2020/02/woman-leaning-on-table-3767411-640x427.jpg"
    }

    const data3 = {
        title:"HOW TO STAY MOTIVATED TO STUDY FOR MOCK EXAMS AS THE NIGHTS DRAW IN", content:`All schools are different in their approach to mock exams, some have mocks before they break up for the Christmas holiday, while others do theirs in January following the break.
        At this stage, it doesn’t matter which approach is best, what matters is that mocks are incredibly important and therefore preparation for them is essential if you hope to do well. The main events are, and always will be, the summer exams, so much rides on doing well in these. But how do you know where you need to focus more attention if you don’t sit your mocks? And if you don’t put your all into studying for them, you will be doing yourself a disservice.`
        , image:"https://www.fleet-tutors.co.uk/wp-content/uploads/2020/01/study-motivation-mock-exams-e1574243014204-640x478.jpg"
    }

    const data = [data1, data2, data3]

    return (
        <div id="latest-news"> 
            <h2>Lates News</h2>  
            <div id="bullet-container">   
            {
                data.map(item=>
                        <NewsBullet data={item}/>
                    )
            } 
            </div>
        </div>
    )
}


export const NewsBullet = ({ data }) => {
    
    const { title, content, image } = data;

    return (
        <div className="news-container">
            <div className="news-container-first">
                <img src={image}/>
            </div>
            
            <div >
                <h3>{title}</h3>
                <p>{content}</p>
            </div>


        </div>
    )
}

export const ReviewsContainer = () => {

    const data1 = {
        name:"Person 1", content:`Dr Issa was a lovely tutor who had a calm, friendly manner. She worked conscientiously through the 11 + material. As a primary school teacher myself, I found it interesting to see the methods taught by the tutor differed from the way we teach in primary school. Many thanks to Dr Issa.`
        , date:"August 18, 2017"
    }
    
    const data2 = {
        name:"Person 2", content:`Sam was a fantastic tutor. He assessed our daughter before tutoring sessions began. Based on this he devised a teaching plan and informed us of the progress she should be expected to make. Sam’s manner is calm and reassuring. He is an extremely patient tutor who gives encouragement to his pupil through the session. He always arrived on time. I would recommend Sam to any parent.`
        , date:"August 18, 2017"
    }

    const data3 = {
        name:"Person 3", content:`After years of working with tutors, Ms. Deidre is the best we have met. She understands the balance between humour and insistence on effort. She knows the subject matter and pedagogy. She has been a marvel.`
        , date:"August 18, 2017"
    }

    const data4 = {
        name:"Person 4", content:`My daughter who is about to graduate with a BA in Graphic Design Communication was helped greatly with her dissertation in respect of the structure/argument/written expression. The tutor was able to give her very worthwhile guidance and was a marvellous help - C is very grateful.`
        , date:"July 28, 2016"
    }

    const data = [data1, data2, data3, data4]

    return (
        <div id="latest-news"> 
            <h2>Our testemonials</h2>  
            <div id="reviews-container">   
            {
                data.map(item=>
                        <Review data={item}/>
                    )
            } 
            </div>
        </div>
    )
}


export const Review = ({ data }) => {
    
    const { name, date, content } = data;

    return (
        <div className="review-container">
            
                <h3>{name}</h3>
                <h3>{date}</h3>
                <p>{content}</p>

        </div>
    )
}