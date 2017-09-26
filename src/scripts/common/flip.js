const $ = require('jquery');

function flipInit(){
  $('#auth').on('click', function(e){
    e.preventDefault();
    $(this).hide();
    $('.flipper').toggleClass('active');
  });

}
  
module.exports = flipInit;