import {useState} from "react";

import './components/User/styleUser.css'
import {Launches, Posts, Users} from "./components";

const App = () => {

    const [userId,setUserId]=useState (null);

    return (

        <div>
            {/*з jsonplaceholder отримати всіх юзерів в компоненту Users.js*/}
            {/*відобразити кожного інформацію (id,name) з кожного юзера (компонента User)*/}
            {/*Зробити кнопку вибора юзера, при натисканні на яку в Users.js ви покажете  пости цього юзера*/}
            {/*пости мають виводитись під компонетою Users (в App компоненті)*/}

            <div className={'users'}>

                   <div className={'infoBlock'}>
                         <Users setUserId={setUserId}/>
                   </div>

                   <div className={'divider'}>
                         <div/>
                   </div>

                   <div className={'infoBlock'}>
                         {userId && <Posts userId={userId}/>}
                   </div>
            </div>

            {/*=====*/}
            {/*є API от SpaceX*/}
            {/*https://api.spacexdata.com/v3/launches/*/}
            {/*потрібно вивести всі запуски кораблів окрім 2020 року*/}
            {/*репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)*/}

           <Launches/>

        </div>
    );
};

export {App};

