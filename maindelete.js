const axios = require('axios');

async function doDeleteRequest() {

    let res = await axios.delete('http://localhost:3000/users/2/');

    console.log(res.status);
}

doDeleteRequest();