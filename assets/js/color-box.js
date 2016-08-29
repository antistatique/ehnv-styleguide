'use strict';
(function($){
  $(document).ready(function(){

    $('.focuspoint').focusPoint();

    $('.colox-box').hover(function(){
      $(this).find('p.excerp').stop().slideDown(300);
    }, function(){
      $(this).find('p.excerp').stop().slideUp(300);

    });
  });
}(jQuery));
