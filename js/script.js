$(function(){


/*===============================
=            General            =
===============================*/




/*=====  End of General  ======*/



/*==================================
=            Navigation            =
==================================*/


// Adding listen events to each nav item
$('a.nav-item').on('click',(event)=>{
	$('html, body').animate({
		scrollTop: $($(event.target).attr('href')).offset().top
	}, 1000)
	if(is_toggle_nav_bar()) toggle_nav_bar()
})



// Set nav-menu to the outside of the window of its height
$('.nav-menu').css("top", -$('.nav-menu').height())

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

	let menu=$('.nav-menu')
	
	// if navbar is ALREADY active / expanded
	if(is_toggle_nav_bar()){
		menu.animate({ 
			top: menu.height()*(-1)
		},'1000')

		// remove active class after 1s, the complete functio does not work.
		setTimeout(()=>{
			menu.removeClass('is-active')
			$('.nav-toggle').removeClass('is-active')
			console.log("close");
		},'1000')

	}

	// if navbar is NOT active / expanded	
	if(!is_toggle_nav_bar()){
		menu.toggleClass('is-active').animate({ 
			top: $('.nav').height()
		})
		$('.nav-toggle').addClass('is-active')
			console.log("oepn");

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


});
