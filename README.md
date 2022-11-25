# Pin-Twin

# Table of contents: 
* General info
* Technologies
* How to run

# Introduction
This app is an analogue of Pinterest social media. Here you can create your profile and then view pins, save pins, comment, create your own pins, visit other users...


# Technologies
* HTML
* CSS
* JavaScript
* React.JS
* React Router
* Redux
* Redux thunk

# How to run
* Open the link: https://pin-twin.netlify.app/

* Or open the app in your code editor and enter 'npn-start' and app will open in your default browser

# For Developer
* There are some things that are not implemented yet: notifications and messaging
* All pins are stored in a separate file 'pins.js'. When somebody creates or modifies pin then the pin is added to or modified in 'pins.js' after this the pins are filtered based on user's authorization status. 
When app runs the pins are written to redux store ('allPins' property) and filtered pins are stored in 'pinsToShow'. The pins are filtered based on wheter user has logged in or not.  If user is logged in then the pins are sorted based on user's subscriptions and top tags that user views 
(i.e based on user preferences), if user has not logged in then authorization form will be showed instead of pins and user will be able to access pins only by link ('pins/pin?id=10' for example);
* There is also 'pinsChunkSize' property which determines how much new pins will be loaded when user is about to reach bottom of MainPage. The pins are loaded up as user scrolls throught MainPage

* Users are also stored in a separate file 'users.js';
