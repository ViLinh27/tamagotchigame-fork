//
//consts for text effects
var i = 0;
var titletxt = 'Tamagotchi (version 1.4)';
var txtspeed = 50;/*in milliseconds */

//Constants for buttons
const sleepBtn = document.querySelector("#action-sleep");
const feedBtn = document.querySelector("#action-feed");
const playBtn = document.querySelector("#action-play");
const dirtyBtn = document.querySelector("#action-dirty");

const startBtn = document.querySelector("#action-menu-start-game");
const settingsBtn = document.querySelector("#action-menu-settings");
const settingsBackBtn = document.querySelector("#action-settings-back");
const difHardBtn = document.querySelector("#action-settings-difficulty-hard");
const difNormalBtn = document.querySelector("#action-settings-difficulty-normal");
const difEasyBtn = document.querySelector("#action-settings-difficulty-easy");
const nightModeOffBtn = document.querySelector("#nightmode-off");
const nightModeOnBtn = document.querySelector("#nightmode-on");
//
//Constants for main bar
const sleepHp = document.querySelector("#sleep-hp");
const hungerHp = document.querySelector("#hunger-hp");
const playHp = document.querySelector("#play-hp");
const dirtyHp = document.querySelector("#dirty-hp");

const scoreBar = document.querySelector("#score");
//
//Constants for body
const effectLeft = document.querySelector("#effect-left");
const effectRight = document.querySelector("#effect-right");
const handLeft = document.querySelector("#hand-left");
const handRight = document.querySelector("#hand-right");
const eyeLeft = document.querySelector("#eye-left");
const eyeRight = document.querySelector("#eye-right");
const mouth = document.querySelector("#mouth");
//
//Game settings
const maxSleep = 300;
const maxHunger = 300;
const maxPlay = 300;
const minDirty = 0;

//Game speed
let day = 20;

//New object
function Tamagotchi() {
  this.sleep = maxSleep;
  this.hunger = maxHunger;
  this.play = maxPlay;
  this.dirty = minDirty;
}

//Abilities
Tamagotchi.prototype.actionSleep = function() {
    this.sleep+=40 / (day * 2)
};

Tamagotchi.prototype.actionEat = function() {
	this.hunger+=120 / (day * 2)
};

Tamagotchi.prototype.actionPlay = function() {
	this.play+=80 / (day * 2)
};

Tamagotchi.prototype.actionDirty = function(){
    this.dirty-=40 / (day * 2)
}

Tamagotchi.prototype.tick = function() {
    this.sleep--;
    this.hunger-=3;
    this.play-=2;
    this.dirty+=2;
};

let tmgch = new Tamagotchi();
let sleepHpCount;
let hungerHpCount;
let playHpCount;
let dirtyCount;

let score = 0;

//Controllers
sleepBtn.addEventListener("click", function() {
	tmgch.actionSleep();
});

feedBtn.addEventListener("click", function() {
	tmgch.actionEat();
});

playBtn.addEventListener("click", function() {
	tmgch.actionPlay();
});

dirtyBtn.addEventListener("click", function(){
    tmgch.actionDirty();
})

startBtn.addEventListener("click", function() {
	startGame();
});

settingsBtn.addEventListener("click", function() {
	settingsMenu();
});

difHardBtn.addEventListener("click", function() {
	day = 5;
	document.querySelector("#difSet").innerHTML = "Hard";
});

difNormalBtn.addEventListener("click", function() {
	day = 20;
	document.querySelector("#difSet").innerHTML = "Normal";
});

difEasyBtn.addEventListener("click", function() {
	day = 40;
	document.querySelector("#difSet").innerHTML = "Easy";
});

settingsBackBtn.addEventListener("click", function() {
	MainMenu();
});

nightModeOffBtn.addEventListener("click", function() {
	nightModeOff();
});

nightModeOnBtn.addEventListener("click", function() {
	nightModeOn();
});

//title text animation
document.addEventListener('DOMContentLoaded',function(){
    typeWriter();
}, false)

function typeWriter(){
    if(i < titletxt.length){
        document.getElementById("menu-game-title").innerHTML += titletxt.charAt(i);
        i++;
        setTimeout(typeWriter,txtspeed);
    }
}

//NightMode toggle
function nightModeOn() {
	document.querySelector('body').classList.add("nightmode-on");
	document.querySelector('#nightmode').innerHTML = "on";
}

function nightModeOff() {
	document.querySelector('body').classList.remove("nightmode-on");
	document.querySelector('#nightmode').innerHTML = "off";
}

//Togglers for buttons
document.querySelector(".game-screen").classList.toggle("hide");
document.querySelector(".menu-screen-settings").classList.toggle("hide");

function MainMenu() {
	document.querySelector(".menu-screen-settings").classList.toggle("hide");
	document.querySelector(".main-menu-screen").classList.toggle("hide");
}

function settingsMenu() {
	document.querySelector(".main-menu-screen").classList.toggle("hide");
	document.querySelector(".menu-screen-settings").classList.toggle("hide");
}

