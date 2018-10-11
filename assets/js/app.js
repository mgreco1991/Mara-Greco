$(document).ready(function(){
	$('.menu-icon').on('click', function(){
		var menuIsClosed = true
		if (menuIsClosed === true){
			$('.dropdown-content').css('display', 'block');
			menuIsClosed = false;
			console.log(menuIsClosed);
				if (menuIsClosed === false){
					$('.menu-icon').on('click', function(){
					$('.dropdown-content').css('display', 'none');
					menuIsClosed = true;
					console.log(menuIsClosed);
				});
			}
		}
		 else if (menuIsClosed === true) {
					$('.menu-icon').on('click', function(){
					$('.dropdown-content').css('display', 'block');
					menuIsClosed = true;
					console.log(menuIsClosed);
				});
			}
	});
});