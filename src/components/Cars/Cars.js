import React from 'react';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {carActions} from "../../redux";
import {Car} from "../Car/Car";
import css from './cars.module.css'
import {useSearchParams} from "react-router-dom";


const Cars = () => {
    const {cars, prev, next} = useSelector(state => state.cars);
    const dispatch = useDispatch();
    const[query, setQuery]= useSearchParams({page:'1'});

    useEffect(() => {
        dispatch(carActions.getAll({page:query.get('page')}))
    }, [dispatch, query])

    return (
        <div className={css.cars}>
            <div>
                <button disabled={!prev} onClick={()=>setQuery(query=>({page:+query.get('page')-1}))}>prev</button>
                <button disabled={!next} onClick={()=>setQuery(query=>({page:+query.get('page')+1}))}>next</button>
            </div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};
export {Cars};

