import {useEffect, useState} from "react";

import {Launch} from "../launch/Launch";

const Launches = () => {

    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches').then(value => value.json()).then(value => setLaunches(value))
    }, []);


    return (
        <div>

            <hr/>

            <h1>Launches:</h1>
            {launches
                .filter(value => value.launch_year !== '2020')
                .map(launch => <Launch key={launch.flight_number} launch={launch}/>)}

        </div>
    );
};

export {Launches};