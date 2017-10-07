const slider = require ('./common/slider');
const modalNav = require ('./common/modal');
const flipInit = require ('./common/flip');
const toggleInit = require ('./common/toggle');
const scrollDownInit = require ('./common/scroll-down');
const blogScrollMenuInit = require ('./common/blog-scroll-menu');
const validationAuthInit = require ('./common/validation');

// Slider
if($('.slider').length){
  slider.init(); 
}

// Validation
if($('#authfo').length){
  validationAuthInit.init($('#authfo')); 
}

// Validation
if($('#contact').length){
  validationAuthInit.init($('#contact')); 
}

// Menu
if($('.menu__link').length){
  modalNav();
}

// Flip page Index
if($('#auth').length){
  flipInit();
}

// Toggle aside page My-blog
if($('.btn-aside').length){
  toggleInit();
}

// Scroll button
if($('.arrow-down__btn').length){
  scrollDownInit();
}

//Blog scroll
if($('.blog-block__right').length){
  blogScrollMenuInit();
}