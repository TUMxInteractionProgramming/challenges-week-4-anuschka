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
