$(readyNow);

function readyNow() {
    console.log('jQuery ready!');


// $('#addition-button').on('click', addNumber);

// $('#subtract-button').on('click', subtractNumber);

// $('#multiply-button').on('click', multipyNumber);

// $('#divide-button').on('click', divideNumber);

// $('#submit-button').on('click', submitEquation);

// $('#clear-button').on('click', clearEquation);

getEquationList();

}

function getEquationList(){ //no arguments
    $.ajax({
        type: 'GET', //app.get
        url: '/equations' // '/artist' within app.get
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




