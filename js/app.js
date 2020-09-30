$(document).ready(function() {

  'use strict';

  // =================
  // Responsive videos
  // =================
  $(".tablewrapper").width($(".o-grid__col").width());
  $(window).on('resize', function(){
    $(".tablewrapper").width($(".o-grid__col").width());

  });



  $('.o-wrapper').fitVids({
    'customSelector': ['iframe[src*="ted.com"]']
  });

  // =================
  // Off Canvas menu
  // =================

  $('.js-off-canvas-toggle').click(function(e) {
    e.preventDefault();
    $('.js-off-canvas-toggle').toggleClass('is-active');
    $('.js-off-canvas-container').toggleClass('is-active');
  });

});
