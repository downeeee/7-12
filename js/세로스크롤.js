$(function(){
    var n = 0 //현재 보여지는 section page 인덱스 번호 0 1 2 3 4
    var moving = false ;

    $("html , body").on("mousewheel DOMMouseScroll", function(e){
        // console.log(e)

        var delta = e.originalEvent.wheelDelta //크롬 엣지
        console.log(delta); //-120(down)  +120(up)


        var detail = e.originalEvent.detail //파이어폭스
        console.log(detail);//3(down)   -3(up)

        if(moving == false){
            moving = true;
            var h = $(window).innerHeight()
            console.log("h : ", h);
        
            var cont_top = $(".cont").offset().top;
            console.log("cont_top555 : ", cont_top);
        
        
            //mouse down
            if(delta < 0 || detail >0 ){
        
                if(n < 4){
                    n++;
                    cont_top -= h;
                }//if n( < 4)
                                
                //mouse up
            }else if(delta > 0 || detail <0){
                if(n>0){
                    n--;
                    cont_top += h;
                }//if up down
           }  //mouse down up
            
        }//oving == false
        $(".cont").animate({top : cont_top },500 , function(){
            moving = false ;

            $(".btn_group li").removeClass('on')
            $(".btn_group li").eq(n).addClass("on")
        })
        if(n != 0){
            $(".f_nav").addClass("on")

        }else{$(".f_nav").removeClass("on")}//
        console.log("n :" , n)
        console.log("con_top 3:" , cont_top)
        
    })//mousewheel DOMMouseScroll

    $(".nav a, .f_nav a, .btn_group a").click(function(){
        n=$(this).parent().index()

        if(n != 0){
            $(".f_nav").addClass("on")

        }else{$(".f_nav").removeClass("on")}

        $(".btn_group li").removeClass('on')
        $(".btn_group li").eq(n).addClass("on")
        var con_top = -n * $(window).innerHeight()
        $(".cont").animate({top:con_top},500)
    })//click
    $(window).resize(function(){
        resize();
    })
    function resize(){
        var con_top = -n * $(window).innerHeight()
        $(".cont").css({top :con_top})
        $(".cont .page").css({width:window.innerWidth ,height :window.innerHeight})

    }


    

})//jq end