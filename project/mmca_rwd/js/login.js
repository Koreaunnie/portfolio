$(function(){
	$(function(){
	 //��� ��������------------------------------------------------
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

	
	
   
   // [�����] �˻� �޴�----------------------------------------------------------   
	
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
	
   
   // [�����] �ܹ��� �޴�----------------------------------------------------

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
	
	// [�����] �ܹ��� �޴� > ���� �޴�----------------------------------------------------
	var windowWidth = $(window).width();
	if(windowWidth > 959){
		$(".gnb").add();
	}
	$(".gnb>li>a").bind("mouseover focus", function(){
		   $(".gnb ul").hide();
		   $(this).next().show();
		   //���� �� ī�װ� �� ���ϰ� �����
		  });
		  
		  $(".gnb").mouseleave(function(){
		   $(".gnb ul").stop().slideUp(50);
		  });
	

	
	// [PC] ���޴�------------------------------
	var defaultTop = parseInt($("#quick_menu").css("top"));
	
	$(window).on("scroll", function(){
		var scv = $(window).scrollTop();
		$("#quick_menu").stop().animate({top:scv+defaultTop+"px"},500);
	});
	

});

	
	// �α��� ���------------------------------
	$(".close").click(function(){
		$("#join").remove();		
		$("rwdpf_lhj.html").open();	
	});
	
	$(".btn_cancel").click(function(){
		$("#join").hide();		
	});

});

