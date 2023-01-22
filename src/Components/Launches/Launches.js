import React, {useEffect, useState} from 'react';

import {Launch} from "../Launch/Launch";

const Launches = () => {

    const [launches, SetLaunches]=useState([]);

    useEffect(()=>{fetch('https://api.spacexdata.com/v3/launches').then(value => value.json()).then(value =>SetLaunches(value) )
    },[]);

    return (
        <div className={'launches'}>

            <h1 className={'title'}>Launches</h1>

            {launches
                .filter(launch=>launch.launch_year!=='2020')
                .map(launch=><Launch key={launch.flight_number} lanch={launch}/>)}
        </div>
    );
};

export {Launches};
