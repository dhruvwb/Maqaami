jQuery(document).ready(function() {
    jQuery('#list').click(function(event){
        event.preventDefault();
        jQuery('#products .item').addClass('list-group-item');
        jQuery('#products .item').removeClass('grid-group-item');
    });
    jQuery('#grid').click(function(event){
        event.preventDefault();
        jQuery('#products .item').removeClass('list-group-item');
        jQuery('#products .item').addClass('grid-group-item');
    });

	$('#home-slider .owl-carousel').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		responsive:{
			0:{
				items:1
			},768:{
				items:1
			},1280:{
				items:1
			}
		}
	});



    $('.deals-items-wrap .owl-carousel').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		responsive:{
			0:{
				items:2,
				nav:false,
			},768:{
				items:2,
				nav:false
			},1280:{
				items:3
			}
		}
	});
	$('.deals-items-full-wrap .owl-carousel').owlCarousel({ 
		loop:true,
		margin:0,
		nav:true,
		responsive:{
			0:{
				items:2,
				nav:false,
			},768:{
				items:4,
				nav:false,
			},1280:{
				items:6
			}
		}
	}); 
	$('.discount-slider.owl-carousel, .inner-slider-one .owl-carousel').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		responsive:{
			0:{
				items:1
			},768:{
				items:1
			},1280:{
				items:1
			}
		}
	});
	$('.ofter-outer-wrap .owl-carousel').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		responsive:{
			0:{
				items:2
			},768:{
				items:2
			},1280:{
				items:3
			}
		}
	});
	$('.noon-slider.owl-carousel').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		responsive:{
			0:{
				items:2,
				nav:false,
			},768:{
				items:4,
				nav:false,
			},1280:{
				items:6
			}
		}
	});

	$('.product-carousel .owl-carousel').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:7
			}
		}
	})
	$('.custom-category-slider.owl-carousel').owlCarousel({
		loop:true,
		margin:20,
		nav:false,
		responsive:{
			0:{
				items:1,
			},
			768:{
				items:1,
				nav:false,
			},
			992:{
				items:2,
				nav:false,
			},
			1000:{
				items:4
			}
		}
	})

   
   
   

	$(".filter-category .filter-category-item .filter-category-title").click(function(){
		$(this).next().slideToggle();
		$(this).toggleClass('close');
	});
	$(".category > span").hover(function () {
        $(".category > span").removeClass("selected");
		$(this).addClass("selected");
	});
	
	$(".mainCategoriesClass").hover(function () {
        $(this).find('.menu').removeClass("show");
		$(this).find('.menu').addClass("show");
	});
	
	$(".QmRAO .swiper-slide").hover(function () {
		$(this).find(".menu.menu_show").toggleClass("menu-active-open");
	});
	
	$(".mob-menu-dropdown").click(function(){
		$(this).next().slideToggle();
	});
	$(".filter-mob").click(function(){
		$(".category-filter-left").toggleClass('category-filter-open');
	});
	
	
	
	//Singal Product Slider
	var galleryTop = new Swiper('.gallery-top', {
		slidesPerView: 1,  
		loop: true,
		loopedSlides: 50,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	var galleryThumbs = new Swiper('.gallery-thumbs', {
		direction: 'vertical',
		slidesPerView: 4,
		slideToClickedSlide: true,
		spaceBetween: 10,
		loopedSlides: 50,
		loop: true,
	});
	galleryTop.controller.control = galleryThumbs;
	galleryThumbs.controller.control = galleryTop;
	
	
	$(".zoom-singal-product").elevateZoom();

});



$(function () {
	$("[data-bs-toggle='tooltip']").tooltip();
});



$(function() {
    var top = $('.singal-product-slider').offset().top - parseFloat($('.singal-product-slider').css('marginTop').replace(/auto/, 0));
    var footTop = $('.product-bottom-section').offset().top - parseFloat($('.product-bottom-section').css('marginTop').replace(/auto/, 0));
    var maxY = footTop - $('.singal-product-slider').outerHeight();
    $(window).scroll(function(evt) {
        var y = $(this).scrollTop();
        if (y > top) {
            
//Quand scroll, ajoute une classe ".fixed" et supprime le Css existant 
            if (y < maxY) {
                $('.singal-product-slider').addClass('fixed').removeAttr('style');
            } else {               
//Quand la sidebar arrive au footer, supprime la classe "fixed" précèdement ajouté
                $('.singal-product-slider').removeClass('fixed').css({
                    position: 'absolute',
                    top: (maxY - top) + 'px'
                });
            }
        } else {
            $('.singal-product-slider').removeClass('fixed');
        }
    });
});

$(function() {
    var top = $('.singal-product-right-block').offset().top - parseFloat($('.singal-product-right-block').css('marginTop').replace(/auto/, 0));
    var footTopRight = $('.product-bottom-section').offset().top - parseFloat($('.product-bottom-section').css('marginTop').replace(/auto/, 0));
    var maxYright = footTopRight - $('.singal-product-right-block').outerHeight();
    $(window).scroll(function(evt) {
        var y = $(this).scrollTop();
        if (y > top) {
            
//Quand scroll, ajoute une classe ".fixed" et supprime le Css existant 
            if (y < maxYright) {
                $('.singal-product-right-block').addClass('fixed').removeAttr('style');
            } else {               
//Quand la sidebar arrive au footer, supprime la classe "fixed" précèdement ajouté
                $('.singal-product-right-block').removeClass('fixed').css({
                    position: 'absolute',
                    top: (maxYright - top) + 'px'
                });
            }
        } else {
            $('.singal-product-right-block').removeClass('fixed');
        }
    });
});



