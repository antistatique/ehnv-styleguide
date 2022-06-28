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

'use strict';

/* global jQuery */

(function($){
  var BrowserDetect = {
      init: function () {
          this.browser = this.searchString(this.dataBrowser) || "Other";
          this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown";
      },
      searchString: function (data) {
          for (var i = 0; i < data.length; i++) {
              var dataString = data[i].string;
              this.versionSearchString = data[i].subString;

              if (dataString.indexOf(data[i].subString) !== -1) {
                  return data[i].identity;
              }
          }
      },
      searchVersion: function (dataString) {
          var index = dataString.indexOf(this.versionSearchString);
          if (index === -1) {
              return;
          }

          var rv = dataString.indexOf("rv:");
          if (this.versionSearchString === "Trident" && rv !== -1) {
              return parseFloat(dataString.substring(rv + 3));
          } else {
              return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
          }
      },

      dataBrowser: [
          {string: navigator.userAgent, subString: "Edge", identity: "MS Edge"},
          {string: navigator.userAgent, subString: "MSIE", identity: "Explorer"},
          {string: navigator.userAgent, subString: "Trident", identity: "Explorer"},
          {string: navigator.userAgent, subString: "Firefox", identity: "Firefox"},
          {string: navigator.userAgent, subString: "Opera", identity: "Opera"},
          {string: navigator.userAgent, subString: "OPR", identity: "Opera"},

          {string: navigator.userAgent, subString: "Chrome", identity: "Chrome"},
          {string: navigator.userAgent, subString: "Safari", identity: "Safari"}
      ]
  };

  BrowserDetect.init();

  if (BrowserDetect.browser === 'Explorer' && BrowserDetect.version > 9) {
    $('html').addClass('ie');
  }
}(jQuery));

'use strict';

(function(){

}());

'use strict';

(function($){
  $(document).ready(function(){
  	$('[data-toggle="tooltip"]').tooltip(); 
  });
}(jQuery));

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

'use strict';

(function($){
  $(document).ready(function(){
    $('.tags-select').select2();
  });
}(jQuery));
