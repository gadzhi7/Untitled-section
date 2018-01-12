window.onload = function () {
	
	
$('.slide-button').click(function (event) {
	event.preventDefault();
});

	
	
    new Slider({
        images: '.slideshow1 .slide1',
        btnPrev: '#prewbutton1',
        btnNext: '#nextbutton1',
        auto: true,
		rate: 5000
    });
	
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

			
jQuery(document).ready(function(){
 function htmSlider(){
  var slideWrap = jQuery('.slideshow2__inner');
  var nextLink = jQuery('#nextbutton2');
  var prevLink = jQuery('#prewbutton2');
  var slideWidth = jQuery('.slide2').outerWidth();
  var scrollSlider = slideWrap.position().left - slideWidth * 4;
		
  nextLink.click(function(){
   if(!slideWrap.is(':animated')) {
    slideWrap.animate({left: scrollSlider}, 500, function(){
     slideWrap
      .find('.slide2:first')
      .appendTo(slideWrap)
      .parent()
      .css({'left': 0});
    });
   }
  });

  prevLink.click(function(){
   if(!slideWrap.is(':animated')) {
    slideWrap
     .css({'left': scrollSlider})
     .find('.slide2:last')
     .prependTo(slideWrap)
     .parent()
     .animate({left: 0}, 500);
   }
  });

};
 
 htmSlider();
});



			
jQuery(document).ready(function(){
 function htmSlider1(){
  var slideWrap1 = jQuery('.slideshow3__inner');
  var nextLink1 = jQuery('#nextbutton3');
  var prevLink1 = jQuery('#prewbutton3');
  var slideWidth1 = jQuery('.slide3').outerWidth();
  var scrollSlider1 = slideWrap1.position().left - slideWidth1 * 4;
		
  nextLink1.click(function(){
   if(!slideWrap1.is(':animated')) {
    slideWrap1.animate({left: scrollSlider1}, 500, function(){
     slideWrap1
      .find('.slide3:first')
      .appendTo(slideWrap1)
      .parent()
      .css({'left': 0});
    });
   }
  });

  prevLink1.click(function(){
   if(!slideWrap1.is(':animated')) {
    slideWrap1
     .css({'left': scrollSlider1})
     .find('.slide3:last')
     .prependTo(slideWrap1)
     .parent()
     .animate({left: 0}, 500);
   }
  });
		
  function autoplay1(){
   if(!is_animate1){
    is_animate1 = true;
    slideWrap1.animate({left: scrollSlider1}, 500, function(){
     slideWrap1
      .find('.slide3:first')
      .appendTo(slideWrap)
      .parent()
      .css({'left': 0});
     is_animate1 = false;
    });
   }
  }
 }		

 htmSlider1();
});
		
