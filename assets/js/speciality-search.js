'use strict';

(function($){
  $(document).ready(function(){
    document.querySelector('#speciality_filter').addEventListener('keyup', function (e) {
      var cards = document.querySelectorAll('.card-cell');
      for (var i = 0; i < cards.length; i++) {
        if (cards[i].attributes['data-speciality-name'].value.includes(e.target.value.toLowerCase())) {
          cards[i].style.display = 'flex';
        } else {
          cards[i].style.display = 'none';
        }
      }
    });
  });
}(jQuery));
