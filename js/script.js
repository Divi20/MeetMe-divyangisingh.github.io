$(window).on("load", function(){
    $(".loader .inner").fadeOut(750, function(){
        $(".loader").fadeOut(1000);
    });
})
$(document).ready(function() {
    $('#slides').superslides({
        animation: 'fade',
        play: 3000,
        pagination: false
    });
    var typed = new Typed(".typed",{
        strings: ["Software Engineer", "Web Developer.", "Student."],
        typeSped: 70,
        loop: true,
        startDelay: 1000,
        showCusror: false
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:5
            },
            938:{
                items:5 
            }
        }
    });

    

    var skillsTopOffset = $(".skillsSection").offset().top;
    var statsTopOffset = $(".statsSection").offset().top;
    var countUpFinished = false

    $(window).scroll(function(){

        if(window.pageYOffset > skillsTopOffset - $(window).height() + 200){
            $('.chart').easyPieChart({
                //your options goes here
                easing: "easeInOut",
                barColor: "#fff",
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
        
                onStep: function(from, to, percent){
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }

        if(!countUpFinished && window.pageYOffset > skillsTopOffset - $(window).height() + 200){
           
            $(".counter").each(function(){
                var element = $(this);
                var endVal = parseInt(element.text());
                element.countup(endVal);
            })

            countUpFinished = true;
        }

    });

    $("[data-fancybox]").fancybox();

    $(".items").isotope({
        filter: '*',
        animateOptions:{
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });

    $("#filter a").click(function(){
        $('#filter .current').removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animateOptions:{
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });

        return false;

    });

    $("#navigation li a").click(function(e){
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition - 50}, "slow");
    });

    const nav = $('#navigation');
    const navTop = nav.offset().top;
    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {

        var body = $("body");
        
        if($(window).scrollTop() >= navTop) {
           body.css("padding-top", nav.outerHeight() + "px");
           body.addClass("fixedNav") ;
        }

        else{
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        }
    }

});