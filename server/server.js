
//create the express app
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5006;

// This must be added before GET & POST routes.
app.use(express.urlencoded());

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

const equationList = [
    {
        equationProp: 12 - 4 === 8,
        
    },
    {
        equationProp: 15 * 3 === 45,
        
    },
    {
        equationProp: 4 + 1 === 5,
        
    },
    {
        equationProp: 42 / 2 === 21,
        
    },
  ]


app.get('/equations', (req, res) => {
    
    res.send(equationList);
});

app.listen(PORT, () => {
    console.log ('Server is running on port', PORT);
  })


