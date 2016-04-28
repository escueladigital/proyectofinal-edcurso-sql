// login form
(function(){
  var loginForm = document.querySelector('.login-form');
  if(loginForm){
    var input = loginForm.querySelectorAll('.input');
    for(var i = 0; i < 2; i++){
      input[i].addEventListener('blur', function(){
        if(this.value != null || this.value != "") {
          this.classList.add('focus');
        } else {
          this.classList.remove('focus');
        }
      })
    }
  }
})();