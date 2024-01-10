const movieMap = new Map();
// const movieObj = Object.fromEntries(movieMap);
 let number = -1;

const $div = $('#movieRating');

$('button').on('click',function(event){
    event.preventDefault();
    let $input1 = $('input').eq(0).val();
    let $input2 = $('input').eq(1).val();
    number = number + 1;
    $('#movieRating').append(`<div id=${number}></div>`);
    $(`div #${number}`).append(`<span>${$input1}:${$input2} </span>`);
    $(`div #${number}`).append('<button>Remove!</button>');
    movieMap.set($input1,$input2);
    console.log(movieMap);
     $input1 = $('input').eq(0).val('');
     $input2 = $('input').eq(1).val(5);
     return movieMap; //???
})

// const movieObj = Object.fromEntries(movieMap);


$('#movieRating').on('click','button',function(){
    $(this).parent().remove();
})


function sortByName(array){

}

function compareNumbers(a, b) {
    return a - b;
  }
function compareString(str1,str2){
    return str1.toLowerCase() - str2.toLowerCase();
}