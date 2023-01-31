//Реалізуєм приватний Route, щоб при переході на comments треба було залогінитись (реалізовуєм псевдологінацію)
//  інакше туди не потрапим;


import {createContext, useState} from "react";
import React from 'react';

const AuthContext = createContext(null);

const AuthProvider = ({children}) => {                    //створюєм компоненту AuthProvider яка приймає children і повертає їх обгорнутих в AuthContext.
    const [user, setUser] = useState(null);      //відповідає за те чи є залогінений user чи його немає
    console.log('user:', user)
    const logIn = (loginUser) => {                       //ф-ія прийає залогіненого user i сетає в seState
        setUser(loginUser)}

    const logOut = () => {                               // ф-ія яка вилогінює user
        setUser(null)}

    const value={user,logIn,logOut}
                                                        //викликаєм AuthConrext і в якості value кладем на обєкт value
                                                       //і кладем всередину AuthConrext наших children. По суті все що огортає AuthProvider буде огорнуто в AuthConrext;
     return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export {AuthProvider, AuthContext};
