// $('.nav-link').click(function(e){
//     $(e.target).css("color","blue")
//     $(e.target).addClass("activee")
//     // e.preventDefault() ;
//     console.log("hh")
// })

(function() {

    if(!!navigator.geolocation) {

        var map;

        var mapOptions = {
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        map = new google.maps.Map(document.getElementById('google_canvas'), mapOptions);

        navigator.geolocation.getCurrentPosition(function(position) {

            var geolocate = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

            var infowindow = new google.maps.InfoWindow({
                map: map,
                position: geolocate,
                content:''
                  
            });

            map.setCenter(geolocate);

        });

    } else {
        document.getElementById('google_canvas').innerHTML = 'No Geolocation Support.';
    }

})();

