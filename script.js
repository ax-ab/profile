console.log("hello")

window.onload = function() {
  let body = document.querySelector('body');
  body.classList.add('blur');

  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      body.classList.remove('blur');
    } else {
      body.classList.add('blur');
    }
  }

}
