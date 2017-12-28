$(document).ready(function() {

	var characterChoice;
	var enemyChosen;
	var enemyChosen = false;
	var characterChosen = false;
	var saberOn = new Audio ('./assets/audio/SaberOn.mp3');
	var opponents = [];
	var healthPower;
	var attackPower;
	var enemy ;

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

			chooseEnemy();


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

			chooseEnemy();


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

			chooseEnemy();

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

	

	function chooseCharacter(char){
		characterChoice = true;
		character = char;
		console.log(character);

	}

	function chooseEnemy(){ 
	
			$("#enemies #yoda_div").click(function() {
			$("#yoda_div").prependTo("#challenger");
			console.log("enemy yoda");
			enemy=characters[0];
			$.playSound('./assets/audio/SaberOn.mp3');
			console.log(enemy['attackPower']);
			$("#yoda_div").unbind();
			$("#kylo_div").unbind();
			$("#luke_div").unbind();
			$("#vader_div").unbind();

			attack();

			});

			$("#enemies #vader_div").click(function() {
			$("#vader_div").prependTo("#challenger");
			console.log("enemy vader");
			enemy=characters[3];
			$.playSound('./assets/audio/SaberOn.mp3');
			$("#yoda_div").unbind();
			$("#kylo_div").unbind();
			$("#luke_div").unbind();
			$("#vader_div").unbind();

			attack();

			});
			
			$("#enemies #luke_div").click(function() {
			$("#luke_div").prependTo("#challenger");
			console.log("enemy luke");
			enemy=characters[1];
			$.playSound('./assets/audio/SaberOn.mp3');
			$("#yoda_div").unbind();
			$("#kylo_div").unbind();
			$("#luke_div").unbind();
			$("#vader_div").unbind();

			attack();

			});

			$("#enemies #kylo_div").click(function() {
			$("#kylo_div").prependTo("#challenger");
			console.log("enemy kylo");
			enemy=characters[2];
			$.playSound('./assets/audio/SaberOn.mp3');
			$("#yoda_div").unbind();
			$("#kylo_div").unbind();
			$("#luke_div").unbind();
			$("#vader_div").unbind();

			attack();


			});



		if(enemyChosen == false){
			opponent = enemy;
			enemyChosen = true;

		}

	}
	function attack() {
	$("#attack_button").click(function() {
		$.playSound('./assets/audio/clash.mp3');

		enemy['healthPower'] = enemy['healthPower'] - character['attackPower'];
		character['healthPower']= character['healthPower'] - enemy['attackPower'];
		console.log(character['healthPower']);
		console.log(enemy['healthPower']);

		$(battle_score).text("CHARACTER HEALTH IS " + character['healthPower']);
		$(battle_score2).text("ENEMY HEALTH IS " + enemy['healthPower']);

		if(enemy['healthPower'] <= 0)
			$(battle_score2).text("ENEMY DEFEATED");
			$.playSound("./assets/audio/attack.mp3");

		if(character['healthPower'] <= 0)
			$(battle_score).text("YOU HAVE BEEN DEFEATED");
			$.playSound("./assets/audio/attack.mp3");

		

	});
}

});

	