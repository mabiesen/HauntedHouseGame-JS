# Haunted_House_Game-JS
This repository contains a short haunted house escape game as test of JS skills. THIS FILE HAS ONLY BEEN TESTED ON FIREFOX THUS FAR.

The escape game is click based, and it is not made apparent to the user what objects are clickable and which are not. The goal is to work your way through the haunted house. Beware: if you click the wrong object, you will have only 1 minute remaining to escape the hosue.

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
-css file
-html file
-js file

"InventoryPics"

"RoomPics"

"Audio"
```

Included at the top of each page is a display of mouse coordinates.  Coordinates for game clicks were calculated based off of the page layout.  Being new to Javascript I am uncertain whether this was the correct reference to use to insure all users can see the code.  I left the coordinates on the page during game creation and opted to leave them on in case I wanted to add more rooms or clickable objects to the game as it makes for an easy reference.

One may note the use of local storage for variables.  Initially the game was created with multiple HTML pages and I attempted to use local storage to make variables accessible from all pages(I ended up creating cookies instead).  I realized late in the project that it would be more efficient(from my perspective) to use just one html page and alter the images on the screen. I used local storage the second time around as a test of basic functionality and was successful.  I retained usage as it did not hinder functionality of the code and offered protection against accidentally altering variables.
