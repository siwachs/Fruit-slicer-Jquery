var is_paly=false;
var score;
$(function()
{
    $("#bt").click(
        function()
        {
            if(is_paly)
            {
                is_paly=false;
                location.reload();
            }
            else
            {
                is_paly=true;
                score=0;
                $("#bt").text("Reset");
                //$("#score_var").text(score);
                $("#score_val").html(score);
                //use show or hide method
                
            }
        }
    );
});