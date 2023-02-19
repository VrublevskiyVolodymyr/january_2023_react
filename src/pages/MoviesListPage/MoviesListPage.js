import React from 'react';
import {Outlet} from "react-router-dom";

import {Movies} from '../../components'

const MoviesListPage = () => {
    return (
        <div>
               <Movies/>
            <Outlet/>
        </div>
    );
};

export {MoviesListPage};
