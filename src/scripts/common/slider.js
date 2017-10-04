const $ = require('jquery');
// инициализация
const slider = (function() {
  const sliderOne = function(name) {
        
    let classSlider = name;
    let list = classSlider.children().find('ul.slider');
    let item = list.find('li');
    let dataLength = item.length; 
            
    let nextS = classSlider.children().find('#next');
    let prevS = classSlider.children().find('#prev');
        
    console.log('dataLength ' + dataLength);
    const slideNext = function() {
              
      $(nextS).on('click', function(){
        console.log('next ');

        let $this = $(this);
            
        let activeSButton = $this.find('li').filter('.active');         
                
        let nextActiveButton = activeSButton.next();
        nextActiveButton.addClass('active').siblings().removeClass('active'); 
                
        let activeS = item.filter('.active'); 
        let nextActive = activeS.next();
        nextActive.addClass('active').siblings().removeClass('active');
      });
    };
        
    const slidePrev = function() {
              
      $(prevS).on('click', function(){

        console.log('prev ');

        let activeS = item.filter('.active'); 
        let prevActive = activeS.prev();
        prevActive.addClass('active').siblings().removeClass('active');
            
      });
    };
                      
        
    slideNext();
    slidePrev();
        
  };
        
  return {
    init: function(name) {
      sliderOne(name);       
    },
  };
}());

module.exports = slider;