import React from 'react';

import {CatsAndDogsReduser} from "../../components";
import css from './dogCatsPage.module.css'

const DogsAndCatsPage = () => {
    return (
        <div className={css.dogsCats}>
            <h1>Dogs and Cats Page</h1>
            <CatsAndDogsReduser/>
        </div>
    );
};

export {DogsAndCatsPage};
