# Haunted_House_Game-JS
This repository contains a short haunted house escape game as test of JS skills. THIS FILE HAS ONLY BEEN TESTED ON FIREFOX THUS FAR.

The escape game is click based, and it is not made apparent to the user what objects are clickable and which are not. The goal is to work your way through the haunted house. Beware: if you click the wrong object, you will have only 1 minute remaining to escape the house.

Folder Structure is as follows:
```
"Haunted House Game"
|
V
"InventoryPics"   "RoomPics   "Audio"
```

Folder locations are all follows(folder names in quotes):
```
"Haunted House Game"
-newhh.css
-newhh.html
-newhh.js

"InventoryPics"
-candle.png
-keythumbnail.jpg
-openbook.jpg
-openbookthumbnail.jpg

"RoomPics"
-basementdark.jpg
-front.jpg
-killercats.jpg
-tinykey.jpg
-basementlight.png
-study.png
-youlose.png
-youwin.png

"Audio"
-angrycatsound.mp3
-creakingwoodsound.mp3
-glassshattersound.mp3
-ravensound.mp3
-suspensepianosound.mp3
```

NOTE: All pictures and audio were obtained from online sources and are being used strictly in an educational fashion to demonstrate the skills in building a puzzle room website.

Included at the top of each page is a display of mouse coordinates.  Coordinates for game clicks were calculated based off of the page layout in most instances.  Being new to Javascript I am uncertain whether this was the correct reference to use to insure all users can see the code.  I left the coordinates on the page during game creation and opted to leave them on in case I wanted to add more rooms or clickable objects to the game as it makes for an easy reference.

One may note the use of local storage for variables.  Initially the game was created with multiple HTML pages and I attempted to use local storage to make variables accessible from all pages(I ended up creating cookies instead).  I realized late in the project that it would be more efficient(from my perspective) to use just one html page and alter the images on the screen. I used local storage the second time around as a test of basic functionality and was successful.  I retained usage as it did not hinder functionality of the code and offered protection against accidentally altering variables.
