import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getAllTrains } from "../API";

function TrainList() {
  const [trains, setTrains] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    getAllTrains()
      .then((response) => {
        console.log(response.data); 
        setTrains(response.data);
        setLoading(false); 
      })
      .catch((error) => {
        console.error(error);
        setError(error); 
        setLoading(false); 
      });
  }, []);

  return (
    <div>
      <h2>All Trains</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <ul>
          {Array.isArray(trains) && trains.length > 0 ? (
            trains.map((train) => (
              <li key={train.trainNumber}>
                <Link to={`/train/${train.trainNumber}`}>{train.trainName}</Link>
              </li>
            ))
          ) : (
            <p>No train data available.</p>
          )}
        </ul>
      )}
    </div>
  );
}

export default TrainList;