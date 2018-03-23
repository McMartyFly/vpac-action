 var myKey = "AIzaSyB2UfK-jYfWms_lEJmNnMRRBASHUMwkTK4";
var mapLocation = new google.maps.LatLng(35.2194000,-79.407506); //change coordinates here
var marker;
var map;

function initialize() {
    var mapOptions = {
        zoom: 17, //change zoom here
        center: mapLocation,
				scrollwheel: false
    };
    
    map = new google.maps.Map(document.getElementById('map-canvas'), 
    mapOptions);
    
    var image = 'img/flag.png';
    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        title: 'Sandhills Community College', //change title here
        icon: image,
        animation: google.maps.Animation.DROP,
        animation: google.maps.Animation.BOUNCE,
        position: mapLocation
    });
    google.maps.event.addListener(marker, 'click', toggleBounce);
}

function toggleBounce() {
    
    if (marker.getAnimation() != null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}

google.maps.event.addDomListener(window, 'load', initialize);
