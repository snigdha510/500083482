import axios from 'axios';
import backendBaseUrl from '../APIFetch/apiconfig.js';

export function getAllTrains() {
  return axios.get(`${backendBaseUrl}/api/trains`);
}

export function getTrainByNumber(trainNumber) {
  return axios.get(`${backendBaseUrl}/api/trains/${trainNumber}`);
}
