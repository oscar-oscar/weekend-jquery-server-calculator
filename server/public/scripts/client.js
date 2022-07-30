$(readyNow);

function readyNow() {
    console.log('jQuery ready!');


// $('#addition-button').on('click', addNumber);

// $('#subtract-button').on('click', subtractNumber);

// $('#multiply-button').on('click', multipyNumber);

// $('#divide-button').on('click', divideNumber);

 $('#submit-button').on('click', submitEquation);

// $('#clear-button').on('click', clearEquation);

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

  


