$(document).ready(function() {

	var characterChoice;
	var enemyChosen;
	var enemyChosen = false;
	var saberOn = new Audio ('./assets/audio/SaberOn.mp3');

	var characters =  [
		yoda = {
			name: "#yoda",
			healthPower: 100,
			attackPower: 20
		},
		luke = {
			name: "#luke",
			healthPower: 150,
			attackPower: 15
		},
		kylo = {
			name: "#kylo",
			healthPower: 140,
			attackPower: 18
		},
		vader = {
			name: "#vader",
			healthPower: 160,
			attackPower: 25
		},
	];
	

	(function ($) {
   		$.extend({
       		playSound: function () {
           	 return $(
            	       '<audio class="sound-player" autoplay="autoplay" style="display:none;">'
                     + '<source src="' + arguments[0] + '" />'
                     + '<embed src="' + arguments[0] + '" hidden="true" autostart="true" loop="false"/>'
                   + '</audio>'
                 ).appendTo('body');
        },
        stopSound: function () {
            $(".sound-player").remove();
        }
    });
})(jQuery);

	// var  characterChoice = characters [];

	// var attack = characterChoice["health"] - ["attack"];

});
		// function chooseCharacter {
		// 	characterChoice = true;
		// 	character = char;
		// 	console.log(result);

		// }

		$("#yoda_div").click(function() {
			$("h1").text("Your Character");
			$("#vader_div").prependTo("#enemies");
			$("#kylo_div").prependTo("#enemies");
			$("#luke_div").prependTo("#enemies");
			chooseCharacter(yoda);
			$.playSound('./assets/audio/SaberOn.mp3');


		});

		$("#vader_div").click(function() {
			$("h1").text("Your Character");
			$("#yoda_div").prependTo("#enemies");
			$("#kylo_div").prependTo("#enemies");
			$("#luke_div").prependTo("#enemies");
			chooseCharacter(vader);

		});

		$("#kylo_div").click(function() {
			$("h1").text("Your Character");
			$("#yoda_div").prependTo("#enemies");
			$("#vader_div").prependTo("#enemies");
			$("#luke_div").prependTo("#enemies");
			chooseCharacter(kylo);

		});

		$("#luke_div").click(function() {
			$("h1").text("Your Character");
			$("#yoda_div").prependTo("#enemies");
			$("#kylo_div").prependTo("#enemies");
			$("#vader_div").prependTo("#enemies");
			chooseCharacter(luke);

		});

	$("#attack_button").click(function() {
		var healthPower = this.healthPower - this.attackPower;

	});
	function chooseCharacter(char){
		characterChoice = true;
		character = char;
		console.log(character);
	}
	function chooseEnemy(char){
		if(enemyChosen == false){
			opponent = char;
			enemyChosen = true;
		}
	}

	
// $(document).ready(function() {
// $("#yoda").click(function() {
// 	$("#luke", "#vader", "#kylo").appendTo($("#enemies"));
// });
