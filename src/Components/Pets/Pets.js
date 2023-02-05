import React from 'react';

import {useAppReducer} from "../../hooks";
import {Pet} from "../Pet/Pet";
import css from './pets.module.css'

const Pets = () => {
   const [pets]=useAppReducer(value=>value.petsReducer)

    return (
        <div className={css.pets}>

            <div className={css.dogs}>
                {pets.dogs && pets.dogs.map(dog => <Pet key={dog.id} dog={dog}/>)}
            </div>

            <div className={css.cats}>
                {pets.cats && pets.cats.map(cat => <Pet key={cat.id} cat={cat}/>)}
            </div>

        </div>
    );
};

export {Pets};
