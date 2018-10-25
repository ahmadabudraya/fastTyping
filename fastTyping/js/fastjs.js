/*global $, alert, console*/

$(function(){
    
    var txt  = "does which dims many of the screen elements from their usual blinding whites its long awaited feature especially from those who work in the evenings not support link building or search engine optimization connect and share with nofollow attribute according to standard google search engine if the parties do not reach an agreed upon solution within a period of sixty days from the time informal dispute resolution is initiated under the initial dispute resolution provision above then either party may initiate binding arbitration as the sole means to resolve claims guidelines people in your community organization team paid links will automatically be given group or club showcase your products and services spotlight your brand and reach more customers on facebook examples are constantly reviewed to avoid errors but we cannot warrant full correctness of all content while using this site you agree to have read and accepted our terms of use cookie and privacy policy";
    var text = txt.split(" ");
    RunUpdate();
    var i = 0,correct=0,wrongs=0, flag=true,min=60;    
    $('input').keyup(function(){
        if(flag){
            countDown();
            flag=false;
        }
        var str  = $('.text span').eq(i).text();
        var inpt = $('input').val();
        var inptLen = inpt.length;
        if(inpt.substr(0,inptLen) != str.substr(0,inptLen)){
            $('.text span').eq(i).addClass('wrong');
        }else {
            $('.text span').eq(i).removeClass('wrong');
        }
        if(str == inpt.substr(0,inptLen-1) && inpt[inptLen-1]==" "){
            correct++;
            $('input').val("");
            $('.text span').eq(i).removeClass('active').next('span').addClass('active');
            $('.text span').eq(i).addClass("yes");
            $('.text span').eq(i).removeClass('wrong');
            console.log(i);
            i++;
        }else if(inpt[0]!=" " && inpt[inptLen-1]==" "){
            wrongs++;
            $('input').val("");
            $('.text span').eq(i).removeClass('active').next('span').addClass('active');
            $('.text span').eq(i).addClass("no");
            $('.text span').eq(i).removeClass('wrong');
            i++;
        }
        var tot = correct+wrongs;
        if(tot > 0 && tot % 28 == 0){
            console.log(tot);
            for(var j = tot-28; j<tot; j++){
                $('.text span').eq(j).hide();
            } 
            for(var k = tot; k<tot+28 && k< text.length; k++){
                $('.text span').eq(k).css("display","inline-block");
            }
        }
        
    });
    $('.reload').click(function() {
        
        RunUpdate();
    });
    var stp;
    function countDown(){
        
        min--;
        if(min<10)$('.time').text("0:0"+min);
        else $('.time').text("0:"+min);
        if(min==0){
            $('.res').html("<br>The correct words : <span class='yes'>"+correct+"</span> <br>The wrong words : <span class='no'>"+wrongs+"</span><br>Accuracy : <b>"+(correct/(correct+wrongs)*100).toFixed(2)+"%</b>");
            $('input').attr("disabled","disabled");
            $('input').val("");
            return;
        }
        stp = setTimeout(countDown,1000);
    }
    function stopTimer(){
        clearTimeout(stp);
    }
    
    function RunUpdate(){
        $('.text').empty();
        text = shuffle(text);
        stopTimer();
        
        for(var x = 0; x<text.length; x++){
            $('.text').append(" <span>"+text[x]+"</span>");
            $('.text span').eq(x).css("display","inline-block");
        }
        for(var y = 28; y<text.length; y++){
            $('.text').append(" <span>"+text[y]+"</span>");
            $('.text span').eq(y).hide();
        }
        i = 0,correct=0,wrongs=0, flag=true,min=60;
        $('.time').text("1:00");
        $('input').val("");
        $('.res').empty();
        $('input').prop("disabled",false);
        $('.text span').eq(i).addClass('active');
    }
    
    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
    
});