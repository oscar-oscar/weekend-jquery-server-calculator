$(readyNow);

function readyNow() {
    console.log('jQuery ready!');


$('#addition-button').on('click', addNumber);

$('#subtract-button').on('click', subtractNumber);

$('#multiply-button').on('click', multipyNumber);

$('#divide-button').on('click', divideNumber);

$('#submit-button').on('click', submitEquation);

$('#clear-button').on('click', clearEquation);

}



