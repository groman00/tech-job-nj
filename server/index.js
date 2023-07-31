
const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000
const request = require('request');

app.use(cors({
  "origin": "*",
  "methods": "POST",
}))

app.get('/', (req, res) => {
  const { email, description } = req.query;

  console.log({ email, description })

  request
    .post('https://docs.google.com/forms/u/0/d/e/1FAIpQLSezaBGavc1oJP1WgbA6RwIJs6yw8Qrt65etSi2MlG7-7auWbQ/formResponse', {
      form: { 
        'entry.1045781291': email, 
        'entry.839337160': description 
      }
    }, function(err, httpResponse, body) { 
      console.log({
        // err, 
        httpResponse, 
        body
      })
    })

  res.send()
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
