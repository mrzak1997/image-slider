

var now_section =1;
var playing_video=0;
var paused_video=1;
var section_count ;

var timer = 10000;

var video_class;

var firstY,secondY;

$(document).ready(function(){
    
    set_class();
    document.querySelector('.image-slider').addEventListener("touchstart",touchstart_function,false);
    document.querySelector('.image-slider').addEventListener("touchend",touchend_function,false);

    function getTouches(evt) {
        return evt.touches ||             // browser API
               evt.originalEvent.touches; // jQuery
    }  
    function touchstart_function(evt){
        const firstTouch = getTouches(evt)[0];                                      
        //firstX = firstTouch.clientX;                                      
        firstY = firstTouch.clientY; 
    }
    function touchend_function(evt){                                    
        //secondX = secondTouch.clientX;                                      
        secondY = evt.changedTouches[0].clientY; 

        if(firstY<secondY){
            controller("next");
        }else{
            controller("pre");
        }
    }

    var i=0;
    setInterval(function() {
        video_class = ".image-slider .section"+now_section+" video";
        if($(video_class).length){
            video();
        }

        if(playing_video != 1 && paused_video){
            controller('next');
        }
    },timer);
    
});

function set_class(){
    section_count = $('.image-slider .section').length;

    var i=1;
    while(i<= section_count){
        $('.section').first().addClass('section'+i).removeClass('section');
        i++;
    }
    $('.image-slider .section1').css('display','block');
}
function video(){
    if ($(video_class).get(0).paused) {
        playing_video =0;
        paused_video = 1;
        console.log("paused");
    }else{
        playing_video =1;
        paused_video = 0;
        console.log("playing");
    }
}
function controller(className){
    $('.image-slider video').each(function(index){
        $(this).get(0).pause();
    });
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
        now_section = (className=="next") ? 1 : now_section-1;
        $('.image-slider .section'+now_section).css('display','block');
    }
    
}
