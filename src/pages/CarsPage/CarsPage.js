import React from 'react';
import {useSelector} from "react-redux";

import {CarsForm,Cars} from "../../components"

const CarsPage = () => {
   const {loading} = useSelector(state => state.cars)

    return (
        <div>
            <CarsForm/>
            <hr/>
            {loading && <h1>Loading......................................</h1>}
            <Cars/>
        </div>
    );
};

export {CarsPage};
