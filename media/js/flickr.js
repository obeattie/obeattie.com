// Flickr specific stuff

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
