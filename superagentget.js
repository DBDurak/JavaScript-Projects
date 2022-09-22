const superagent = require('superagent');
superagent
  .get("https://world.openfoodfacts.org/category/pastas/1.json")
  .then(response => {
    // get parsed JSON response data
    data = response.body
    console.log(data.count)
    console.log(data.products)
  })
  .catch(error => {
    if (error.response) {
      console.log(error.status)
    } else {
      console.log(error.message)
    }
  })