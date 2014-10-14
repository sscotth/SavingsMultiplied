document.addEventListener('DOMContentLoaded', function(){
  var loginModal = document.querySelector('.login-modal');
  var loginModalToggleAreas = document.querySelectorAll(
    '.lightbox, .login, input[value="Cancel"]'
  );

  function toggleLoginModal(){
    toggle(loginModal);
  }

  for (var i = 0; i < loginModalToggleAreas.length; i++){
    loginModalToggleAreas[i].addEventListener('click', toggleLoginModal);
  }
});

function toggle(element){
  if (element.classList) {
    element.classList.toggle('hidden');
  } else {
    var classes = element.className.split(' ');
    var classIndex;

    for (var i = 0; i < classes.length; i++) {
      if (classes[i] === 'hidden') {
        classIndex = i;
      }
    }

    if (classIndex) {
      classes.splice(classIndex, 1);
    } else {
      classes.push('hidden');
    }

    element.className = classes.join(' ');
  }
}
