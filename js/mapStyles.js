// Custom JS on seperate sheet. Go me

   //document.ready(function(){ 
     //    'use strict';
 

               
        function initMap() {
   
  var uluru = {lat: 42.352439, lng: -71.074341};
  
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 14, center: uluru});
   
  var marker = new google.maps.Marker({position: uluru, title: 'Stage5 Staging', icon: 'img/About/map-icon.png', map: map});

}       
 



//  });