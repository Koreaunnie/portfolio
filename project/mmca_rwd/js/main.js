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

	
	

    //[�����/�º�]�����̵� ���--------------------------------------------------------------
    // $("#slide_banner").slick();
	
	$("#slide_banner").slick({
      dots: true,
      dotsClass : 'slick-dots', //��Ʈ �׺� Ŭ���� ���� �⺻���� 'slick-dots'
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
	  prevArrow : "<button type='button' class='slick-prev'>Previous</button>", //���� ȭ��ǥ ��� ����
      nextArrow : "<button type='button' class='slick-next'>Next</button>", //���� ȭ��ǥ ��� ����
      dotsClass : "slick-dots",  //��Ʈ �׺� ���������̼� css class ����
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
	
	// [PC] �ܹ��� �޴� > ���� �޴�--------------------------
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
	
	

	
	
	
	
	//[PC]�α��� �÷��ڽ�-----------------------------------------
	$(".iframe").colorbox({iframe:true, width:"670px", height:"780px"});
	$(".iframe").css("z-index", "999999");
	
	
	
	// [PC] ���޴�------------------------------
	var defaultTop = parseInt($("#quick_menu").css("top"));
	
	$(window).on("scroll", function(){
		var scv = $(window).scrollTop();
		$("#quick_menu").stop().animate({top:scv+defaultTop+"px"},500);
	});
	
	
	
	//[�����/�º�]�����̵� ���--------------------------------------------------------------
    // $("#slide_banner_pc").slick();
	
	$("#slide_banner_pc").slick({
      dots: true,
      dotsClass : 'slick-dots', //��Ʈ �׺� Ŭ���� ���� �⺻���� 'slick-dots'
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
	  prevArrow : "<button type='button' class='slick-prev'>Previous</button>", //���� ȭ��ǥ ��� ����
      nextArrow : "<button type='button' class='slick-next'>Next</button>", //���� ȭ��ǥ ��� ���� class ����
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

	
	// �����ð� waypoint
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
	
	
	// �¶��� �̼���
	$(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});
	
	
});
