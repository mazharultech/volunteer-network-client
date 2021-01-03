import { Grid } from '@material-ui/core';
import React from 'react';

const VolunteerTasks = ({volunteer}) => {
    const handleClick = () => {
        console.log('volunteer clicked');
    }
    return (
        <Grid onClick={handleClick} item sm={3}>
            <img src={require(`../../images/${volunteer.pic}`)} alt=""/>
            <h2>{volunteer.name}</h2>
        </Grid>
    );
};

export default VolunteerTasks;