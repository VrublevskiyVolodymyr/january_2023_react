import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useDispatch, useSelector} from "react-redux";

import {carActions} from "../../redux";
import {carValidator} from "../../validators";


const CarsForm = () => {

    const {register, handleSubmit, reset, setValue, formState: {isValid}} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    })
    const dispatch = useDispatch();
    let {carForUpdate} = useSelector(state => state.cars);
    console.log(carForUpdate)

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate])

    const save = async (car) => {
        await dispatch(carActions.create({car}))
        reset()

    }

    const update = async (car) => {
        await dispatch(carActions.updateById({id: carForUpdate.id, car}))
        await dispatch(carActions.setCarForUpdate(null))
        reset()

    }

    return (
        <form onSubmit={handleSubmit(carForUpdate? update : save)}>
            <input type={"text"} placeholder={'brand'} {...register('brand')}/>
            <input type={"text"} placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
            <input type={"text"} placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
            <button disabled={!isValid}>{carForUpdate ? 'update' : 'create'}</button>
        </form>
    );
};

export {CarsForm};
