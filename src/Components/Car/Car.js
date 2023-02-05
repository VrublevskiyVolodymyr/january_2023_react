import React from 'react';

import {carActions} from "../../redusers";
import {useAppReducer} from "../../hooks";
import css from './car.module.css'

const Car = ({car}) => {

    const {id,model,price,age}=car;

    const [,dispatch]=useAppReducer(reducers=>reducers.carReducer)

    return (
        <div className={css.car}>
            <div>id:{id}</div>
            <div>model:{model}</div>
            <div>price:{price}</div>
            <div>age:{age}</div>
            <button onClick={()=>dispatch(carActions.DELETE_BY_ID(id))}>delete</button>
        </div>
    );
};

export {Car};
