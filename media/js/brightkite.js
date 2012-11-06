// Brightkite specific stuff

function brightkiteContentAvailable(data) {
    if (!GBrowserIsCompatible()) return;
    
    var map = new GMap2(document.getElementById('brightkite'));
    map.addControl(new GSmallZoomControl());
    map.enableContinuousZoom();
    
    var linePoints = []
    for (i in data) {
        var waypoint = data[i];
        linePoints.push(new GLatLng(waypoint.place.latitude, waypoint.place.longitude));
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
