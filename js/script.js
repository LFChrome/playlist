// quick fix for Cloud9 warning:
/* global $ */

// Class 1:
// Customize the mySong variable with information about your favorite song.
// Complete displaySong function to append a single song to the list on the page.
// Make sure the displaySong function is called when the page loads.

// Class 2:
// Complete displayList function to append all the songs to the list on the page.
// Make sure the displayList function is called when the page loads.
// Complete clearList function to remove everything inside the list on the page (optional).

// Class 3:
// Complete the addSong function to:
//	  take inputs from the input boxes,
//    push the new song to the playlist array,
// 	  and display the new song in the list on the page.
// Make sure the addSong function is triggered when a user clicks the Add Song button.

//**************************** YOUR CODE BELOW *******************************
//*********** CHECK YOUR WORK EARLY AND OFTEN WITH console.log()!! ***********

// Data
var myPlayList = [
	{
		"title": "Mozart's House",
		"artist": "Clean Bandit ft. Love Ssega",
		"imageURL": "https://goo.gl/ic3F6e",
		"playURL": "https://goo.gl/GmKYrR",
	},
	{
		"title": "Seven Nation Army",
		"artist": "White Stripes",
		"imageURL": "https://goo.gl/mcT1TA",
		"playURL": "https://goo.gl/jMWgpT",
	},
	{
		"title": "Move Your Feet",
		"artist": "Junior Senior",
		"imageURL": "https://goo.gl/nzEYTD",
		"playURL": "https://goo.gl/dwV7gq",
	}

]

// DOCUMENT READY FUNCTION
$( document ).ready(function() {
	// everything inside this function happens as soon as the page loads!
	displayList(myPlayList);
	$('#submit').click(function() {
		addSong();
	});
	$('#clear').click(function() {
		clearList(true);	
	});
});

// displaySong uses the properties in the songObject to create an HTML element for a single song
//	  and appends the element to the playlist on the page
function displaySong(songObject, id){ 
    $('.songs').append('<div class="card"><div class="card-body" id="song' + id + '"></div></div>');
    $('#song' + id).append('<img class="song-image img-thumbnail float-right" src=' + songObject.imageURL + '>');
    $('#song' + id).append('<h3>' + songObject.title + '</h3>');
    $('#song' + id).append('<p>' + songObject.artist + '</p>');
    $('#song' + id).append('<a href=' + songObject.playURL + '>Play song</a>');
}

// displayList takes in an array of song objects, and it uses the information from each song object
//    to create an HTML element and append it to the playlist on the page
function displayList(songsArray){
	for(var i = 0; i <= songsArray.length - 1; i++) {
		displaySong(songsArray[i], i);
	}
}

// clearList removes all the content from the playlist on the page
function clearList(boolean){
	if (boolean){
		myPlayList = [];
	}
	$('#list').html('');
}

// addSong takes inputs from the input boxes, organizes them into a new song object, and
//    pushes a new song to the playlist array
function addSong(){
	clearList(false);
	var mySong = {
		title: $('#title').val(),
		artist: $('#artist').val(),
		imageURL: $('#album-image').val(),
		playURL: $('#play-link').val()
	};
	if (mySong.title === '') {
		
	}
	myPlayList.push(mySong);
	displayList(myPlayList);
}

// ----------------------------------------------------------------------------

