import React, {createContext, useReducer} from 'react';

import {initialCars, initialUsers, usReducer, caReducer, peReducer, initialPets} from "../redusers";


const StateContext = createContext(null);

const StateProvider = ({children}) => {
    //містяться всі Reducer // для ключа useReducer викликаєм хук useReducer; хук можна викликати тільки при створенні іншого хука
    const reducers={
        userReducer:useReducer(usReducer, null, initialUsers),
        carReducer:useReducer(caReducer, null, initialCars),
        petsReducer:useReducer(peReducer, null, initialPets)
        }

    return (
     <StateContext.Provider value={reducers}>
         {children}
     </StateContext.Provider>
    );
};

export {StateProvider,StateContext};
