// Twitter specific stuff

function twitterContentAvailable(data){
    // JSON callback from Twitter when data is returned
    var html = [];
    var hits = 0;
    
    var sorter = function(x, y){
        return (y.id - x.id);
    }
    data.sort(sorter);
    
    for (var i in data) {
        var tweet = data[i];
        // Don't display @replies
        if (tweet.text[0] != '@') {
            var result = [
                '<div class="' + (tweet.user.screen_name == 'hawaiikaos2' ? 'tweet-kaos': 'tweet') + '">',
                    '<h3>' + linkifyTweet(linkify(tweet.text)) + '</h3>',
                    '<p>',
                        '<a href="http://twitter.com/' + tweet.user.screen_name + '/status/' + tweet.id + '/">' + timesince(tweet.created_at) + '</a>',
                        (tweet.user.screen_name == 'hawaiikaos2' ? linkifyTweet('<span>by @hawaiikaos2</span>') : ''),
                    '</p>',
                '</div>'
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
