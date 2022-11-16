$(function(){
	
    // header
	$('#fullpage').fullpage({
		licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
		autoScrolling: true,
		verticalCentered: true,
		scrollingSpeed: 700,   // 기본값 700
		navigation: true,
		navigationPosition: 'right'
	});
		
	// ham_btn open
	$(".gnb>.ham_btn").click(function(){
		if($(this).next().is(":visible")){
			$(".gnb>.ham_btn").addClass('open');
		}else{
			$(".gnb>.ham_btn").removeClass('open');
		};
	});





	// 다크 모드
	const themeHandler = document.querySelector('#theme_handler');


	themeHandler.addEventListener('change', ({target}) => {
	document.documentElement.dataset.theme = (target.checked) ? 'dark' : 'light'
	})
	

	const isUserColorTheme = localStorage.getItem('data-theme');
	const isOsColorTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';


	// 다크 모드 사용자 선택을 로컬 정보로 저장하기
	document.getElementById('toggle').addEventListener("click", ()=>{ //다크모드 토글 클릭 발생
		let colorMode = localStorage.getItem("colorMode");
	
		if(colorMode == 'dark'){ // 현재 값이 다크모드이면
			localStorage.setItem("colorMode", "light");
			document.body.classList.remove("dark-mode");
		}else{
			localStorage.setItem("colorMode", "dark");
			document.body.classList.add("dark-mode");
		}
	},false);


	


	// 주/야간 시간대에 따라 다크 모드 자동 전환하기
	const hour = +new Date().toLocaleTimeString([],{ hour: '2-digit', hour12: false });//24시간 시간 값만 얻음
		if (7 <= hour && hour < 18) { // 오전 7이 이상, 저녁 6시 미만
			document.body.classList.add("light-mode");
		} else {
			document.body.classList.add("dark-mode");
		}
	

	// css media query 동작과 유사하게, 시스템의 컬러모드가 변경될 때 마다 이를 웹에 반영해 줄 수도 있습니다.
	const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
	mediaQueryList.addEventListner('change', (e) => {
	if(e.matches){
		window.document.body.classList.add('dark')
	} else {
		window.document.body.classList.remove('dark')
	}
	})


		
    // menu button
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
	
	

  	//  typed js
  	var typed = $(".typed");

	$(function() {
		typed.typed({
		strings: ["Alex Smith.", "Designer.", "Developer.", "Freelancer.", "Photographer"],
		typeSpeed: 100,
		loop: true,
		});
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
	

});
