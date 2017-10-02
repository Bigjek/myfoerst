const $ = require('jquery');

function scrollDownInit(){
  $(document).on('click', '.arrow-down__btn',function(e){
    e.preventDefault();
    var scrollB = $(this).data('href');
    $('.wrapper').animate({
      scrollTop: $(scrollB).offset().top,
    }, 2000);
  });
}

module.exports = scrollDownInit;