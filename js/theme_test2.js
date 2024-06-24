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
		


	// 다크 모드
	const themeHandler = document.querySelector('#theme_handler');

	const isUserColorTheme = localStorage.getItem('data-theme');
	const isOsColorTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

	themeHandler.addEventListener('change', ({target}) => {
	document.documentElement.dataset.theme = (target.checked) ? 'dark' : 'light'
	})
	

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
	

});
