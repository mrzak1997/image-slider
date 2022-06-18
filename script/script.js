

var now_section =1;
var section_count ;

$(document).ready(function(){

    section_count = $('.image-slider .section').length;

    var i=1;
    while(i<= section_count){
        $('.section').first().addClass('section'+i).removeClass('section');
        i++;
    }
    $('.image-slider .section1').css('display','block');
    
    var start = new Date;

    setInterval(function() {
        // $('.Timer').text((new Date - start) / 1000 + " Seconds");
        controller('next');
    }, 5000);
});


function controller(className){
    if(now_section < section_count){
        if(className == "next"){
            $('.image-slider .section'+now_section).css('display','none');
            now_section++;
            $('.image-slider .section'+now_section).css('display','block');
        }else{
            $('.image-slider .section'+now_section).css('display','none');
            if(now_section==1)
                now_section = section_count;
            else
                now_section--;
            $('.image-slider .section'+now_section).css('display','block');
        }
    }else{
        $('.image-slider .section'+now_section).css('display','none');
        now_section=1;
        $('.image-slider .section'+now_section).css('display','block');
    }
    
}