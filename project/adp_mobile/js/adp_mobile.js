$(function(){
	
    // header
	$(function(){
         $(".hamburger").click(function(){
		     $(".gnb").slideToggle("slow", function(){
			     $(".hamburger").show();
				 $(".search").show();
			 });
		 });	   
		 
		 $(".search").click(function(){
		     $(".gnb").slideToggle("slow", function(){
			     $(".cross").show();
				 $(".hamburger").show();
			 });
		 });
		 
	   });
		
    //menu button
	$(".gnb >ul >li> a").click(function(){
		if($(this).next().is(":visible")){
			$(this).next().stop().slideUp(500);
			$(this).children("img").attr("src", "img/arrow_down.png");
			}else{
				$(".sub").stop().slideUp(500);
				$(".gnb >ul >li> a").children("img").attr("src","img/arrow_down.png");
			    $(this).next().stop().slideDown(500);
			    $(this).children("img").attr("src","img/arrow_up.png");
				};	
		});
	



	
	// scroll top
	$(window).scroll(function(){
		var ss = $(".scrolltop");
		if($(this).scrollTop() >= 1000){
			$(".scrolltop").stop().fadeIn(500);
			}else{
				$(".scrolltop").stop().fadeOut(500);
			}
	});
	
	$('.scrolltop ul a').click(function(e){
		$.scrollTo(this.hash||0, 1500);
		e.preventDefault();
	});


	

	// 이번주 인기상품 bx slide
	$(".slide_box").bxSlider({
         minSlides: 3,
         maxSlides: 3,
         moveSlides: 1,
         auto: true,
		 speed: 600,
		 infiniteLoop: true,
         slideWidth: 257,
         slideMargin: 5,
         nextText: '',
         prevText: '',
         autoHover: true,
         autoStart: true,
         autoDelay: 0,
         pager: false
 });
	
	// 카멜리아 waypoint
	$(".wp_camelia").waypoint(function(){
    $(".wp_camelia").addClass("animated fadeInLeft");
    },{
         offset:"85%"	 
    });
	
	// 홈 프레그런스 waypoint
	$(".wp1").waypoint(function(){
    $(".wp1").addClass("animated fadeInDown");
    },{
         offset:"85%"	 
    });
	
    $(".wp2").waypoint(function(){
    $(".wp2").addClass("animated fadeInDown2");
    },{
         offset:"85%"	 
    });
	
	// 매장 혜택 waypoint
	$(".wp3").waypoint(function(){
    $(".wp3").addClass("animated fadeInLeft");
    },{
         offset:"85%"	 
    });
		
	$(".wp4").waypoint(function(){
    $(".wp4").addClass("animated fadeInRight");
    },{
         offset:"85%"	 
    });
	
	// 브랜드 세계관 waypoint
	$(".wp_brand").waypoint(function(){
    $(".wp_brand").addClass("animated fadeInUp");
    },{
         offset:"85%"	 
    });
	
	// footer waypoint
	$(".wp_footer").waypoint(function(){
    $(".wp_footer").addClass("animated fadeInUp");
    },{
         offset:"85%"	 
    });
});
