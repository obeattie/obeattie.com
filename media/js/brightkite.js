// Brightkite specific stuff

function brightkiteContentAvailable(data) {
    if (!GBrowserIsCompatible()) return;
    
    var map = new GMap2(document.getElementById('brightkite'));
    map.addControl(new GSmallZoomControl());
    map.enableContinuousZoom();
    map.enableScrollWheelZoom();
    
    // Figure out which points to plot on the map
    var points = [];
    var linePoints = []
    var start = Date.parse('Mon, 22 Jun 2009 13:00:00 GMT-1000')
    var end = Date.parse('Tue, 30 Jun 2009 22:00:00 GMT-0700')
    
    for (i in data) {
        waypoint = data[i];
        // Only care about points created after the start of the trip
        var pointDate = Date.parse(waypoint.created_at);
        if ((pointDate > start) && (pointDate < end)) {
            points.push([pointDate, new GLatLng(waypoint.place.latitude, waypoint.place.longitude)]);
        }
    }
    
    points.sort(function(x, y) {
        return x[0] > y[0]
    });
    
    for (i in points) {
        linePoints.push(points[i][1]);
    }
    
    // Add the line overlay
    var line = new GPolyline(linePoints, '#121621', 5, { geodesic: true });
    map.addOverlay(line);
    
    // Zoom the map to the bounds of the line
    var bounds = new GLatLngBounds();
    for (i in linePoints) { bounds.extend(linePoints[i]) };
    map.setCenter(bounds.getCenter());
    map.setZoom(map.getBoundsZoomLevel(bounds));
};
