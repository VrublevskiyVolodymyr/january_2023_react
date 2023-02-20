import React, { useState } from 'react';
import css from './menu.module.css'
import {movieActions} from "../../redux";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

const DropMenu = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    const searchClick = (id)=> {
        dispatch(movieActions.setIdGenre({id}))
        navigate('/search_movie_by_genre?page=1')
    }

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <h4 className={css.genre}>Movies by genre</h4>
            {isOpen && (
                <ul className={css.menu}>
                    <li onClick={()=>searchClick(28)}>Action</li>
                    <li onClick={()=>searchClick(12)}>Adventure</li>
                    <li onClick={()=>searchClick(16)}>Animation</li>
                    <li onClick={()=>searchClick(35)}>Comedy</li>
                    <li onClick={()=>searchClick(80)}>Crime</li>
                    <li onClick={()=>searchClick(99)}>Documentary</li>
                    <li onClick={()=>searchClick(18)}>Drama</li>
                    <li onClick={()=>searchClick(10751)}>Family</li>
                    <li onClick={()=>searchClick(14)}>Fantasy</li>
                    <li onClick={()=>searchClick(36)}>History</li>
                    <li onClick={()=>searchClick(27)}>Horror</li>
                    <li onClick={()=>searchClick(10402)}>Music</li>
                    <li onClick={()=>searchClick(9648)}>Mystery</li>
                    <li onClick={()=>searchClick(10749)}>Romance</li>
                    <li onClick={()=>searchClick(878)}>Science Fiction</li>
                    <li onClick={()=>searchClick(10770)}>TV Movie</li>
                    <li onClick={()=>searchClick(53)}>Thriller</li>
                    <li onClick={()=>searchClick(10752)}>War</li>
                    <li onClick={()=>searchClick(37)}>Western</li>

                </ul>
            )}
        </div>
    );
};


export {DropMenu}


