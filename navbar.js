$(function(){

    for(i = 0; i < $(".shoppingList").length; i++){
        let shoppingList = [];
        $(".shoppingList")[i].innerHTML = shoppingList.length;
    }
    

    //To show and hide user drop-down list
    // console.log($(".downList")[0].classList.value);

    // window.onclick = function(evt){
        // console.log(evt);
    //     console.log(event);
        // console.log(event.target);   
        // console.log(event.target.className);
    //     console.log(typeof(event.target));
    //     console.log(event.toElement);
    //     console.log(/userIcon/.test(event.target.className));
    //     event.target.classList.add("distinguish");
    //     if (/listTrigger/m.test(event.target)){
    //         console.log("x");
    //         console.log($(".listTrigger")[0]);
    //         let x = event.target
    //         $(".downList")[1].classList.add("showList");
    //     }
    //     else if(/fa-cog/m.test(event.target.className) ||  
    //             /downList/m.test(event.target.className) ){
    //         $(".downList")[1].classList.add("showList");
    //     }
    //     else{
    //         $(".downList")[1].classList.remove("showList");
    //     }    
    // }

    // $(".listHover").mouseover(function(){
    //     $(".downList").removeClass("showList");
    //     event.target.classList.add("on-the-top");       
    //     for(i = 0; i < $(".listHover").length; i++){
    //         if(/on-the-top/m.test($(".listHover")[i].className)){
    //             $(".hoverList")[i].classList.add("showList");
    //             $(".listHover").removeClass("on-the-top");
    //         }
    //     }
    // })

    // $(".listHover").mouseout(function(){
    //     $(".hoverList").removeClass("showList");
    // })
    $(".fa-cog").click(function(){
        $(".fa-cog").addClass("fa-spin");
        setTimeout(function(){
            $(".fa-cog").removeClass("fa-spin");
        },3000)
    })

    $(".listTrigger").click(function() {
        event.target.classList.add("it-is-me-Mario")
        for(i = 0; i < $(".listTrigger").length; i++){
            let lT = $(".listTrigger")[i].className; 
            if (/it-is-me-Mario/m.test(lT)){
                $(".downList")[i].classList.toggle("showList");
                $(".listTrigger").removeClass("it-is-me-Mario");
            }else if(/listTrigger/m.test(lT)){
                $(".downList")[i].classList.remove("showList");
            }
        }
    })

    window.onclick = function(){  
        if(/listTrigger/.test(event.target.className)){
        }else{
            $(".downList").removeClass("showList");
            $(".listTrigger").removeClass("it-is-me-Mario")
        }
    }       
})