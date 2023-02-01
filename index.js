const express = require('express');
var cors = require('cors')

 


const app = express();
var corsOptions = {
    origin: 'http://localhost:4000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.use(cors())

app.get('/api/data', (req, res) => {
  res.send({ data: 'Hello from the backend!' });
});
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});