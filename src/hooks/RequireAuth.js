//створюєм ще один hoc(елемент вищого порядку) RequireAuth (обовязкова авторизація), що заборонити перехід на comments без авторизації;
//реалізуєм: коли будем йти на comments нас буде відправляти на логінацію, але коли залогінимся то будем попадати туди куди треба
//для того щоб зберегти адресу киди ми хотіли піти, ця адреса зберігається в useLocation (обєкт в якому є path на який ми йшли)
import React from 'react';
import {Navigate, useLocation} from "react-router-dom";
import {useAuthContext} from "./UseAuthContext";


const RequireAuth = ({children}) => {                         //вішаєм цей компонент на Route comments.Тепер коли йдем на comments попадаєм на RequireAuth
    const location=useLocation();
    console.log(location)                                     //  отримуєм обєкт зі свого useLocation() - {pathname: '/comments', search: '', hash: '', state: null, key: 'fibanapl'}
                                                              //де є pathname: '/comments' туу міститься інформація куди ми йщли; Тепер куди б ми не йшли в RequireAuth ми будем мати назву Route
    const {user}=useAuthContext();                            //викликаєм наш хук useAuthContext() і з нього забираєм userб він або null або чимось засетаний

    if(!user){                                                //перевіряєм чи є user, якщо нема (null, undefine) то йдем на сторінку логінації, якщо є то повертаєм children
        return <Navigate to={'/login'} state={location}/>    //при переході на сторінку логінації, щоб знати куди ми йшли передаєм в Navigate state={location}
                                                             //щоб потім можна було повернутись назад;
                                                             //Navigate це по суті Link або NavLink на який не треба тикати він сам запускається.
    }
    return children
};

export {RequireAuth};
