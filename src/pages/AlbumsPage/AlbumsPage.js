import React from 'react';
import {Outlet} from "react-router-dom";

import {Albums} from "../../components";

const AlbumsPage = () => {
    return (
        <div>
            <h1>Albums</h1>
             <Albums/>
            < Outlet/>
        </div>
    );
};

export {AlbumsPage};
