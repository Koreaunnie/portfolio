$(document).ready(function() {
	// cursor 이동
	const cursor = document.querySelector('.cursor');
	
	document.addEventListener('mousemove', (e) => {
		cursor.style.left = e.pageX + 'px';
		cursor.style.top = e.pageY + 'px';
	});


	// cursor가 버튼 만나면 hover
	// const cursor_hover = document.querySelector('.cursor_hover');

	// cursor_hover.addEventListener('mouseover', ()=>{
	// 	cursor.style.border = '2px solid red';
	// 	cursor.style.width = '1.5em';
    // 	cursor.style.height = '1.5em';
	// 	cursor.innerText = 'Click!';
	// });

	// cursor_hover.addEventListener('mouseout', ()=>{
	// 	cursor.style.border = '4px solid red';
	// 	cursor.style.width = '0';
	// 	cursor.style.height = '0';
	// 	cursor.innerText = '';
	// });


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
	$("#ham_btn").click(function(){
		$("#gnb_wrap").stop().toggleClass("open");
	});

	// 다크 모드
	const themeHandler = document.querySelector('#theme_handler');


	themeHandler.addEventListener('change', ({target}) => {
	document.documentElement.dataset.theme = (target.checked) ? 'dark' : 'light'
	})
	

	const isUserColorTheme = localStorage.getItem('data-theme');
	const isOsColorTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';


	// 다크 모드 사용자 선택을 로컬 정보로 저장하기
	document.getElementById('theme_toggle').addEventListener("click", ()=>{ //다크모드 토글 클릭 발생
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



    //[project] slick 슬라이드
	$('.slick-slider').slick({
		dots: true,					
        infinite: true,
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 3,
		responsive: [						// 반응형 웹 구현 옵션
		  {
			breakpoint: 768,				//화면 사이즈
			settings: {						//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
			  arrows: false,
			  centerMode: true,
			  centerPadding: '40px',
			  slidesToShow: 3
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  arrows: false,
			  centerMode: true,
			  centerPadding: '40px',
			  slidesToShow: 1
			}
		  }
		]
	  });


	//[project] 팝업
	// 열기
	function openPopup(obj){
		$(".layer_pop").hide();
		$(obj).show();
	}

	//닫기
	function closePopup(obj){
		$(obj).hide();
	}




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





	// [project] 바로가기 버튼
	const btnEl = document.querySelector(".click_btn");

	btnEl.addEventListener("mouseover", (event)=>{
		const x = (event.pageX - btnEl.offsetLeft);
		const y = (event.pageY - btnEl.offsetTop);

		btnEl.style.setProperty("--xPos", x + "px");
		btnEl.style.setProperty("--yPos", y + "px");
	});



	// [contact] typing 스크립트
	var typed = new Typed('.typed', {
		strings: ["Designer", "Second sentence."],
		typeSpeed: 30
	  });





});
