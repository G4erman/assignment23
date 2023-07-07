document.addEventListener('DOMContentLoaded', function() {
  var figure = document.querySelector('#gallery figure');
  var thumbnailImages = document.querySelectorAll('#gallery ul img');

  for (var i = 0; i < thumbnailImages.length; i++) {
    thumbnailImages[i].addEventListener('click', function() {
      figure.querySelector('img').src = this.src;
      figure.querySelector('img').alt = this.alt;
      figure.querySelector('figcaption').textContent = this.alt;
    });
  }
});

  
  