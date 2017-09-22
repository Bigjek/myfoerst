const $ = require('jquery');

function modalInit(){
  $('.menu__link').on('click', function(){
    $('#modalMenu').toggleClass('in');
    $('body').toggleClass('hidden');
  });
}
  
module.exports = modalInit;