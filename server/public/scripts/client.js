$(readyNow);

function readyNow() {
    console.log('jQuery ready!');


$('#addition-button').on('click', addNumbers);

$('#subtract-button').on('click', subtractNumbers);

$('#multiply-button').on('click', multipyNumbers);

$('#divide-button').on('click', divideNumbers);

 $('#submit-button').on('click', submitEquation);

$('#clear-button').on('click', clearInputs);

getEquationList();

}

function getEquationList(){ //no arguments
    $.ajax({
        type: 'GET', 
        url: '/equations' 
    }).then(function (response) {
        console.log(response);
        $('#equation-history').empty();
        for (let i = 0; i < response.length; i++) {
            let equation = response[i];
            $('#equation-history').append(`
                <tr>
                    <td>${equation.equationProp}</td>
                    <td>${equation.equationProp}</td>
                    <td>${equation.equationProp}</td>
                </tr>
            `);
        }
    });

}

function submitEquation() {
    console.log('in submitEquation');
    $.ajax({
      type: 'POST',
      url: '/equations',
      data: {
        firstNumber: $('#input-one').val(),
        secondNumber: $('#input-two').val(),
    }
    }).then(function(response) {
      console.log(response);
      //alert(response);
      getEquationList();
    }); // .catch goes here 
  }

  function addNumbers(){
    console.log('in addNumbers for + button');
  }

  function subtractNumbers(){
    console.log('in subtractNumbers for - button');
  }

  function multipyNumbers(){
    console.log('in multiplyNumbers for * button');
  }

  function divideNumbers(){
    console.log('in divideNumbers for / button');
  }

  function clearInputs(){
    console.log('in clearInputs for C button');
  }


