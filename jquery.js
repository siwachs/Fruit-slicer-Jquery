var is_paly=false;
var score;
var trials_got;
var array=['apple','banana','grapes'];
var step;
var go_down;

$(function(){
    //jquery click is depreted we can use on method to setup a event handler
    $('#bt').on('click',function(){
        if(is_paly){
            location.reload();
        }else{
            is_paly=true;
            $('#bt').text('Reset');
            //or use html

            score=0;
            $('score_val').text(score);
            //use hide and show
            $('#life').show();
            $('#game_over').hide();
            trials_got=3;
            
            addLife();
            startGame();
        }
    });

function addLife(){
    $('#life').empty();
    for(i=0;i<trials_got;i++){
        //use append method
        $('#life').append('<img src="./img/life.jpg" class="life">');
    }
}

function startGame(){
    //$('#display').append('<img src="./img/apple.png">');
    //this lead to memory issue so to solve we add element in our htm and hide it

    createFruit();
    
    go_down=setInterval(function(){
        
        $('#fruit1').css('top',$('#fruit1').position().top +step);

        //check fruit is to low
        if(check()){
            if(trials_got > 1){
                trials_got-=1;
                addLife();
                createFruit();
            }else{
                is_paly=false;
                $("#game_over").show();
                $("#bt").html('Start');
                $('#game_over').html('<p>Game Over!</p> <p>your score is ' +score+'</p>');

                $('#life').hide();

                stopGame();
            }
        };
    },10);

}

//use on for all type of listners
$('#fruit1').on('mouseover',function(){
    score++;
    $('#score_val').html(score);
    
    $('#play_sound')[0].play();
    //use jquery selecter return a array

    clearInterval(go_down);
    $('#fruit1').hide('explode',500);
    //the above function need package jquery-ui

    //wait before anim finished
    setTimeout(startGame,500);
});

function chooseFruit(){
    $('#fruit1').attr('src','img/'+array[Math.round(2*Math.random())]+'.png');

    //give number b/w 0 to 3
}

function check(){
    var height=$('#display').height();
    var fruit_top=$('#fruit1').position().top;
    if(fruit_top >height){
        return true;
    }
    return false;
}

function createFruit(){
    chooseFruit();
    $('#fruit1').show();

    var width=$('#display').width();

    $('#fruit1').css({'left':Math.round(width*Math.random()-20),'top':-100});

    step=1+Math.round(5*Math.random());

    //move down by one step in every 10ms
}

function stopGame(){
    clearInterval(go_down);
    $('#fruit1').hide();
}

});
//must put all code in document function because by doing it our code exe after page fully load