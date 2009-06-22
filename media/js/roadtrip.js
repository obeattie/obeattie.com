/** Roadtrip site JavaScript **/

function flickrContentAvailable(data){
    // JSON callback from Flickr when data is returned
    var html = [];
    var itercounter = 0;
    
    for (var i in data.items) {
        var photo = data.items[i];
        var cls = '';
        
        if (itercounter == 3) cls = ' class="last"';
        
        var result = [
            '<li' + cls + '>',
                '<a href="' + photo.link + '"><img src="' + photo.media.m + '" alt="' + photo.title + '" /></a>',
            '</li>'
        ]
        html.push(result.join(''));
        itercounter++;
        // Only want 4 items
        if (itercounter == 4) break;
    };
    
    document.getElementById('flickr').innerHTML = html.join('');
};

function twitterContentAvailable(data){
    // JSON callback from Twitter when data is returned
    var html = [];
    var hits = 0;
    
    for (var i in data) {
        var tweet = data[i];
        // Don't display @replies
        if (tweet.text[0] != '@') {
            var result = [
                '<h3>' + tweet.text + '</h3>',
                '<p><a href="http://twitter.com/obeattie/status/' + tweet.id + '/">' + timesince(tweet.created_at) + '</a></p>'
            ];
            html.push(result.join(''));
            hits++;
            if (hits == 20){
                break;
            }
        }
    }
    
    document.getElementById('tweets').innerHTML = html.join('');
};

function timesince(time_value){
    var values = time_value.split(" ");
    time_value = values[1] + " " + values[2] + ", " + values[5] + " " + values[3];
    var parsed_date = Date.parse(time_value);
    var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
    var delta = parseInt((relative_to.getTime() - parsed_date) / 1000);
    delta = delta + (relative_to.getTimezoneOffset() * 60);
    
    if (delta < 60) {
        return 'less than a minute ago';
    } else if(delta < 120) {
        return 'about a minute ago';
    } else if(delta < (60*60)) {
        return (parseInt(delta / 60)).toString() + ' minutes ago';
    } else if(delta < (120*60)) {
        return 'about an hour ago';
    } else if(delta < (24*60*60)) {
        return 'about ' + (parseInt(delta / 3600)).toString() + ' hours ago';
    } else if(delta < (48*60*60)) {
        return '1 day ago';
    } else {
        return (parseInt(delta / 86400)).toString() + ' days ago';
    }
};
