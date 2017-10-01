const $ = require('jquery');

function flipInit(){
  $('#auth').on('click', function(e){
    e.preventDefault();
    $(this).addClass('btn-hidden');
    $('.flipper').toggleClass('active');
  });
  $('#mainIndex').on('click', function(e){
    e.preventDefault();
    $('#auth').removeClass('btn-hidden');
    $('.flipper').removeClass('active');
  });

}
  
module.exports = flipInit;