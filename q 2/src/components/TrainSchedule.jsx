import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  makeStyles,
} from '@mui/material'; // Updated import path

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '300px', // Adjust the height as needed
  },
}));

const TrainSchedule = () => {
  const classes = useStyles();
  const [trains, setTrains] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://20.244.56.144/train/trains')
      .then(response => {
        setTrains(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error Found', error);
        setLoading(false);
      });
  }, []);

  return (
    <Paper className={classes.root} elevation={3}>
      <Typography variant="h4">Train Schedule</Typography>
      {loading ? (
        <div className={classes.loading}>
          <CircularProgress />
        </div>
      ) : (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Train Name</TableCell>
                <TableCell>Train Number</TableCell>
                <TableCell>Departure Time</TableCell>
                <TableCell>Sleeper Available</TableCell>
                <TableCell>AC Available</TableCell>
                <TableCell>Sleeper Price</TableCell>
                <TableCell>AC Price</TableCell>
                <TableCell>Delay By</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {trains.map(train => (
                <TableRow key={train.trainNumber}>
                  <TableCell>{train.trainName}</TableCell>
                  <TableCell>{train.trainNumber}</TableCell>
                  <TableCell>
                    {`${train.departureTime.Hours || ''}:${train.departureTime.Minutes || ''}:${train.departureTime.Seconds || ''}`}
                  </TableCell>
                  <TableCell>{train.seatsAvailable.sleeper}</TableCell>
                  <TableCell>{train.seatsAvailable.AC}</TableCell>
                  <TableCell>{train.price.sleeper}</TableCell>
                  <TableCell>{train.price.AC}</TableCell>
                  <TableCell>{train.delayedBy}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Paper>
  );
}

export default TrainSchedule;
