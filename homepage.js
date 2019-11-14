$(function(){
    $(window).resize(function(){
        let x = $(window).width();
        console.log(x);
        if(x <= 768 ){
            $(".minusMg").removeClass("container");
            $(".navbar,.navbar-dark").addClass("px-0");
        }
        if(x > 768) {
            $(".minusMg").addClass("container");
            $(".navbar,.navbar-dark").removeClass("px-0");
        }
    })
})

