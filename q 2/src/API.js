// api.js
import axios from 'axios';

const API_BASE_URL = 'http://20.244.56.144/train/trains';

export const getAllTrains = () => {
  return axios.get(`${API_BASE_URL}/trains`);
};

export const getSingleTrain = (trainId) => {
  return axios.get(`${API_BASE_URL}/trains/${trainId}`);
};
