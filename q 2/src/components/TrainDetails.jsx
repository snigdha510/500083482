import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Typography,
  Paper,
  CircularProgress,
  makeStyles,
} from '@material-ui/core';
import { getSingleTrain } from '../API';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}));

function TrainDetails() {
  const { trainId } = useParams();
  const classes = useStyles();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    // Fetch a single train by ID when the component mounts
    getSingleTrain(trainId)
      .then((response) => setTrain(response.data))
      .catch((error) => console.error(error));
  }, [trainId]);

  return (
    <Paper className={classes.root} elevation={3}>
      <Typography variant="h4">Train Details</Typography>
      {train ? (
        <div>
          <Typography variant="h6">Train Name: {train.trainName}</Typography>
          <Typography variant="body1">Train Number: {train.trainNumber}</Typography>
          {/* Add more details here */}
        </div>
      ) : (
        <CircularProgress />
      )}
    </Paper>
  );
}

export default TrainDetails;
