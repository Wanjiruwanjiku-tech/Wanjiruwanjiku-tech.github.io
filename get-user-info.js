const axios = require('axios');

const username = 'Wanjiruwanjiku-tech'; // Replace with the GitHub username you want to get information about
const token = process.env.GITHUB_TOKEN;

axios
  .get(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then((response) => {
    console.log('User Information:', response.data);
  })
  .catch((error) => {
    console.error('Error fetching user information:', error.response.data || error.message);
    process.exit(1);
  });
