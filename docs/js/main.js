(function(){
        
        var self = this;

  var startPos;
  var geoSuccess = function(position) {
    startPos = position;
    initMap(startPos.coords.latitude, startPos.coords.longitude);
  };
  navigator.geolocation.getCurrentPosition(geoSuccess);




////////////////////



var marker2 = new google.maps.Marker({
        position: {
            lat: -8.506657, 
            lng: 115.258295
        },
        map: self.map,
        icon: {
            scale: 7,
            fillColor: '#fff',
            fillOpacity: 1,
            strokeWeight: 4,
            path: google.maps.SymbolPath.CIRCLE,
            strokeColor: '#00bc66'
        }
    });

    var markers = [{
        lat: -8.519917, 
        lng: 115.270934,
        click: function(event) {
            var pos = event.position;
            self.map.setCenter(pos.lat(), pos.lng());
        },
        icon: {
            scale: 7,
            fillColor: '#fff',
            fillOpacity: 1,
            strokeWeight: 4,
            path: google.maps.SymbolPath.CIRCLE,
            strokeColor: '#00bc66'
        }
    },{
        lat: -8.520872, 
        lng: 115.262522,
        click: function(event) {
            var pos = event.position;
            self.map.setCenter(pos.lat(), pos.lng());
        },
        icon: {
            scale: 7,
            fillColor: '#fff',
            fillOpacity: 1,
            strokeWeight: 4,
            path: google.maps.SymbolPath.CIRCLE,
            strokeColor: '#00bc66'
        }
    }];





  var initMap = function(latitude, longitude){

    // Init map
    self.map = new GMaps({
        el: '.map',
        zoom: 14,
        lat: latitude,
        lng: longitude,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
    });

    self.map.addMarkers(markers);
    self.map.addMarker(marker2);

    // Remove loading overlay once map is ready
    var hasLoaded = self.map.addListener('idle', function() {
        
        var loadingOverlayElement = document.getElementsByClassName('loading-overlay')[0];
        loadingOverlayElement.className += ' hidden';

        // Remove listener
        hasLoaded.remove();
    });


  };


$('.answer a').on('click', function(){
    // self.map.setCenter(pos.lat(), pos.lng());
    // marker2.position,...
    marker2.setOptions({
            icon: {
            scale: 7,
            fillColor: '#00bc66',
            fillOpacity: 1,
            strokeWeight: 4,
            path: google.maps.SymbolPath.CIRCLE,
            strokeColor: '#00bc66'
        }})
});

}());