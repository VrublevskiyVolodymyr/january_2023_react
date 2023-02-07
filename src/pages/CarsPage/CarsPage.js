import React from 'react';

import {CarsForm,Cars} from "../../components"

const CarsPage = () => {
    return (
        <div>
            <CarsForm/>
            <hr/>
            <Cars/>
        </div>
    );
};

export {CarsPage};
