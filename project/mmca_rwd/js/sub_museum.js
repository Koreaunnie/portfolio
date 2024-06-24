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
	
	
	
	//[PC]로그인 컬러박스-----------------------------------------
	$(".iframe").colorbox({iframe:true, width:"670px", height:"780px"});
	$(".iframe").css("z-index", "999999px");
	
	
	
	// [PC] 퀵메뉴------------------------------
	var defaultTop = parseInt($("#quick_menu").css("top"));
	
	$(window).on("scroll", function(){
		var scv = $(window).scrollTop();
		$("#quick_menu").stop().animate({top:scv+defaultTop+"px"},500);
	});
	
	
	
	// 온라인 미술관------------------------------
	
	 var $imgs = $('.gallery img');                  // Store all images
  var $buttons = $('.buttons');                   // Store buttons element
  var tagged = {};                                // Create tagged object

  $imgs.each(function() {                         // Loop through images and
    var img = this;                               // Store img in variable
    var tags = $(this).data('tags');              // Get this element's tags

    if (tags) {                                   // If the element had tags
      tags.split(',').forEach(function(tagName) { // Split at comma and
        if (tagged[tagName] == null) {            // If object doesn't have tag
          tagged[tagName] = [];                   // Add empty array to object
        }
        tagged[tagName].push(img);                // Add the image to the array
      });
    }
  });

  $('<button>', {                                 // Create empty button
    text: 'Show All',                              // Add text 'show all'
    class: 'active',                               // Make it active
    click: function() {                            // Add onclick handler to
      $(this)                                      // Get the clicked on button
        .addClass('active')                        // Add the class of active
        .siblings()                                // Get its siblings
        .removeClass('active');                    // Remove active from siblings
      $imgs.show();                                // Show all images
    }
  }).appendTo($buttons);                           // Add to buttons

  $.each(tagged, function(tagName) {               // For each tag name
    $('<button/>', {                               // Create empty button
      text: tagName + ' (' + tagged[tagName].length + ')', // Add tag name
      click: function() {                          // Add click handler
        $(this)                                    // The button clicked on
          .addClass('active')                      // Make clicked item active
          .siblings()                              // Get its siblings
          .removeClass('active');                  // Remove active from siblings
        $imgs                                      // With all of the images
          .hide()                                  // Hide them
          .filter(tagged[tagName])                 // Find ones with this tag
          .show();                                 // Show just those images
      }
    }).appendTo($buttons);                         // Add to the buttons
  });
	
	
	

	
});
