const $ = require('jquery');

function blogScrollMenuInit(){

  var lastId,
    article = $('.aside-menu'),
    header = $('.section.header'),
    articleHeight = header.outerHeight(),
    menuItems = article.find('a'),

    scrollItems = menuItems.map(function(){
      var item = $($(this).attr('href'));
      if (item.length) { return item; }
    });

  menuItems.click(function(e){
    var href = $(this).attr('href'), offsetTop1 = href === '#' ? 0 : $(href).position().top+articleHeight;
    $('.wrapper').stop().animate({ 
      scrollTop: offsetTop1,
    }, 300);
    e.preventDefault();
  });

  $('.wrapper').scroll(function(){

    var fromTop = $(this).scrollTop() - articleHeight + 40, cur = scrollItems.map(function(){
      if ($(this).position().top < fromTop)
        return this;
    });

    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : 0;
    if (lastId !== id && id != 0 ) {
      lastId = id;
      menuItems.removeClass('active').parent().find('[href=\'#'+id+'\']').addClass('active');
    }     

  });
}

module.exports = blogScrollMenuInit;