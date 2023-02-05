import React from 'react';

import {useAppReducer} from "../../hooks";
import {petsActions} from "../../redusers";
import css from './pet.module.css'

const Pet = ({dog, cat}) => {

    const [, dispatch] = useAppReducer(value => value.petsReducer)

    if (dog) {
        return (
            <div className={css.dog}>
                <div>id:{dog.id}</div>
                <div>name:{dog.name}</div>
                <button onClick={() => dispatch(petsActions.DELETE_DOG_BY_ID(dog.id))}>delete</button>
            </div>
        );
    } else {
        return (
            <div className={css.cat}>
                <div>id:{cat.id}</div>
                <div>name:{cat.name}</div>
                <button onClick={() => dispatch(petsActions.DELETE_CAT_BY_ID(cat.id))}>delete</button>
            </div>
        );
    }
}
export {Pet};
