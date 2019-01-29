$(window).scroll(function(){
    var windowDiScroll = $(this).scrollTop();
    // console.log(windowDiScroll);
    if(windowDiScroll>400){
    $('#album .card').each(function(i){
        setTimeout(
            function(){
                $('#album .card').eq(i).addClass('tampil');
            },
            300 * (i+1));
        
        });
    }
}
);