import {Launches, Users} from "./Components";
import './Components/Launch/styleLaunch.css'

const App = () => {
    return (
        <div>
            {/*з jsonplaceholder отримати всіх юзерів в компоненту Users.js*/}
            {/*відобразити кожного інформацію (id,name) з кожного юзера (компонента User)*/}
            {/*Зробити кнопку вибора юзера, при натисканні на яку в Users.js ви покажете  пости цього юзера*/}
            {/*пости мають виводитись під компонетою Users (в App компоненті)*/}
            <Users/>


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

