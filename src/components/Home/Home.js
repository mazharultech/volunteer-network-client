import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { fakeData } from '../../fakeData/fakeData';
import VolunteerTasks from '../VolunteerTasks/VolunteerTasks';



const Home = () => {
    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        setVolunteers(fakeData)
    }, []);
    return (
        <div>
            
            <Grid container>
                {
                    volunteers.map(volunteer => <VolunteerTasks key={volunteer.pic} volunteer={volunteer}></VolunteerTasks>)
                }
            </Grid>
        </div>
    );
};

export default Home;