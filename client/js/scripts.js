require('newrelic');
Template.navTemplate.rendered = function(){
    $(window).stellar();
    var links = $('.navigation').find('li');
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');


    slide.waypoint(function (direction) {
        dataslide = $(this).attr('data-slide');
    	
        if (direction === 'down') {
            $('.navigation li[data-slide="' + dataslide + '"]').prev().removeClass('active');
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active');
        }
        else {
            $('.navigation li[data-slide="' + dataslide + '"]').next().removeClass('active');
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active');
        }
    });

    mywindow.scroll(function () { 
        console.log(mywindow.scrollTop())  
        if (mywindow.scrollTop() == 0) {
            $('.navigation li[data-slide="1"]').addClass('active');
            $('.navigation li[data-slide="2"]').removeClass('active');
        }
    });

    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 750, 'swing');
    }

    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });
};
