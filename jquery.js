var is_paly=false;
var score;

$(function(){
    //jquery click is depreted we can use on method to setup a event handler
    $('#bt').on('click',function(){
        if(is_paly){
            location.reload();
        }else{
            is_paly=true;
            $('#bt').text('Reset');
            score=0;
            $('score_val').text(score);
            //use hide and show
            $('#life').show();
        }
    });
});