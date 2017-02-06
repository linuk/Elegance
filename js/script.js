$(function(){

/*===============================
=            General            =
===============================*/



/*=====  End of General  ======*/



/*==================================
=            Navigation            =
==================================*/


// Adding listen events to each nav item
$('a').on('click',(event)=>{
	$('html, body').animate({
		scrollTop: $($(event.target).data('href')).offset().top
	}, 1000)
	if(is_toggle_nav_bar()) toggle_nav_bar()
})



// Set nav-menu to the outside of the window of its height
// $('.nav-menu').css("top", -$('.nav-menu').height())

// Whenever the toggle icon is clicked
$('.nav-toggle').on('click',()=>{
	toggle_nav_bar()
})

// check if the navbar is collapsed 
function is_toggle_nav_bar(){
	if( $('.nav-menu').hasClass('is-active') && $('.nav-toggle').hasClass('is-active')) { return true }
	else { return false }
} 

function toggle_nav_bar(){

	let menu = $('div.nav-menu')
	let toggle = $('.nav-toggle')
	
	// if navbar is ALREADY active / expanded
	if( !$(toggle).hasClass('is-active') && !$(menu).hasClass('is-active')){
		$(toggle).addClass('is-active')
		$(menu).addClass('animated fadeInDown is-active')
	}	

	// if navbar is NOT active / expanded	
	else if($(toggle).hasClass('is-active') && $(menu).hasClass('is-active')){
		
		let animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		$(menu).addClass('fadeOutUp').one(animationEnd,()=>{
			$(menu).removeClass('is-active animated fadeInDown fadeOutUp')
			$(toggle).removeClass('is-active')
		})
	}

}

/*=====  End of Navigation  ======*/


/*==============================
=            Banner            =
==============================*/


/*----------  explore button  ----------*/
$("#explore").click(function() {
    $('html, body').animate({
        scrollTop: $("#features").offset().top
    }, 1000);
});





/*=====  End of Banner  ======*/



/*================================
=            Features            =
================================*/



/*=====  End of Features  ======*/



/*=============================
=            About            =
=============================*/



/*=====  End of About  ======*/



/*====================================
=            Testimonials            =
====================================*/



/*=====  End of Testimonials  ======*/



/*===============================
=            Contact            =
===============================*/



/*=====  End of Contact  ======*/



/*==============================
=            Footer            =
==============================*/



/*=====  End of Footer  ======*/



/*=================================
=            Animation            =
=================================*/

// Animate in banner page after the document is ready
$('.start-animation').each((i,item)=>{
	let animation = $(item).data('animation')
	$(item).addClass('animated '+animation)	
})


// scroll to specific element in the page 
$(document).on('scroll',()=>{	
	function is_in_the_view(element)
    {
    	let offset_from_top = 0.8
		let window_view_top = $(window).scrollTop()
		let window_view_bottom = window_view_top + $(window).height()*offset_from_top
        let element_top = $(element).offset().top
        return ((element_top <= window_view_bottom) && (element_top >= window_view_top))
    }

	$('.animation').each((i,item)=>{
		if(is_in_the_view(item)){
			let animation = $(item).data('animation')
			$(item).addClass('animated '+animation)
		}
	})	

})




/*=====  End of Animation  ======*/



});