function startGame() {
	document.querySelector(".game-screen").classList.toggle("hide");
	document.querySelector(".main-menu-screen").classList.toggle("hide");

	//Tamagotchi's name
	var tamagotchiName = prompt("Please, enter a name of your tamagotchi:", "");
	document.querySelector("#name").innerHTML = tamagotchiName;
	if (tamagotchiName == null || tamagotchiName.replace(/\s/g, '') == "") {
		tamagotchiName = "Tamagotchi";
		document.querySelector("#name").innerHTML = tamagotchiName;
	}

	//Start game
	core();
	let coreUpdate = setInterval(core, 100 * day);

	//Main function of tamagotchi
	function core() {
		//console.log(tmgch);
		sleepHpCount = (tmgch.sleep / maxSleep * 100).toFixed(2);
		hungerHpCount = (tmgch.hunger / maxHunger * 100).toFixed(2);
		playHpCount = (tmgch.play / maxPlay * 100).toFixed(2);
        dirtyHpCount = (tmgch.dirty / maxPlay * 100).toFixed(2);

		//Scores
		score++;
		scoreBar.innerHTML = score;

		//Death ability
		if ((playHpCount <= 0) || (sleepHpCount <= 0) || (hungerHpCount <= 0)) {
			playHpCount = 0;
			sleepHpCount = 0;
			hungerHpCount = 0;
			clearInterval(coreUpdate);
			alert('Your score: ' + score + '\n ╭(×_×)╮');
		}

		//Max health percentage (real)
		//Little help for player
		if (tmgch.sleep >= (maxSleep + (maxSleep / 100 * 20))) {
			tmgch.sleep = maxSleep + (maxSleep / 100 * 20);
		}

		if (tmgch.hunger >= (maxHunger + (maxHunger / 100 * 20))) {
			tmgch.hunger = maxHunger + (maxHunger / 100 * 20);
		}

		if (tmgch.play >= (maxPlay + (maxPlay / 100 * 20))) {
			tmgch.play = maxPlay + (maxPlay / 100 * 20);
		}

		//Max health percentage (for player)
		if ((tmgch.sleep / maxSleep * 100) > 100) {
			sleepHpCount = 100;
		}
		if ((tmgch.hunger / maxHunger * 100) > 100) {
			hungerHpCount = 100;
		}
		if ((tmgch.play / maxPlay * 100) > 100) {
			playHpCount = 100;
		}

		//Show HP on screen
		sleepHp.innerHTML = sleepHpCount;
		hungerHp.innerHTML = hungerHpCount;
		playHp.innerHTML = playHpCount;

        dirtyHp.innerHTML = dirtyHpCount;

		//Remove HP every tick
		tmgch.tick();

		//Animations

		//Hunger bar

		/*mouth}*/
        switch(true){
            case hungerHpCount <= 0:
                mouth.innerHTML = "_";
                break;
            case hungerHpCount < 20:
                mouth.innerHTML = "0";
                break;
            case hungerHpCount < 40:
                mouth.innerHTML = "O";
                break;
            case hungerHpCount < 60:
                mouth.innerHTML = "o";
                break;
            case hungerHpCount < 80:
                mouth.innerHTML = "-";
                break;
            case hungerHpCount > 80:
                mouth.innerHTML = "▿";
                break;
        }

		//Sleep bar

        switch(true){
            case (sleepHpCount <= 0): 
                eyeLeft.innerHTML = "×";
                eyeRight.innerHTML = "×";
                break;
            
            case (sleepHpCount < 20): 
                eyeLeft.innerHTML = "◡";
                eyeRight.innerHTML = "◡";
                mouth.innerHTML = ".";
                break;

            case (sleepHpCount < 40): 
                eyeLeft.innerHTML = " ´ ";
                eyeRight.innerHTML = " ` ";
                break;

            case (sleepHpCount < 60):
                eyeLeft.innerHTML = "●";
                eyeRight.innerHTML = "●";
                break;

            case (sleepHpCount < 80): 
                eyeLeft.innerHTML = "・";
                eyeRight.innerHTML = "・";
                break;
            
            case (sleepHpCount > 80): 
                eyeLeft.innerHTML = "＾";
                eyeRight.innerHTML = "＾";
                break;
        }
		

		//Play bar
        switch(true){
            case (playHpCount <= 0): 
			effectRight.innerHTML = "   ";
			effectLeft.innerHTML = "   ";
			handRight.innerHTML = "╮";
			handLeft.innerHTML = "╭";
            break;

            case (playHpCount < 40): 
                effectRight.innerHTML = "*  ";
                effectLeft.innerHTML = "   ";
                handRight.innerHTML = " ";
                handLeft.innerHTML = " ";
                break;
            
            case (playHpCount < 60): 
                effectLeft.innerHTML = "   ";
                effectRight.innerHTML = "   ";
                handRight.innerHTML = "╮";
                handLeft.innerHTML = "╭";
                break;
            
            case (playHpCount < 80): 
                effectLeft.innerHTML = "  ✧";
                effectRight.innerHTML = "✧  ";
                handRight.innerHTML = "╭";
                handLeft.innerHTML = "╮";
                break;
            
            case (playHpCount < 90): 
                effectLeft.innerHTML = " ˖✧";
                effectRight.innerHTML = "✧˖ ";
                handRight.innerHTML = "/";
                handLeft.innerHTML = "\\";
                break;
            
            case (playHpCount > 90): 
                effectLeft.innerHTML = "°˖✧";
                effectRight.innerHTML = "✧˖°";
                handRight.innerHTML = "◜";
                handLeft.innerHTML = "◝";
                break;
            
        }
		
	}
}