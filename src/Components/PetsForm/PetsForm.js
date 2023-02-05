import React from 'react';
import {useForm} from "react-hook-form";

import { petsActions} from "../../redusers";
import css from './petsForm.module.css'
import {useAppReducer} from "../../hooks";


const PetsForm = () => {

    const {register, reset, handleSubmit} = useForm();

    const [,dispatch] = useAppReducer(value => value.petsReducer)

    const saveDog = (dog) => {
        dispatch(petsActions.ADD_DOG(dog))
        reset()
    }
    const saveCat = (cat) => {
        dispatch(petsActions.ADD_CAT(cat))
        reset()
    }

    return (

        <div className={css.petsForm}>
            <div>
               <h2>Dog</h2>
                <form onSubmit={handleSubmit(saveDog)}>
                    <input type={'text'} placeholder={'nameDog'} {...register('nameDog')}/>
                    <button>save</button>
                </form>
            </div>

            <div>
                <h2>Cat</h2>
                <form onSubmit={handleSubmit(saveCat)}>
                    <input type={'text'} placeholder={'nameCat'} {...register('nameCat')}/>
                    <button>save</button>
                </form>
            </div>

        </div>
    );
};

export {PetsForm};
