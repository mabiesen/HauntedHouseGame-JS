//this section contains the opened book images
var openedbook = 'InventoryPics/openbook.jpg';

//this section cotains list of room images---
var frontimage = 'RoomPics/front.jpg';
var basementdarkimage = 'RoomPics/basementdark.jpg';
var basementlightimage = 'RoomPics/basementlight.png';
var catroomimage = 'RoomPics/killercats.jpg';
var firstfloorimage = 'RoomPics/study.png';
var youwinimage = 'RoomPics/youwin.png';
var youloseimage = 'RoomPics/youlose.png';
//--

//this section contains list of sounds---
var creakingwoodsound = 'Audio/creakingwoodsound.mp3';
var doorslamsound = 'Audio/doorslamsound.mp3';
var glassshattersound = 'Audio/glassshattersound.mp3';
var grimmreapersound = 'Audio/grimmreapersound.mp3';
var ravensound = 'Audio/ravensound.mp3';
var scratchingsound = 'Audio/scratchingsound.mp3';
var suspensepianosound = 'Audio/suspensepianosound.mp3';
var angrycatsound = 'Audio/angrycatsound.mp3';
//--

//This section contains list of inventory items---
var candle = 'InventoryPics/candle.png';
var openbookthumbnail = 'InventoryPics/openbookthumbnail.jpg';
var openbook = 'InventoryPics/openbook.jpg';
var keythumbnail = 'InventoryPics/keythumbnail.jpg';
//--

//This section contains list of checkpoint variables
//Originally created these variables in localStorage for multi-page access.  Retained for future use.
//since local storage is handled as text, creating iterable list of items---
localStorage.setItem('beenincatroom','false');
localStorage.setItem('incatroom','false');
localStorage.setItem('inbasementlight','false');
localStorage.setItem('inbasementdark','false');
localStorage.setItem('instudy','false');
localStorage.setItem('outside', 'true');
localStorage.setItem('inyouwin','false');
localStorage.setItem('inyoulose','false');
localStorage.setItem('pickedupcandle','false');
localStorage.setItem('pickedupbook','false');
localStorage.setItem('pickedupkey','false');
localStorage.setItem('bookopened','false');
localStorage.setItem('wongame','false');

var gameinventory = ['pickedupcandle','pickedupbook','pickedupkey'];
var gamelocation = ['inyoulose','inyouwin','outside','inbasementdark','inbasementlight','incatroom','instudy'];
var listlength = gamelocation.length;
var inventorylength = gameinventory.length;
//--

//This section associates locations with images---
var roompicturehash = {};
roompicturehash['incatroom'] = catroomimage;
roompicturehash['inbasementlight'] = basementlightimage;
roompicturehash['inbasementdark'] = basementdarkimage;
roompicturehash['instudy'] = firstfloorimage;
roompicturehash['outside'] = frontimage;
roompicturehash['inyouwin'] = youwinimage;
roompicturehash['inyoulose'] = youloseimage;
//--

//This section associates inventory items with elementids---
var invidhash = {};
invidhash['pickedupcandle'] = 'candle';
invidhash['pickedupbook'] = 'book';
invidhash['pickedupkey'] = 'key';

//code identifies mouse position elements in HTML and updates with current mouse position.
//called from bottom of page--------
var sx = document.getElementById('sx');        // Element to hold screenX
var sy = document.getElementById('sy');        // Element to hold screenY
var pgx = document.getElementById('px');        // Element to hold pageX
var pgy = document.getElementById('py');        // Element to hold pageY
var cx = document.getElementById('cx');        // Element to hold clientX
var cy = document.getElementById('cy');        // Element to hold clientY

function showPosition(event) {                 // Declare function
  sx.value = event.screenX;                    // Update element with screenX
  sy.value = event.screenY;                    // Update element with screenY
  pgx.value = event.pageX;                      // Update element with pageX
  pgy.value = event.pageY;                      // Update element with pageY
  cx.value = event.clientX;                    // Update element with clientX
  cy.value = event.clientY;                    // Update element with clientY
}
//-------

function showdialogue(message){
	    var newmodal = "<div id='myModal' class='modal'><div class='modal-content'><span class='close'>x</span><p>" + message + "</p>  </div></div>";
		$('.room').append(newmodal);
		var modal = document.getElementById('myModal');
		modal.style.display = "block";
		}



