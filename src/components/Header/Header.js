import {NavLink} from "react-router-dom";

import css from './Header.module.css';
import {useAuthContext} from "../../hooks";

const Header = () => {
    const {user,logOut} = useAuthContext(); //викликаєм хук і забираєм нашого user і ф-ію logOut для видалення user
    return (
        <div className={css.Header}>
            <NavLink to={"home"}>home</NavLink>
            <NavLink to={"todos"}>todos</NavLink>
            <NavLink to={"albums"}>albums</NavLink>
            <NavLink to={"comments"}>comments</NavLink>
            <NavLink to={"users"}>users</NavLink>
            <NavLink to={"about"}>about</NavLink>
            {user &&                                    //якщо є user виводим в Header і добавляєм кнопку для видалення
                <div>
                    {user} <button onClick={()=>logOut()} >LogOut</button>
                </div>}
        </div>
    );
};

export {Header};
