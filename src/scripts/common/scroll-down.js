function scrollDownInit(){
  $(document).on('click', '.arrow-down__btn',function(e){
    e.preventDefault();
    var scrollB = $(this).data('href');
    $('.wrapper').stop().animate({
      scrollTop: $(scrollB).offset().top,
    }, 1500);
  });
}

module.exports = scrollDownInit;