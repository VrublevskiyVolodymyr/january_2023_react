import React from 'react';
import {useDispatch} from "react-redux";

import {carActions} from "../../redux";
import css from './car.module.css'

const Car = ({car}) => {
    const {id, brand, price, year} = car;
    const dispatch = useDispatch()

    return (
        <div className={css.car}>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => dispatch(carActions.setCarForUpdate(car))}>update</button>
            <button onClick={() => dispatch(carActions.deleteById({id}))}>delete</button>
        </div>
    );
};

export {Car};
