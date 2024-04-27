//
//consts for text effects
var i = 0;
var titletxt = 'Tamagotchi (version 1.4)';
var txtspeed = 50;/*in milliseconds */

//hidden button 
const menuFromGameConst = document.querySelector("#action-game-mainmenu");
const playAgainConst = document.querySelector("#action-game-playagain");

//Constants for buttons
const sleepBtn = document.querySelector("#action-sleep");
const feedBtn = document.querySelector("#action-feed");
const playBtn = document.querySelector("#action-play");
const dirtyBtn = document.querySelector("#action-dirty");

const startBtn = document.querySelector("#action-menu-start-game");
const settingsBtn = document.querySelector("#action-menu-settings");
const creditsBtn = document.querySelector("#action-menu-credits");

const settingsBackBtn = document.querySelector("#action-settings-back");
const creditsBackBtn = document.querySelector("#action-credits-back");

const difHardBtn = document.querySelector("#action-settings-difficulty-hard");
const difNormalBtn = document.querySelector("#action-settings-difficulty-normal");
const difEasyBtn = document.querySelector("#action-settings-difficulty-easy");
const nightModeOffBtn = document.querySelector("#nightmode-off");
const nightModeOnBtn = document.querySelector("#nightmode-on");

const musicModeOffBtn = document.querySelector("#music-off");
const musicModeOnBtn = document.querySelector("#music-on");
//button sound effect
const btnAudio = new Audio("https://www.fesliyanstudios.com/play-mp3/2881");
const allBtns= document.querySelectorAll("a");
const soundOnBtn = document.querySelector("#sound-on");
const soundOffBtn = document.querySelector("#sound-off");

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
const cleanLeft = document.querySelector("#clean-left");
const cleanRight = document.querySelector("#clean-right");

