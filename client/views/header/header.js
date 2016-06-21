
/* For the sticky navigation */

Template.layout.onRendered(function() {

    $('.js-section-about').waypoint(function(direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky animated slideInDown');
        } else {
            $('nav').removeClass('sticky animated slideInDown');
        }
    }, {
        offset: '90px;'
    });


});


Template.header.helpers({
    notEn() {
        return TAPi18n.getLanguage() !== 'en'
    },
    notPt() {
        return TAPi18n.getLanguage() !== 'pt'
    }
})

Template.layout.events({
    'click .js-scroll-full': function() {
        $('.my-body').animate({
            scrollTop: $('.js-section-services').offset().top}, 1000)
    },

    'click .js-scroll-ghost': function() {
        $('.my-body').animate({
            scrollTop: $('.js-section-about').offset().top}, 1000)
    },

    'click .js-scroll-cta': function() {
        $('.my-body').animate({
            scrollTop: $('.js-section-form').offset().top}, 1000)
    },
    'click .set-pt'(event) {
        event.preventDefault();
        TAPi18n.setLanguage('pt');
    },
    'click .set-en'(event) {
        event.preventDefault();
        TAPi18n.setLanguage('en');
    },
    'click a[href*=#]:not([href=#])':function(e) {
        var el = e.target;
        //this -> contexto de dados
        //el -> elemento clicado;
        e.preventDefault();

        if (location.pathname.replace(/^\//, '') == el.pathname.replace(/^\//, '') && location.hostname == el.hostname) {
            var target = $(el.hash);
            target = target.length ? target : $('[name=' + el.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);

            };
        }
    },

});
