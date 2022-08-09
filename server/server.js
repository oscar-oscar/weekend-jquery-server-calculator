
//create the express app
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5006;

// This must be added before GET & POST routes.
app.use(express.urlencoded());

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

const calculationList = [ {
    inputA: 1,
    inputB: 2,
    operator: '+',
    result: 3,

}];




app.get('/calculations', (req, res) => {
    res.send(calculationList);
});

app.post('/calculations', (req, res) => {
    const calculation = req.body; //body of the request data property in submitCalculation
    console.log(req.body);
    
    
    // if(req.body.operator === '+') {
    //     result = calculation.inputA + calculation.inputB;
    //   }

      if(req.body.operator === '+') {
        calculation.result = Number(calculation.inputA) + Number(calculation.inputB);
      } // changing this to calculation.result allows us to use it in client.js
    //   if(req.body.operator === '-') {
    //     result = calculation.inputA - calculation.inputB;
    //   }
    //   if(req.body.operator === '*') {
    //     result = calculation.inputA + calculation.inputB;
    //   }
    //   if(req.body.operator === '/') {
    //     result = calculation.inputA / calculation.inputB;
    //   }

    
    calculationList.push(calculation);
    res.send(calculation);
    
    
    

})

app.listen(PORT, () => {
    console.log ('Server is running on port', PORT);
  })


 
