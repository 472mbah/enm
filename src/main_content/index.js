import '../styling/main.css';
import { useDispatch, useStore } from 'react-redux';
import { Maths, Introduction } from '../pages/subjects';
import { BrowserRouter as Router, useLocation, Route, Link, useHistory  } from "react-router-dom";

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


    return (<form id="registration-frame">
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

export const Registration = () => {

    const dispatch = useDispatch();


    return (<form id="registration-frame">
        <div className="container">
            <h1>Sign Up</h1>
            <div id="container-first">
                <button type="button" className="small_button" id="access_button">Login instead</button>
                <button onClick={()=>dispatch({type:"TOGGLE_COVER"})} type="button" className="small_button" id="cancel_button">Cancel</button>
            </div>
            <p id="introduction-text">Want to sign up, fill out this form!</p>            
        </div>
        <div className="container">


                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" id="email" required/>

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" id="psw" required/>

                <label for="psw-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>
                <hr/>
                <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

                <button type="submit" id="register_button">Register</button>
                {/* <button onClick={()=>dispatch({type:"TOGGLE_COVER"})} id="cancel_button">Cancel</button> */}
                <div id="progress-container">
                    <div style={{background:"rgba(255,145,0, 0.2)"}}></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
    
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