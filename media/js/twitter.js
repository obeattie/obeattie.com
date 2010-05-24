// Twitter specific stuff

function twitterContentAvailable(data){
    // JSON callback from Twitter when data is returned
    var html = [];
    var hits = 0;
    
    for (var i in data) {
        var tweet = data[i];
        // Don't display @replies
        if (tweet.text[0] != '@') {
            var result = [
                '<h3>' + linkifyTweet(linkify(tweet.text)) + '</h3>',
                '<p><a href="http://twitter.com/obeattie/status/' + tweet.id + '/">' + timesince(tweet.created_at) + '</a></p>'
            ];
            html.push(result.join(''));
            hits++;
        }
    }
    
    document.getElementById('tweets').innerHTML = html.join('');
};

function linkifyTweet(tweet) {
   return tweet.replace(/(^|\s)@(\w+)/g, '$1@<a href="http://www.twitter.com/$2/">$2</a>');
};
