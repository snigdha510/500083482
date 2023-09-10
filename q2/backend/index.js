const express = require('express');
const cors = require('cors');
const axios = require('axios'); // Import Axios
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const externalApiUrl = 'http://20.244.56.144/train/trains';

app.get(externalApiUrl, async (req, res) => {
  try {
    const response = await axios.get(externalApiUrl);

    res.json(response.data);
  } catch (error) {

    console.error('Error fetching data from the external API:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
