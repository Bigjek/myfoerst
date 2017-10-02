const $ = require('jquery');
const slider = require ('./common/slider');
const modalNav = require ('./common/modal');
const flipInit = require ('./common/flip');
const toggleInit = require ('./common/toggle');
const scrollDownInit = require ('./common/scrollDown');

slider(); 
modalNav();
flipInit();
toggleInit();

if($('.arrow-down__btn').length){
  scrollDownInit();
}