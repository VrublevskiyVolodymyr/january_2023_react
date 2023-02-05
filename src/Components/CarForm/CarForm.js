import React from 'react';

import {useForm} from "react-hook-form";
import {useAppReducer} from "../../hooks";
import {carActions} from "../../redusers";


const CarForm = () => {

    const {register, reset, handleSubmit} = useForm();

    const [, dispatch] = useAppReducer(value => value.carReducer)

    const save = (car) => {
        dispatch(carActions.ADD(car))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type={'text'} placeholder={'model'} {...register('model')}/>
            <input type={'text'} placeholder={'price'} {...register('price')}/>
            <input type={'text'} placeholder={'age'} {...register('age', {valueAsNumber: true})}/>
            <button>save</button>
        </form>
    );
};

export {CarForm};
