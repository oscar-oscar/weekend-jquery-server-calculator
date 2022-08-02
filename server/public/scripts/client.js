$(readyNow);

function readyNow() {
    console.log('jQuery ready!');


$('#addition-button').on('click', addNumbers);

$('#subtract-button').on('click', subtractNumbers);

$('#multiply-button').on('click', multipyNumbers);

$('#divide-button').on('click', divideNumbers);

 $('#submit-button').on('click', submitCalculation);

$('#clear-button').on('click', clearInputs);

//getCalculationList();

}

function getCalculationList(){ //no arguments
    $.ajax({
        type: 'GET', 
        url: '/calculations'
    }).then(function (response) {
        console.log(response);
        $('#calculation-history').empty();
        for (let i = 0; i < response.length; i++) {
            let calculation = response[i];
            $('#calculation-history').append(`
              
            <li>${calculation.inputA}${calculation.operator} ${calculation.inputB}${calculation.calcResult}</li>
                       
            `);
        }
    });

}

let operator = '';
let inputA = '';
let inputB = '';

function submitCalculation() {
    console.log('in submitCalculation');
    $.ajax({
      type: 'POST',
      url: '/calculations',
      data: {
        inputA: $('#input-one').val(),
        inputB: $('#input-two').val(),
        operator: operator
    }
    }).then(function(response) {
      console.log('calculations:',response);
      //alert(response);
      getCalculationList();
    }); // .catch goes here 
  }

//when + button is pressed this function will run
  function addNumbers(){
    console.log('in addNumbers for + button');
    operator = '+';
    
  }
//when - button is clicked this function will run
  function subtractNumbers(){
    console.log('in subtractNumbers for - button');
    operator = '-';
  }
//when * button is clicked this function will run
  function multipyNumbers(){
    console.log('in multiplyNumbers for * button');
    operator = '*';
  }
//when / button is clicked this function will run
  function divideNumbers(){
    console.log('in divideNumbers for / button');
    operator = '/';
  }

  function clearInputs(){
    console.log('in clearInputs for C button');
    $('#input-one').val('');
    $('#input-two').val('');
    

  }


  