$("#toTop").click(function () {
   $("html, body").animate({scrollTop: 0}, 1000);
});
function wcqib_refresh_quantity_increments() {
    jQuery("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").each(function(a, b) {
        var c = jQuery(b);
        c.addClass("buttons_added"), c.children().first().before('<input type="button" value="-" class="minus" />'), c.children().last().after('<input type="button" value="+" class="plus" />')
    })
}
String.prototype.getDecimals || (String.prototype.getDecimals = function() {
    var a = this,
        b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0
}), jQuery(document).ready(function() {
    wcqib_refresh_quantity_increments()
}), jQuery(document).on("updated_wc_div", function() {
    wcqib_refresh_quantity_increments()
}), jQuery(document).on("click", ".plus, .minus", function() {
    var a = jQuery(this).closest(".quantity").find(".qty"),
        b = parseFloat(a.val()),
        c = parseFloat(a.attr("max")),
        d = parseFloat(a.attr("min")),
        e = a.attr("step");
    b && "" !== b && "NaN" !== b || (b = 0), "" !== c && "NaN" !== c || (c = ""), "" !== d && "NaN" !== d || (d = 0), "any" !== e && "" !== e && void 0 !== e && "NaN" !== parseFloat(e) || (e = 1), jQuery(this).is(".plus") ? c && b >= c ? a.val(c) : a.val((b + parseFloat(e)).toFixed(e.getDecimals())) : d && b <= d ? a.val(d) : b > 0 && a.val((b - parseFloat(e)).toFixed(e.getDecimals())), a.trigger("change")
});








$(function(){
	$("#wizard").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        transitionEffectSpeed: 500,
        labels: {
            finish: "Continue Shopping",
            next: "Forward",
            previous: "Backward"
        }
    });
    $('.wizard > .steps ul li a').click(function(){
    	$(this).parent().addClass('checked');
		$(this).parent().prevAll().addClass('checked');
		$(this).parent().nextAll().removeClass('checked');
    });
    // Custome Jquery Step Button
    $('.forward').click(function(){ 
    	$("#wizard").steps('next');
    })
    $('.backward').click(function(){
        $("#wizard").steps('previous');
    })
	
	
    // Select Dropdown
    $('html').click(function() {
        $('.select .dropdown').hide(); 
    });
    $('.select').click(function(event){
        event.stopPropagation();
    });
    $('.select .select-control').click(function(){
        $(this).parent().next().toggle();
    })    
    $('.select .dropdown li').click(function(){
        $(this).parent().toggle();
        var text = $(this).attr('rel');
        $(this).parent().prev().find('div').text(text);
    })
})




















// the selector will match all input controls of type :checkbox
// and attach a click event handler 
$("input:checkbox").on('click', function() {
    // in the handler, 'this' refers to the box clicked on
    var $box = $(this);
    if ($box.is(":checked")) {
      // the name of the box is retrieved using the .attr() method
      // as it is assumed and expected to be immutable
      var group = "input:checkbox[name='" + $box.attr("name") + "']";
      // the checked state of the group/box on the other hand will change
      // and the current value is retrieved using .prop() method
      $(group).prop("checked", false);
      $box.prop("checked", true);
    } else {
      $box.prop("checked", false);
    }
  });


  $(document).ready(function() {
    // responsive filter toggle start
    $('.left-sidebar .filterlink-btn').on('click', function(){
      $(this).addClass('current');
      $('.sidebar-filter').addClass('active');
    });

    $('.left-sidebar .filterlink-close').on('click', function(){
      $('.sidebar-filter').removeClass('active');
      $('.left-sidebar .filterlink-btn').removeClass('current');
    });
    // responsive filter toggle End

    // Product Video paly on hover
    $(".myvideos").on("mouseover", function(event) {
      this.play();
  
    }).on('mouseout', function(event) {
      this.pause();
  
    });
	
	
	
	$(".shipping-address-block .shipping-address-detail").click(function(){
		$('.shipping-address-block .shipping-address-detail').removeClass('active');
		$(this).addClass('active');
	});
	$(".add-new-address-block").click(function(){
		$(".new-aaddress-detail").slideToggle();
	});
	$(".pay-with-card").click(function(){
		$(".pay-with-card-detail").slideDown();
		$(".pay-with-cash-detail").slideUp();
		$(".pay-with-card").addClass('active');
		$(".pay-with-cash").removeClass('active');
	});
	$(".pay-with-cash").click(function(){
		$(".pay-with-card-detail").slideUp();
		$(".pay-with-cash-detail").slideDown();
		$(".pay-with-card").removeClass('active');
		$(".pay-with-cash").addClass('active');
	});
	
	
	$(".mobile-sign-up-form-btn").click(function(){
		$(".mobile-sign-up-form").slideToggle();
	});
	$(".gift-card-block .gift-card-top p").click(function(){
		$(".gift-card-form").slideToggle();
	}); 
  })