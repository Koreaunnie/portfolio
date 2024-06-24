$(function(){
    //상단 공지사항------------------------------------------------
	$(".notice_close").click(function(){
		$("#notice").hide();		
	});
	
	var ticker = function(){
        setTimeout(function(){
            $('#scroll li:first').animate({marginTop: '-20px'}, 400, function(){
                $(this).detach().appendTo('ul#scroll').removeAttr('style');
            });
            ticker();
        }, 3000);
    };
    ticker(); 	

	
	

    //[모바일/태블릿]슬라이드 배너--------------------------------------------------------------
    // $("#slide_banner").slick();
	
	$("#slide_banner").slick({
      dots: true,
      dotsClass : 'slick-dots', //도트 네비 클래스 변경 기본값은 'slick-dots'
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
	  prevArrow : "<button type='button' class='slick-prev'>Previous</button>", //이전 화살표 모양 설정
      nextArrow : "<button type='button' class='slick-next'>Next</button>", //다음 화살표 모양 설정
      dotsClass : "slick-dots",  //도트 네비 페이지네이션 css class 지정
      responsive: [
        {
          breakpoint: 769,
          settings: {
             arrows: true,
             dots: true
          }
        },
		{ 
		  breakpoint: 1920,
		  settings: {	
			 slidesToShow:1 
		  } 
		}
      ]
    });

	
	$("#banner_wrap .indicator li a").on('click',function(e){
		e.preventDefault();
		var num = $(this).parent().index();
		$("#banner_wrap .indicator li").removeClass("on");
		$("#banner_wrap .indicator li").eq(num).addClass("on");
		$("ul#slide_banner a>li>img").stop().fadeOut();
		$("ul#slide_banner a>li>img").eq(num).fadeIn();
	});
	
	$("#banner_wrap #slide_banner").each(function(){
		var num = 0;
		setInterval(function(){
			num++;
			if(num >= 5)num = 0;
			$("ul#slide_banner a img").stop().fadeOut();
			$("ul#slide_banner a img").eq(num).fadeIn();
			$("ul.indicator li").removeClass("on");
			$("ul.indicator li").eq(num).addClass("on");
		}, 5000);
	});
   
   // [모바일] 검색 메뉴----------------------------------------------------------   
	
	$(".searching").click(function(){
	    $(".search_menu").animate({marginLeft:"300px"}, 300); 
		$(".searching").hide();
		$(".search_logo").show(500);
	    $(".search_close").show();	
		$(".search_input").focus();
		$(".menu").animate({marginRight:"-300px"}, 300);
		$(".menu_logo").hide();
	    $(".menu_close").hide();
		$(".hammenu").show();
		 return false;
	});
	
	$(".search_close").click(function(){
		$(".search_menu").animate({marginLeft:"0px"}, 300);
		$(".searching").show();
		 return false;
	});
	
   
   // [모바일] 햄버거 메뉴----------------------------------------------------

    $(".menu_logo").hide();
	$(".menu_close").hide();
	$(".hammenu").click(function(){
	    $(".menu").animate({marginRight:"300px"}, 300); 
		$(".hammenu").hide();
		$(".menu_logo").show();
	    $(".menu_close").show();
		$(".search_menu").animate({marginLeft:"-300px"}, 300);
		$(".searching").show();
		 return false;
	});
	
	$(".menu_close").click(function(){
		$(".menu").animate({marginRight:"0px"}, 300);
		$(".hammenu").show();
		$(".menu_logo").hide();
	    $(".menu_close").hide();
		 return false;
	});
	
	// [PC] 햄버거 메뉴 > 서브 메뉴--------------------------
	var windowWidth = $(window).width();
	if(windowWidth > 959){
		$(".gnb").add();
	}
	$(".gnb>li>a").bind("mouseover focus", function(){
		   $(".gnb ul").hide();
		   $(this).next().show();
		   //선택 된 카테고리 색 변하게 만들기
		  });
		  
		  $(".gnb").mouseleave(function(){
		   $(".gnb ul").stop().slideUp(50);
		  });
	
	

	
	
	
	
	//[PC]로그인 컬러박스-----------------------------------------
	$(".iframe").colorbox({iframe:true, width:"670px", height:"780px"});
	$(".iframe").css("z-index", "999999");
	
	
	
	// [PC] 퀵메뉴------------------------------
	var defaultTop = parseInt($("#quick_menu").css("top"));
	
	$(window).on("scroll", function(){
		var scv = $(window).scrollTop();
		$("#quick_menu").stop().animate({top:scv+defaultTop+"px"},500);
	});
	
	
	
	//[모바일/태블릿]슬라이드 배너--------------------------------------------------------------
    // $("#slide_banner_pc").slick();
	
	$("#slide_banner_pc").slick({
      dots: true,
      dotsClass : 'slick-dots', //도트 네비 클래스 변경 기본값은 'slick-dots'
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
	  prevArrow : "<button type='button' class='slick-prev'>Previous</button>", //이전 화살표 모양 설정
      nextArrow : "<button type='button' class='slick-next'>Next</button>", //다음 화살표 모양 설정 class 지정
      responsive: [
        {
          breakpoint: 769,
          settings: {
             arrows: true,
             dots: true
          }
        },
		{ 
		  breakpoint: 1920,
		  settings: {	
			 slidesToShow:1 
		  } 
		}
      ]
    });

	
	// 관람시간 waypoint
    $(".wp1").waypoint(function(){
    $(".wp1").addClass("animated fadeInDown");
    },{
         offset:"75%"	 
    });
	
	$(".wp2").waypoint(function(){
    $(".wp2").addClass("animated fadeInDown");
    },{
         offset:"75%"	 
    });
	
	$(".wp3").waypoint(function(){
    $(".wp3").addClass("animated fadeInDown");
    },{
         offset:"75%"	 
    });
	
	$(".wp4").waypoint(function(){
    $(".wp4").addClass("animated fadeInDown");
    },{
         offset:"75%"	 
    });
	
	
	// 온라인 미술관
	$(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});
	
	
});
