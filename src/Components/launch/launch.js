const Launch = ({launch }) => {

    const {mission_name, launch_year, mission_patch_small} = launch
    return (
        <div>
            <div>mission_name: {mission_name}</div>
            <div>launch_year: {launch_year}</div>
            <div>mission_patch_small: {mission_patch_small}</div>
        </div>
    );
};

export {Launch};
