'use strict';

(function($){
  $(document).ready(function(){
    $('.search-form').submit(function(ev){
      // If the text input is empty, toggle the search box
      // if not, let the submission of the form happen
      var contentSearch = $(this).find( 'input.text' ).val();
      if(contentSearch === '' || ($(this).parents('.search-box').hasClass('toggle-able') && !$(this).parents('.search-box').hasClass('expanded'))){
        $(this).parents('.search-box').toggleClass('expanded');
        $(this).find( 'input.text' ).focus();
        ev.preventDefault();
      }else{
      // Code to submit the form in ajax
      // or to let the form submit by itelsf
      }
    });

    $('html').click(function() {
      $('.search-box').removeClass('expanded');
    });

    $('.search-box').click(function(event){
      event.stopPropagation();
    });

    $(document).keyup(function(e) {
      if (e.keyCode === 27) {
        $('.search-box').removeClass('expanded');
      }
    });


  });
}(jQuery));
