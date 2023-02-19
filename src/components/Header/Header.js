import React, {useEffect, useRef} from 'react';

import {NavLink, useNavigate} from "react-router-dom";

import css from './header.module.css'
import {useDispatch} from "react-redux";
import {movieActions} from "../../redux";

const Header = () => {
const search=useRef()
    const navigate = useNavigate();
    const dispatch = useDispatch();
// const title=search.current.value


    // useEffect(() => {
    //     dispatch(movieActions.searchMovie({title:search.current.value}))
    // }, [dispatch])

    const searchClick=()=>{
        dispatch(movieActions.searchMovie({title:search.current.value}))
        navigate('/search_movie')
    }
    return (
        <div className={css.header}>
            <NavLink to={'movies'}>movies</NavLink>

            <div>
                <input type={"text"} placeholder={'input movie'} ref={search}></input>
                <button  onClick={() => searchClick()}>search</button>
            </div>

        </div>
    );
};

export {Header};
