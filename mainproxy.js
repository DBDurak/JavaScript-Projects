const axios = require('axios');

async function doGetRequest() {

    let host = 'proxy';
    let port = 8080;

    const res = await axios.get('http://webcode.me', {
        proxy: {
            host: host,
            port: port 
        }
    });

    console.log(res.data);
}

doGetRequest();