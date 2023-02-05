import React from 'react';

import {Pets, PetsForm} from "../../components";
import css from './PetsPage.module.css'

const PetsPage = () => {
    return (
        <div className={css.petsPage}>
            <h1>Pets</h1>
            <PetsForm/>
            <hr/>
            <Pets/>
        </div>
    );
};

export {PetsPage};
