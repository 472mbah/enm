import { HomeworkGroup } from './homework';
import homeworks from './homework.json';


export const HomeworkMain = () => {

    


    return (
        <div>
            <h1 style={{fontSize:"50px"}}>Homeworks set for you</h1>
            {
                Object.keys(homeworks).map(key=><HomeworkGroup key={key} data={Object.assign({group:homeworks[key]}, {name:key})} />)
            }
        </div>
    )
}