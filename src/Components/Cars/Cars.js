import React from 'react';

import {Car} from "../Car/Car";
import {useAppReducer} from "../../hooks";

const Cars = () => {

    const[cars]=useAppReducer(reducers=>reducers.carReducer)

    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};
