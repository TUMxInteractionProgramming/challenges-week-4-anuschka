var currentChannel = 'yummy'
var currentLocation  = {
    longitude: -99.203147, 
    latitude: 19.424398, 
    what3words: 'ruffle.invested.loving'
   };

/* #6 start the #external #action and say hello */
console.log("App is alive");

/**
 * #6 #Switcher function for the #channels name in the right app bar
 * @param channelName Text which is set
 */
function switchChannel(channelName) {
    //Log the channel switch
    console.log("Tuning in to channel", channelName.name);

    currentChannel = channelName.name;

    //Write the new channel to the right app bar
    document.getElementById('channel-name').innerHTML = channelName.name;

    //#6 change the #channel #location
    document.getElementById('channel-location').innerHTML = 'by ' + channelName.createdBy

    /* #7 set the star in the app bar (like the channel name and creator) according 
    to our object, when the user clicks on the channel (in the list) */    
    document.getElementById('channel-star').addClass = channelName.starred ? 'fas' : 'far'

    /* #6 #liking channels on #click */
    /* #7 #liking channels on #click changes the class from fas to far */
    $('#channel-star').toggleClass( "fas far" );
   
    /* #6 #highlight the selected #channel.
       This is inefficient (jQuery has to search all channel list items), but we'll change it later on */
    $('#channels li').removeClass('selected');
    $('#channels li:contains(' + channelName.name + ')').addClass('selected');

    
}

/* #6 #liking a channel on #click */
function star() {
    /* #7 toggle the star when clicking on it in the app bar */
    $('#channel-star').toggleClass( "fas far" );
    /* #7 currentChannel star changes accordingly when the app bar’s star is toggled */
    console.log(eval(currentChannel).starred)
      };

/**
 * #6 #taptab selects the given tab
 * @param tabId #id of the tab
 */
function selectTab(tabId) {
    // #6 #taptab #remove selection from all buttons...
    $('#tab-bar button').removeClass('selected');

    //...#6 #taptab #log the new tab on change...
    console.log('Changing to tab', tabId);

    //...#6 #taptab #add selection to the given tab button, its id is passed via the #argument tabId
    $(tabId).addClass('selected');
}

/**
 * #6 #toggle (show/hide) the emojis menu #smile
 */
function toggleEmojis() {
    /* $('#emojis').show(); // #show */
    $('#emojis').toggle(); // #toggle
}

/**
* #8 Create a sendMessage() function and attach it to the send button’s onclick event.
*/
function sendMessage(text){
    var newMessage = new Message(text);
    console.log(newMessage);

    var newElement = $('<div>');
    newElement.addClass('message');

    if(newMessage.own)
        newElement.addClass('own');

    newElement.html(createMessageObject(newMessage));
    
    $('#messages').append(newElement);

    $('#messages').scrollTop($('#messages').height());
    $('#message-field').val('');
}

/**
* #8 Write a createMessageElement(messageObject) function, which takes a message object and returns a
* string representation of an HTML message element.
*/

function createMessageObject(messageObject){
    var expiresIn = Math.round((((messageObject.expiresOn - Date.now())% 86400000) % 3600000) / 60000); // minutes
    var messageElement = 
    //'<div class="message">' +
    '<h3><a href="' + messageObject.createdBy + '" target="_blank"><strong>' + messageObject.createdBy + '</strong></a>' +
        messageObject.createdOn.toDateString() + ', ' + messageObject.createdOn.toTimeString().substring(0, 5) + '<em>' + expiresIn + ' min. left</em></h3>' +
    '<p>' + messageObject.text + '</p>' + 
    '<button>+5 min.</button>';
    //'</div>';
    return messageElement;

}

/**
 * #8 Write a constructor function Message(text) to create new messages
 * createdBy, latitude und longitude are assigned the respective values 
 * from the global variable currentLocation.
 * createdOn is the current date which you get with Date.now().
 * expiresOn is a future date: in 15 minutes. Google how to set a future date in JavaScript.
 * A message’s text is passed via the (only) text parameter and is stored in the
 *  object’s respective property.
 * Finally, own is simply true, since we’ll only create own messages via the 
 * Message() constructor - all other messages will come from the server later on.
 */
function Message(text) {
    this.createdBy = currentLocation.what3words;
    this.latitude = currentLocation.latitude;
    this.longitude = currentLocation.longitude;
    this.createdOn = new Date(Date.now());/*Date.now() method returns the number of milliseconds elapsed since January */
    this.expiresOn = new Date(Date.now() + (1000 /*millisec*/ * 60 /*sec*/ * 15 /*min*/));
    this.text = text;
    this.own = true;
  }


