'use strict';

(function($){
  $(document).ready(function(){
    document.querySelector('#speciality_filter').addEventListener('keyup', function (e) {
      var cards = document.querySelectorAll('.card-cell');
      // Inspired by https://stackoverflow.com/a/37511463
      var normalizedInput = e.target.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      for (var i = 0; i < cards.length; i++) {
        if (cards[i].attributes['data-speciality-name'].value.includes(normalizedInput)) {
          cards[i].style.display = 'flex';
        } else {
          cards[i].style.display = 'none';
        }
      }
    });
  });
}(jQuery));
