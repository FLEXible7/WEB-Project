'use strict';

let input = '';
$( document ).ready(function(){
    $( "body" ).keyup(function( event ){
        input += event.key;
        console.log(input);
        setTimeout(() => {if (input != '') {input=''}; console.log(input)}, 5000);
    });
});
