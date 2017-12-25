$(document).ready(function() {

	var characterChoice;
	var enemyChosen;
	var enemyChosen = false;
	var characterChosen = false;
	var saberOn = new Audio ('./assets/audio/SaberOn.mp3');
	var opponents = [];

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

	var characterChoice = null;
	var oppnent = null;
	

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
        unbindSound: function () {
            $(".sound-player").remove();
        }
    });
})(jQuery);

	
// });
		

		$("#yoda_div").click(function() {
			$("h1").text("Your Character");
			$("#vader_div").prependTo("#enemies");
			$("#kylo_div").prependTo("#enemies");
			$("#luke_div").prependTo("#enemies");
			chooseCharacter(yoda);
			$.playSound('./assets/audio/SaberOn.mp3');

			opponents[0]=characters[vader];
			$("#yoda_div").unbind();
			$("#kylo_div").unbind();
			$("#luke_div").unbind();
			$("#vader_div").unbind();
			// // opponents[1]=


		});

		$("#vader_div").click(function() {
			$("h1").text("Your Character");
			$("#yoda_div").prependTo("#enemies");
			$("#kylo_div").prependTo("#enemies");
			$("#luke_div").prependTo("#enemies");
			chooseCharacter(vader);
			$.playSound('./assets/audio/SaberOn.mp3');
			$("#yoda_div").unbind();
			$("#kylo_div").unbind();
			$("#luke_div").unbind();
			$("#vader_div").unbind();


		});

		$("#kylo_div").click(function() {
			$("h1").text("Your Character");
			$("#yoda_div").prependTo("#enemies");
			$("#vader_div").prependTo("#enemies");
			$("#luke_div").prependTo("#enemies");
			chooseCharacter(kylo);
			$.playSound('./assets/audio/SaberOn.mp3');
			$("#yoda_div").unbind();
			$("#kylo_div").unbind();
			$("#luke_div").unbind();
			$("#vader_div").unbind();

		});

		$("#luke_div").click(function() {
			$("h1").text("Your Character");
			$("#yoda_div").prependTo("#enemies");
			$("#kylo_div").prependTo("#enemies");
			$("#vader_div").prependTo("#enemies");
			chooseCharacter(luke);
			$.playSound('./assets/audio/SaberOn.mp3');
			$("#yoda_div").unbind();
			$("#kylo_div").unbind();
			$("#luke_div").unbind();
			$("#vader_div").unbind();

			chooseEnemy();
		});

	

	$("#attack_button").click(function() {
		$.playSound('./assets/audio/clash.mp3');


	});
	function chooseCharacter(char){
		characterChoice = true;
		character = char;
		console.log(character);
	}
	function chooseEnemy(char){
			$("#enemies #yoda_div").click(function() {
			$("#yoda_div").prependTo("#challenger");
			console.log("enemy yoda");

			

		});

		if(enemyChosen == false){
			opponent = char;
			enemyChosen = true;

		}
	}
});

	