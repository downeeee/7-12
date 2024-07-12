$(function(){
    //이미지 첫번째 그림 보이기
    // $('.img_view li').hide()
    // $('.img_view li:nth-child(1)').show()


    // $('.img_view li').hide();
    // $('.img_view li').eq(0).show();

    $('.img_view li').eq(0).siblings().hide()



    //도트
    $('.btn_group li').click(function(){

        var n = $(this).index();

        console.log(n);
        $('.img_view li').hide()
        $('.img_view li').eq(n).show();


        $('.btn_group li').removeClass('act')
        $(this).addClass('act')
    })

    $('.btn_group li a').click(function(){
        var kk = $(this).index()

        console.log('kk : ' , kk)
    })//click
})// jq end