const $ = require('jquery');

function blogScrollMenuInit(){
  var blockS = $('.blog-block__right'), article = $('.blog-description'), coords = [];
  $('.blog-description').each(function(){
    coords.push($(this).offset().top);
  });
  console.log('coords ' + coords);

}

module.exports = blogScrollMenuInit;