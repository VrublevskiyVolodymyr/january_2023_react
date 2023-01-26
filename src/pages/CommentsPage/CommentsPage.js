import React from 'react';
import {Outlet} from "react-router-dom";

import css from './CommentsPage.module.css'
import {Comments} from "../../components";




const CommentsPage = () => {

    return (
        <div >

            <h1>Comments</h1>

            <div className={css.CommentsPage}>

                <Comments/>
                <Outlet/>

            </div>
        </div>
    );
};

export {CommentsPage};
