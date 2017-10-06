const $ = require('jquery');
// инициализация
const validation = (function() {
      
  return {
    init: function(form) {
      let formName = form;  
      $('input, textarea').off().blur( function(){
            
        let names = $(this).attr('name'), val = $(this).val();

        switch (names) {
        // Проверка поля "login"
        case 'login':

          if (val != '') {
            $(this).parent().addClass('not_error').removeClass('error');
            $(this).next('.error-box').remove();
          } else {
            $(this).parent().addClass('error').removeClass('not_error');
            $(this).after('<div class="error-box">Вы не ввели логин</div>');
          }

          break;
          // Проверка поля "password"
        case 'password':

          if (val != '') {
            $(this).parent().addClass('not_error').removeClass('error');
            $(this).next('.error-box').remove();
          } else {
            $(this).parent().addClass('error').removeClass('not_error');
            $(this).after('<div class="error-box">Вы не ввели пароль</div>');
          }

          break;  
          // Проверка поля "name"
        case 'name':

          if (val != '') {
            $(this).parent().addClass('not_error').removeClass('error');
            $(this).next('.error-box').remove();
          } else {
            $(this).parent().addClass('error').removeClass('not_error');
            $(this).after('<div class="error-box">Вы не ввели имя</div>');
          }

          break; 
          // Проверка поля "email"
        case 'email':

          var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
          if(val != '' && rv_email.test(val)){
            $(this).parent().addClass('not_error').removeClass('error');
            $(this).next('.error-box').remove();
          } else {
            $(this).parent().addClass('error').removeClass('not_error');
            $(this).after('<div class="error-box">Не верный email</div>');
            
          }

          break;  
          // Проверка поля "msg"
        case 'msg':

          if (val != '') {
            $(this).parent().addClass('not_error').removeClass('error');
            $(this).next('.error-box').remove();
          } else {
            $(this).parent().addClass('error').removeClass('not_error');
            $(this).after('<div class="error-box">Вы не заполнили</div>');
          }

          break;
        }

      }); 

      formName.submit(function(e){
        e.preventDefault();
        
      });


    },
  };

}());

module.exports = validation;