//This block of code contains functions for using the timer---
function getTimeRemaining(endtime) {
  var t = endtime - Date.parse(new Date());//already parsed deadline
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(endtime) {
  var minutesSpan = document.getElementById('minutes')
  var secondsSpan = document.getElementById('seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    minutesSpan.value = ('0' + t.minutes).slice(-2);
    secondsSpan.value = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
		clearInterval(timeinterval);
		if(localStorage.getItem('wongame') == 'true'){
		}else{
		alert('Your time is up, the cats have eaten you. Thank you for playing');
		changecurrentroom('inyoulose');
		showdialogue('you lose');

	}
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}
//--


//function below is used to play sounds on request ---
function playSound(url){ //dynamic sound function, uses file location as argument.  accepts relative location
  var audio = document.createElement('audio');
  audio.style.display = "none";
  audio.src = url;
  audio.autoplay = true;
  audio.onended = function(){
    audio.remove(); //Remove when played.
  }
  document.body.appendChild(audio);
}
//--

//function below will set necessary inventory pictures to visible ---
function updateinventory(){
	for (var k = 0; k < listlength; k++){
		if(localStorage.getItem(gameinventory[k]) == 'true'){
			document.getElementById(invidhash[gameinventory[k]]).style.visibility = "visible";
		}
	}
}

//function below is to set the room picture.  by changing pictures rather than pages, local storage of variables is made possible---
function setuproom(){
			$('.room').css({
				'background-image': 'url(\"' + roompicturehash[identifycurrentroom()] + '\")',
		        'background-repeat': 'no-repeat',
			})
		}
//--

//function to identify current room---
function identifycurrentroom(){
	for (var k = 0; k < listlength; k++){
		if(localStorage.getItem(gamelocation[k]) == 'true'){
			return gamelocation[k];
		}
    }
}
//--

//Change the current room. First change all rooms to false in local storage, then ---
function changecurrentroom(newroom){
     for (var k = 0; k < listlength; k++){
		 localStorage.setItem(gamelocation[k], 'false');
	 }
	 localStorage.setItem(newroom, 'true');
	 $('.room').empty();
	 setuproom();
}
//--

//This section directs a user's click based upon page
function directclick(event){
	var currentroom = identifycurrentroom();
	var varx = event.pageX;
	var vary = event.pageY;
	
	
	//closes dialogue box if open
	if($('#myModal').html() !== undefined){
		$('#myModal').remove();
	   /* document.getElementById('myModal').style.display = "none"; */
}
	//closes book object if opened.  Otherwise directs code onward.
    if (localStorage.getItem('bookopened') == 'true'){
		$('#openedbook').empty();
		localStorage.setItem('bookopened','false');
	}else{
	
	    if(varx < 308){
		    checkinventoryclick(varx, vary);
	    }else{
	
	    switch (currentroom){
		    case 'outside':
		        checkoutsideclick(varx, vary);
			break;
		
		    case 'instudy':
		        checkinstudyclick(varx, vary);
			break;
		
		    case 'inbasementdark':
		        checkinbasementdarkclick(varx, vary);
			break;
		
		    case 'inbasementlight':
		        checkinbasementlightclick(varx, vary);
			break;
		
		    case 'incatroom':
		        changecurrentroom('instudy');
			    alert('That was messed up.  If I don\'t get out of here in the next minute I\'m going to lose it');
		        var deadline = Date.parse(new Date) + 60000; //set to three minutes
		        initializeClock(deadline);
			break;
		}
	}
	
	}
	/*if(varx > 500){
		changecurrentroom('incatroom');
		var deadline = Date.parse(new Date) + 180000; //set to three minutes
		initializeClock(deadline);
	}*/
}

function checkinventoryclick(xpos, ypos){
	if(localStorage.getItem('pickedupcandle') == 'true' && identifycurrentroom() == 'inbasementdark' && xpos > 116 && xpos < 200 && ypos > 124 && ypos < 223){
		changecurrentroom('inbasementlight');
	    showdialogue('I\'m glad I got this candle! looks like there\'s a key on the ground');
		}
    if(localStorage.getItem('pickedupkey') == 'true' && identifycurrentroom() == 'instudy' && xpos > 116 && xpos < 227 && ypos > 312 && ypos < 413){
		showdialogue('The key has opened the door! Congratulations, you WIN!');
		localStorage.setItem('wongame','true');
		changecurrentroom('inyouwin');
	}
	if(localStorage.getItem('pickedupbook') == 'true' && xpos > 116 && xpos < 218 && ypos > 226&& ypos < 309){
		localStorage.setItem('bookopened','true');
		$('#openedbook').append("<img src='" + openedbook + "'>");
	}
	
}

function checkoutsideclick(xpos, ypos){
	if(xpos < 1023 && xpos > 976 && ypos < 611 && ypos > 551){//window
		playSound(glassshattersound);
		showdialogue('with a small push the wiindow shatters and you fall into the house');
		setTimeout(function(){changecurrentroom('inbasementdark');},2500);
	}
	
}

function checkinbasementdarkclick(xpos, ypos){
	if(xpos < 774 && xpos > 694 && ypos < 371 && ypos > 213){//ladder
		playSound(creakingwoodsound);
		showdialogue('This ladder sounds old and rickety beneath your weight');
		setTimeout(function(){changecurrentroom('instudy');},2500);
	}

}

function checkinbasementlightclick(xpos, ypos){
		if(xpos < 774 && xpos > 694 && ypos < 371 && ypos > 213){//ladder
		playSound(creakingwoodsound);
		showdialogue('This ladder sounds old and rickety beneath your weight');
		setTimeout(function(){changecurrentroom('instudy');},2500);
	}
	    if(xpos < 637 && xpos > 619 && ypos < 564 && ypos > 549){//key
		    showdialogue('A KEY!!!! Maybe I won\'t die after all');
			localStorage.setItem('pickedupkey','true');
			updateinventory();
			setTimeout(function(){showdialogue('No need to waste more precious candle light');},2500);
			setTimeout(function(){changecurrentroom('instudy');},2500);
		}
}

function checkinstudyclick(xpos, ypos){
	if(xpos < 516 && xpos > 350 && ypos < 440 && ypos > 393){//piano
		playSound(suspensepianosound);
		showdialogue("This piano is old and out of tune.  Probably hasnt been played in ages.");
	}
	if(xpos < 656 && xpos > 560 && ypos < 415 && ypos > 254){//locked door
		showdialogue('This door is locked');
	}
	if(xpos < 1084 && xpos > 916 && ypos < 635 && ypos > 562){//back to basement
		

		if(localStorage.getItem('pickedupkey') == 'true'){
		     showdialogue('We\'ve already spent enough time in the basement, I don\'t think anything else is down there');
		}
		if(localStorage.getItem('pickedupkey') == 'false'){
			showdialogue('This leads back down to the basement');
			setTimeout(function(){changecurrentroom('inbasementdark');},2500);
		}
	}
	if(xpos < 809 && xpos > 759 && ypos < 350 && ypos > 221){//bookshelf and catroom
		if(localStorage.getItem('beenincatroom') == 'false'){
			showdialogue('Hearing a noise and feeling bold, you decide to move the bookshelf to see what lies behind');
			localStorage.setItem('beenincatroom','true');
			playSound(angrycatsound);
			setTimeout(function(){changecurrentroom('incatroom');},2500);

		}else{
			showdialogue('Those cat people things are crazy and there is blood in there.  We need to find a way out of this room before they find a way in');
		}
	}
	if(xpos < 861 && xpos > 852 && ypos < 334 && ypos > 314){//candle
	    if(localStorage.getItem('pickedupcandle') == 'false'){
	        showdialogue('I\'ll hold onto this candle,it may come in handy');
			localStorage.setItem('pickedupcandle','true');
			updateinventory();
		}else{
			showdialogue('I think I already picked up this candle.  The game maker must have gotten lazy.');
		}
	}
	if(xpos < 1027 && xpos > 975 && ypos < 440 && ypos > 415){//book
	       if(localStorage.getItem('pickedupbook') == 'false'){
			   showdialogue('Looks like a journal of some sort.  Ill devote this book to memory');
			   localStorage.setItem('pickedupbook','true');
			   updateinventory();
		   }else{
			   showdialogue('I already looked at this book and memorized the important parts');
		   }
	}
}

function checkincatroomclick(xpos, ypos){
	
}
//--

//event handler section
var eventbody = document.getElementById('eventbody');      // Get eventbody Element
$(document).ready(setuproom());
eventbody.addEventListener('mousemove', showPosition, false); // Move updates position
eventbody.addEventListener('click', directclick, false); // Checks for clicked objects
