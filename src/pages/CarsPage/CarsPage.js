import React from 'react';
import {useSelector} from "react-redux";

import {CarsForm, Cars} from "../../components"
import css from './carsPage.module.css'

const CarsPage = () => {
    const {loading} = useSelector(state => state.cars)

    return (
        <div className={css.cars}>
            <h1>Cars</h1>
            <CarsForm/>
            <hr/>
            {loading && <h1>Loading......................................</h1>}
            <Cars/>
        </div>
    );
};

export {CarsPage};
