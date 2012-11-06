// Flickr specific stuff

function flickrContentAvailable(data){
    // JSON callback from Flickr when data is returned
    var html = [];
    var itercounter = 0;
    
    for (var i in data.photos.photo) {
        var photo = data.photos.photo[i];
        var cls = '';
        
        if (itercounter == 3) cls = ' class="last"';
        
        var result = [
            '<li' + cls + '>',
                '<a href="http://www.flickr.com/photo.gne?id=' + photo.id + '"><img src="' + photo.url_s + '" alt="' + photo.title + '" /></a>',
            '</li>'
        ]
        html.push(result.join(''));
        itercounter++;
        // Only want 4 items
        if (itercounter == 4) break;
    };
    
    document.getElementById('flickr').innerHTML = html.join('');
};