var tbody = document.querySelector("#tbody-main");
const thappy01 = "/assets/pictures/tama-happy_01.png";
const thappy02 = "/assets/pictures/tama-happy_02.png";
const thappy03 = "/assets/pictures/tama-happyish_03.png";
const thappy04 = "/assets/pictures/tama-happymid_04.png";
const tmid05 = "/assets/pictures/tama-mid_05.png";
const tmidsad06 = "/assets/pictures/tama-midsad_06.png";
const tsad07 = "/assets/pictures/tama-sad_07.png";
const tdead = "/assets/pictures/tama-sadDead_08.png";
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
creditsBtn.addEventListener("click",function(){
    creditsMenu();
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

//credits
creditsBackBtn.addEventListener("click",function(){
    MainMenuFromCredits();
});

menuFromGameConst.addEventListener("click",function(){
   
});

playAgainConst.addEventListener("click",function(){

});

//night mode controllers
nightModeOffBtn.addEventListener("click", function() {
	nightModeOff();
});

nightModeOnBtn.addEventListener("click", function() {
	nightModeOn();
});

//music controlers
musicModeOffBtn.addEventListener("click", function(){
    musicOff();
});
musicModeOnBtn.addEventListener("click", function(){
    musicOn();
});

soundOnBtn.addEventListener("click",function(){
    SoundOn();
});

soundOffBtn.addEventListener("click",function(){
    SoundOff();
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

//music toggle
function musicOn() {
    document.querySelector('#music-setting').innerHTML = "on";
    document.querySelector('#bgmusicaudio').play();
}

function musicOff() {
    document.querySelector('#music-setting').innerHTML = "off";
    document.querySelector('#bgmusicaudio').pause();
}

//Togglers for buttons
document.querySelector(".game-screen").classList.toggle("hide");
document.querySelector(".menu-screen-settings").classList.toggle("hide");
document.querySelector(".menu-screen-credits").classList.toggle("hide");
document.querySelector(".hidden-buttons").classList.toggle("hide");

function MainMenu() {
	document.querySelector(".menu-screen-settings").classList.toggle("hide");
	document.querySelector(".main-menu-screen").classList.toggle("hide");
}

function MainMenuFromCredits() {
    document.querySelector(".menu-screen-credits").classList.toggle("hide");
    document.querySelector(".main-menu-screen").classList.toggle("hide");
}

function settingsMenu() {
	document.querySelector(".main-menu-screen").classList.toggle("hide");
	document.querySelector(".menu-screen-settings").classList.toggle("hide");
}

function creditsMenu(){
    document.querySelector(".main-menu-screen").classList.toggle("hide");
    document.querySelector(".menu-screen-credits").classList.toggle("hide");
}

function TamaName(){
    var tamagotchiName = prompt("Please, enter a name of your tamagotchi:", "");
	document.querySelector("#name").innerHTML = tamagotchiName;
	if (tamagotchiName == null || tamagotchiName.replace(/\s/g, '') == "") {
		tamagotchiName = "Tamagotchi";
		document.querySelector("#name").innerHTML = tamagotchiName;
	}
}

function SoundOn(){
    document.querySelector("#sound-setting").innerHTML = "on";
    allBtns.forEach(button=>{button.addEventListener("click", ()=>{
        btnAudio.play();
        });
    });
}

function SoundOff(){
    document.querySelector("#sound-setting").innerHTML = "off";
    allBtns.forEach(button=>{button.addEventListener("click", ()=>{
        btnAudio.pause();
        });
    });
}

function startGame() {
	document.querySelector(".game-screen").classList.toggle("hide");
	document.querySelector(".main-menu-screen").classList.toggle("hide");
    SoundOn();

	//Tamagotchi's name
	TamaName();

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
		if ((dirtyCount >=95) || (playHpCount <= 0) || (sleepHpCount <= 0) || (hungerHpCount <= 0)) {
			playHpCouknt = 0;
			sleepHpCount = 0;
			hungerHpCount = 0;
			clearInterval(coreUpdate);
            
			alert('Your score: ' + score + '\n ╭(×_×)╮');
            document.querySelector(".hidden-buttons").classList.toggle("hide");
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
                // mouth.innerHTML = "_";
                tbody.src = tdead;
                break;
            case hungerHpCount < 20:
                // mouth.innerHTML = "0";
                tbody.src = tsad07;
                break;
            case hungerHpCount < 40:
                // mouth.innerHTML = "O";
                tbody.src = tmidsad06;
                break;
            case hungerHpCount < 60:
                // mouth.innerHTML = "o";
                tbody.src = tmid04;
                break;
            case hungerHpCount < 80:
                // mouth.innerHTML = "-";
                tbody.src = thappy02;
                break;
            case hungerHpCount > 80:
                // mouth.innerHTML = "▿";
                tbody.src = thappy01;
                break;
        }

		//Sleep bar

        switch(true){
            case (sleepHpCount <= 0): 
                // eyeLeft.innerHTML = "×";
                // eyeRight.innerHTML = "×";
                // tbody.src = tdead;
                break;
            
            case (sleepHpCount < 20): 
                // eyeLeft.innerHTML = "◡";
                // eyeRight.innerHTML = "◡";
                // mouth.innerHTML = ".";
                // tbody.src = tmid05;
                break;

            case (sleepHpCount < 40): 
                // eyeLeft.innerHTML = " ´ ";
                // eyeRight.innerHTML = " ` ";
                // tbody.src = thappy04;
                break;

            case (sleepHpCount < 60):
                // eyeLeft.innerHTML = "●";
                // eyeRight.innerHTML = "●";
                // tbody.src = thappy03;
                break;

            case (sleepHpCount < 80): 
                // eyeLeft.innerHTML = "・";
                // eyeRight.innerHTML = "・";
                // tbody.src = thappy02
                break;
            
            case (sleepHpCount > 80): 
                // eyeLeft.innerHTML = "＾";
                // eyeRight.innerHTML = "＾";
                // tbody.src = thappy01;
                break;
        }
		

		//Play bar
        switch(true){
            case (playHpCount <= 0): 
			effectRight.innerHTML = "   ";
			effectLeft.innerHTML = "   ";
			// handRight.innerHTML = "╮";
			// handLeft.innerHTML = "╭";
            break;

            case (playHpCount < 40): 
                effectRight.innerHTML = "*  ";
                effectLeft.innerHTML = "   ";
                // handRight.innerHTML = " ";
                // handLeft.innerHTML = " ";
                break;
            
            case (playHpCount < 60): 
                effectLeft.innerHTML = "   ";
                effectRight.innerHTML = "   ";
                // handRight.innerHTML = "╮";
                // handLeft.innerHTML = "╭";
                break;
            
            case (playHpCount < 80): 
                effectLeft.innerHTML = "  ✧";
                effectRight.innerHTML = "✧  ";
                // handRight.innerHTML = "╭";
                // handLeft.innerHTML = "╮";
                break;
            
            case (playHpCount < 90): 
                effectLeft.innerHTML = " ˖✧";
                effectRight.innerHTML = "✧˖ ";
                // handRight.innerHTML = "/";
                // handLeft.innerHTML = "\\";
                break;
            
            case (playHpCount > 90): 
                effectLeft.innerHTML = "°˖✧";
                effectRight.innerHTML = "✧˖°";
                // handRight.innerHTML = "◜";
                // handLeft.innerHTML = "◝";
                break;
            
        }

        // Cleanliness
        switch(true){
            case(dirtyHpCount <=0):
                cleanLeft.innerHTML = " ";
                cleanRight.innerHTML = " ";
                break;
            case(dirtyHpCount < 15 ):
                cleanLeft.innerHTML = "~ ";
                cleanRight.innerHTML = " ~";
                break;
            case (dirtyHpCount < 25):
                cleanLeft.innerHTML = "~~";
                cleanRight.innerHTML = "~~";
                break;
            case (dirtyHpCount < 40):
                cleanLeft.innerHTML = "x~";
                cleanRight.innerHTML = "~x";
                break;
            case (dirtyHpCount < 60):
                cleanLeft.innerHTML = "X~";
                cleanRight.innerHTML = "~X";
                break;
            case (dirtyHpCount < 80):
                cleanLeft.innerHTML = "XX~~";
                cleanRight.innerHTML = "~~XX";
                break;
        }
		
	}
}