function toggleInit(){
  $('.btn-aside').on('click', function(e){
    e.preventDefault();
    $('.blog-block__left_toggle').toggleClass('active');
    $('body').toggleClass('hidden');
  });
}
  
module.exports = toggleInit;