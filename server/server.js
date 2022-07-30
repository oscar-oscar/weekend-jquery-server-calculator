
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
    
        
        
   
    
  ]


app.get('/equations', (req, res) => {
    
    res.send(equationList);
});

app.post('/equations', (req, res) => {
    const calculation = req.body; //body of the request data property in sendEquations
    console.log(req.body);
    equationList.push(calculation);
        

})

app.listen(PORT, () => {
    console.log ('Server is running on port', PORT);
  })


