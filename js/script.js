$(window).on("load", function () {
	$(".loader-wrapper").fadeOut("slow");
	let	currLoc = $(location).attr('href'); 

	// if (window.location.pathname == "/index.html") {
  //   if(currLoc == 'https://yurol-energy.com/index#home' || currLoc == 'https://yurol-energy.com/index#config' || currLoc == 'https://yurol-energy.com/index#contacts' || currLoc == 'https://yurol-energy.com/#home' || currLoc == 'https://yurol-energy.com/#config' || currLoc == 'https://yurol-energy.com/#contacts'){
	// 		$(location).attr('href', 'https://yurol-energy.com/')
	// 	}
	// }
	
	// setTimeout(function(){
	// 	if(currLoc == 'https://yurol-energy.com/index#home' || currLoc == 'https://yurol-energy.com/index#config' || currLoc == 'https://yurol-energy.com/index#contacts' || currLoc == 'https://yurol-energy.com/#home' || currLoc == 'https://yurol-energy.com/#config' || currLoc == 'https://yurol-energy.com/#contacts'){
	// 		$(location).attr('href', 'https://yurol-energy.com/')
	// 	}
	// }, 2000)
})


$(document).ready(function(){

	let dollar = 28.28;




	// top Menu
	$(".trigger, .main-nav li").click(function() {
		$(".trigger").toggleClass('open');
	  $(".main-nav").toggleClass("show");	   
	});

	// send form
	$('form').on("submit", function () {
		let powerText = $('#powerSelect :selected').html();
		let squareText = powerText;
		let boiler_config = $('.main-order .configuration').text();
		let boiler_price = $('.main-order > .price-config').text()

		$('.main-order').append("<input type='hidden' name='boiler_config' value=' " + boiler_config + " '/>");
		$('.main-order').append("<input type='hidden' name='boiler_price' value=' " + boiler_price + " '/>");
		$(this).append("<input type='hidden' name='power' value=' " + powerText + " '/>");
		$(this).append("<input type='hidden' name='square' value=' " + squareText + " '/>");
		$('.thank-you-modal__wrapper').removeClass('show-modal').addClass('show-modal');
		$('.thank-you-modal__wrapper').on("click", function(){
			location.reload();
		})
	});

	//close all
	$('.accordion').click(function(){
		$('.panel').slideToggle();
	})
	$('.close-panel').click(function(){
		$('.panel').slideUp();
	})
	$('.thank-you-modal i, .thank-you-modal, .thank-you-modal__wrapper').click(function(){
		$('.thank-you-modal__wrapper').hide();
	})

	// select range for configurator
	let selection = $(".property-select");
	let squareSelect = $("#squareSelect");  // obj
	let powerSelect = $("#powerSelect");		// obj

	function connect_power_to_select() {
		let powerSelectedIndex = powerSelect.prop("selectedIndex");
		squareSelect.on("change", function(){
			let squareVal = squareSelect.val(); 		// string
			powerSelectedIndex = parseInt(squareVal) - 1;
			powerSelect.prop("selectedIndex", powerSelectedIndex);
		});
	}
	
	function connect_select_to_power() {
		let squareSelectedIndex = squareSelect.prop("selectedIndex");
		powerSelect.on("change", function(){
			let powerVal = powerSelect.val();   		// string
			squareSelectedIndex = parseInt(powerVal) - 1;
			squareSelect.prop("selectedIndex", squareSelectedIndex);
		});
	}


	let configuration = $(".configuration");
	// let home = "Home";
	let pro = "Pro";
	let maxi = "Maxi";
	let configPrice = $(".price-config");
	let orderPrice = $(".price-order");
	let configImg = $(".config-img");
	let newPrice = 1100 * dollar;

	let smoothStart = $(".smooth-start-checkbox");

	function change_price() {
		// basic options
		configuration.text(pro);
		configPrice.text(newPrice);
		orderPrice.text(newPrice); 

		$('.automatics-input, .property-select').on("change", function () {
			if(parseInt(powerSelect.val()) >= 1 && parseInt(powerSelect.val()) <= 4){
				configPrice.text(newPrice); 	
				orderPrice.text(newPrice);
				// if(parseInt(powerSelect.val()) >= 1 && parseInt(powerSelect.val()) <= 2){
				// 	configuration.text(home);
				// 	if($("input:radio[name=automatics]:checked").val() == "Комфорт"){
				// 		configPrice.text(newPrice + Math.floor(130 * dollar)); 	
				// 		orderPrice.text(newPrice + Math.floor(130 * dollar));
				// 	}
				// 	else if($("input:radio[name=automatics]:checked").val() == "Економ"){
				// 		configPrice.text(newPrice);
				// 		orderPrice.text(newPrice);
				// 	}
				// }
				if (parseInt(powerSelect.val()) >= 1 && parseInt(powerSelect.val()) <= 4){
					configuration.text(pro);
					if($("input:radio[name=automatics]:checked").val() == "Комфорт"){
						configPrice.text(newPrice + Math.floor(130 * dollar)); 	
						orderPrice.text(newPrice + Math.floor(130 * dollar));
						configImg.css('background-image', 'url(img/automatics/boiler-comfort.jpg)')
					}
					else if($("input:radio[name=automatics]:checked").val() == "Економ"){
						configPrice.text(newPrice);
						orderPrice.text(newPrice);
						configImg.css('background-image', 'url(img/automatics/boiler-econom.jpg)')
					}
				}
			}
			else if(parseInt(powerSelect.val()) >= 5){
				configuration.text(maxi);
				configPrice.text(newPrice + Math.floor(75 * dollar)); 			
				orderPrice.text(newPrice + Math.floor(75 * dollar));
				if($("input:radio[name=automatics]:checked").val() == "Комфорт"){
					configPrice.text(newPrice + Math.floor(130 * dollar) + Math.floor(75 * dollar)); 	
					orderPrice.text(newPrice + Math.floor(130 * dollar) + Math.floor(75 * dollar));
					configImg.css('background-image', 'url(img/automatics/boiler-comfort.jpg)')
				}
				else if($("input:radio[name=automatics]:checked").val() == "Економ"){
					configPrice.text(newPrice + Math.floor(75 * dollar));
					orderPrice.text(newPrice + Math.floor(75 * dollar));
					configImg.css('background-image', 'url(img/automatics/boiler-econom.jpg)')
				}
			}
		});
	}
	connect_power_to_select();
	connect_select_to_power();
	change_price();
	
	if (window.location.pathname == "/pages/shop.html") {
    $("#shop-accordion").accordion();
	}
	
});