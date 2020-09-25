
$(document).ready(function(){
	// top Menu
	$(".trigger").click(function() {
		$(this).toggleClass('open');
	    $(".main-nav").toggleClass("show");	   
	});

	

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
	let home = "Home";
	let pro = "Pro";
	let maxi = "Maxi";
	let configPrice = $(".price-config");
	let orderPrice = $(".price-order");
	let newPrice = 16000;

	let automatic = $(".automatic-label");
	let automaticName = $(".automatic-name");

	let smoothStart = $(".smooth-start-checkbox");

	function change_price() {
		// basic options
		configuration.text(home);
		configPrice.text(newPrice);
		orderPrice.text(newPrice); 

		selection.on("change", function () {
			if (parseInt(powerSelect.val()) == 1){
				configuration.text(home);
				configPrice.text(newPrice); 			
				orderPrice.text(newPrice); 
			}
			else if (parseInt(powerSelect.val()) == 2){
				configuration.text(home);
				configPrice.text(newPrice + 1000); 	
				orderPrice.text(newPrice + 1000); 		
			}
			else if (parseInt(powerSelect.val()) == 3){
				configuration.text(pro);
				configPrice.text(newPrice + 2000); 	
				orderPrice.text(newPrice + 2000); 		
			}
			else if (parseInt(powerSelect.val()) == 4){
				configuration.text(pro);
				configPrice.text(newPrice + 3000); 		
				orderPrice.text(newPrice + 3000); 	
			}
			else if (parseInt(powerSelect.val()) == 5){
				configuration.text(pro);
				configPrice.text(newPrice + 4000); 			
				orderPrice.text(newPrice + 4000); 
			}
			else if (parseInt(powerSelect.val()) == 6){
				configuration.text(pro);
				configPrice.text(newPrice + 5000); 			
				orderPrice.text(newPrice + 5000); 
			}
			else if (parseInt(powerSelect.val()) == 7){
				configuration.text(maxi);
				configPrice.text(newPrice + 6000); 			
				orderPrice.text(newPrice + 6000); 
			}
			else if (parseInt(powerSelect.val()) == 8){
				configuration.text(maxi);
				configPrice.text(newPrice + 7000); 			
				orderPrice.text(newPrice + 7000); 
			}
			else if (parseInt(powerSelect.val()) == 9){
				configuration.text(maxi);
				configPrice.text(newPrice + 8000); 			
				orderPrice.text(newPrice + 8000); 		}
			else if (parseInt(powerSelect.val()) == 10){
				configuration.text(maxi);
				configPrice.text(newPrice + 9000); 			
				orderPrice.text(newPrice + 9000); 
			}
			else if (parseInt(powerSelect.val()) == 11){
				configuration.text(maxi);
				configPrice.text(newPrice + 10000); 			
				orderPrice.text(newPrice + 10000); 
			}
		});

		automatic.on("change", function(){
			console.log(automaticName.is(':checked').text());
		})

		// smoothStart.on("change", function (){
		// 	if ($(this).is(':checked')) {
				
		// 	} else {
		// 		configPrice.text(newPrice); 	
		// 	}
		// });
	}
	
	
	

	connect_power_to_select();
	connect_select_to_power();
	change_price();
	
	

	

	$('.accordion').click(function(){
		$('.panel').slideToggle();
	})
	$('.close-panel').click(function(){
		$('.panel').slideUp();
	})
	


	
});