import React from 'react';

import './styleLaunch.css'

const Launch = ({lanch}) => {

    const {mission_name, launch_year, mission_patch_small}=lanch

    return (
        <div className={'launch'}>

            <div>mission_name: {mission_name} </div>

            <div>launch_year: {launch_year} </div>

            <div>mission_patch_small: {mission_patch_small} </div>

        </div>
    );
};

export {Launch};
