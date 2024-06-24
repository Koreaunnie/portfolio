$(function(){
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
	
	// [모바일] 햄버거 메뉴 > 서브 메뉴----------------------------------------------------
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
	

	
	// [PC] 퀵메뉴------------------------------
	var defaultTop = parseInt($("#quick_menu").css("top"));
	
	$(window).on("scroll", function(){
		var scv = $(window).scrollTop();
		$("#quick_menu").stop().animate({top:scv+defaultTop+"px"},500);
	});
	

});

	
	// 로그인 취소------------------------------
	$(".close").click(function(){
		$("#join").remove();		
		$("rwdpf_lhj.html").open();	
	});
	
	$(".btn_cancel").click(function(){
		$("#join").hide();		
	});

});

