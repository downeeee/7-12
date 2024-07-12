$(function(){
    $('.list li').click(function(){
        $(this).children('a').addClass('bg')
    })//list click

    $('.list li').mouseleave(function(){
        $(this).find('a').removeClass('bg');
    })//mouseleave


    $('.list1 li a').click(function(){
        $(this).toggleClass('txt');

    })


    $('.list2 li a').hover(function(){
        $(this).addClass('box_over')
    },function(){
        $(this).removeClass('box_over')

    })


    $('.list3 li a').hover(function(){
        $(this).toggleClass('grid_b')
    })
})//jq end