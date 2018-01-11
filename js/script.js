/*var hwSlideSpeed = 200;
var hwTimeOut = 300;
var hwNeedLinks = true;


$(document).ready(function(e) {
    $('.slide').hide().eq(0).show();
    var slideNum = 0;
    var slideTime;
    var slideCount = $(".slide").length;
    var animSlide = function(arrow){
        clearTimeout(slideTime);
        $('.slide').eq(slideNum).fadeOut(hwSlideSpeed);
		
		if(slideNum == (slideCount-1)){slideNum=0;}
		
        if(arrow == "next"){
            if(slideNum == (slideCount-1)){slideNum=0;}
            else{slideNum++}
            }
        else if(arrow == "prew")
        {
            if(slideNum == 0){slideNum = slideCount - 1;}
            else{slideNum-=1}
        }
        else{
            slideNum = arrow;
            }
    }
		
	if(hwNeedLinks){
		var $linkArrow = $('<a id="prewbutton" href="#"><</a><a id="nextbutton" href="#">></a>')
		.prependTo('.slideshow');      
		$('#nextbutton').click(function(){
			animSlide("next");
 
		})
		$('#prewbutton').click(function(){
			animSlide("prew");
        })
	}
    var $adderSpan = '';

    var pause = false;
    var rotator = function(){
    if(!pause){slideTime = setTimeout(function(){animSlide('next')}, hwTimeOut);}
            }
    $('#slider-wrap').hover(
        function(){clearTimeout(slideTime); pause = true;},
        function(){pause = false; rotator();
        });
    rotator();
});

*/


window.onload = function () {
    
    new Slider({
        images: '.slideshow1 .slide',
        btnPrev: '#prewbutton1',
        btnNext: '#nextbutton1',
        auto: false
    });
    
	/*new Slider({
        images: '.gallery-2 img',
        btnPrev: '.gallery-2 .buttons .prev',
        btnNext: '.gallery-2 .buttons .next',
        auto: true,
        rate: 2000
    });*/
}


function Slider(obj) {
    this.images = document.querySelectorAll(obj.images);
		
	this.auto = obj.auto;
		
	this.btnPrev = obj.btnPrev;
	this.btnNext = obj.btnNext;
    
    this.rate = obj.rate || 1000;
	
	var i = 0;
    
    var slider = this;

	this.prev = function () {
		slider.images[i].classList.remove('showed');
		i--;

		if (i < 0) {
			i = slider.images.length - 1;
		}

		slider.images[i].classList.add('showed');
	}

	this.next = function () {
		slider.images[i].classList.remove('showed');
		i++;

		if (i >= slider.images.length) {
			i = 0;
		}

		slider.images[i].classList.add('showed');
	}
	
    document.querySelector(slider.btnPrev).onclick = slider.prev;
    document.querySelector(slider.btnNext).onclick = slider.next;
		
	if(slider.auto)	{
        setInterval(slider.next, slider.rate);
    }
}

