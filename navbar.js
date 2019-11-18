$(function(){

    // $(window).resize(function(){
    //     let x = $(window).width();
    //     console.log(x);
    //     if(x <= 320 ){
    //         $(".minusMg").removeClass("container");
    //         $(".navbar,.navbar-dark").addClass("px-0");
    //     }
    //     if(x > 320) {
    //         $(".minusMg").addClass("container");
    //         $(".navbar,.navbar-dark").removeClass("px-0");
    //     }
    // })

    $(".fa-cog")[0].onmouseover = function(){
        $(".fa-cog")[0].classList.add("fa-spin");
    }

    $(".fa-cog")[0].onmouseout = function(){
        setTimeout(function(){
            $(".fa-cog")[0].classList.remove("fa-spin");
        }, 1500);
    }

    $(".fa-cog")[0].onclick = function(){
        $(".fa-cog")[0].classList.add("fa-spin");
        setTimeout(function(){
            $(".fa-cog")[0].classList.remove("fa-spin");
        },3000);
    }
    
    let shoppingList = [];
    $(".badge")[0].innerHTML = shoppingList.length;

    $(".userIcon")[0].onmouseover = function(){
        $(".downList")[0].style.display = "flex";
    }

    document.body.onclick = function(){
        $(".downList")[0].style.display = "none";
    }
})