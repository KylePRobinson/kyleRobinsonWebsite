window.onload = function () {
    
    // Embeds

    var twitchEmbed = '<iframe src="https://player.twitch.tv/?channel=havaqmusic" frameborder="0px" allowfullscreen="true" scrolling="no" height="720vh" width="1280vh"></iframe><a href="https://www.twitch.tv/havaqmusic?tt_content=text_link&tt_medium=live_embed"></a>';
    var spotifyEmbed = '<iframe src="https://open.spotify.com/embed/artist/0g9LwZI5kFm5KWRnW2UR3X" width="300vh" height="400vh" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';
    
    // Links

    var spotifylink = 'https://open.spotify.com/artist/0g9LwZI5kFm5KWRnW2UR3X?si=9NUXzbohQfCczVsymF_Zbw'
    var amazonlink = 'https://music.amazon.com/artists/B084H5NCR6/havaq';
    var applemusiclink = 'https://music.apple.com/us/artist/havaq/1496718434';

    //document.getElementById('spotify').innerHTML = spotifyEmbed;
    //document.getElementById('twitch-embed').innerHTML = twitchEmbed;
    document.getElementById('linkspotify').setAttribute('href', spotifylink);
    document.getElementById('linkamazon').setAttribute('href', amazonlink);
    document.getElementById('linkapplemusic').setAttribute('href', applemusiclink);
}