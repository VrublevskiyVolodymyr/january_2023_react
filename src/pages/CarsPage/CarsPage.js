import React from 'react';

import {CarForm, Cars} from "../../components";
import css from './carsPage.module.css'

const CarsPage = () => {
    return (
        <div className={css.carsPage}>
            <h1>Cars</h1>
            <CarForm/>
            <hr/>
            <Cars/>
        </div>
    );
};

export {CarsPage};
