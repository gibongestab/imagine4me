Template.layout.onRendered(function() {
  let giWow = function(selector, effect, offset) {
    $(selector).waypoint(function() {
      $(this).addClass('animated ' + effect);
    }, {
      offset: offset
    });
  };

  /* Animations on scroll */

  giWow('.js-wp-1', 'fadeIn', '50%');
  giWow('.js-wp-2', 'fadeInUp', '50%');
});
