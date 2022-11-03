const argCords = {lat: -34.0, lng: -64.0};



const mapDiv = document.getElementById("map");

const autocompletado = document.getElementById ("caja-busqueda");

let map;

let marker;

let autocomplete;

function initMap(){
    map = new google.maps.Map(document.getElementById("map"), {
      center: argCords,
      zoom: 3,
      
    });
    infoWindow = new google.maps.InfoWindow();
  
    const locationButton = document.createElement("button");
  
    locationButton.textContent = "Encontrate apretando aca";
    locationButton.classList.add("custom-map-control-button");
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
    locationButton.addEventListener("click", () => {
      // Try HTML5 geolocation.

      

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const pos = {
                    zoom: 9,
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                marker = new google.maps.Marker({
                    position: pos, 
                    map: map,
                });
                
                infoWindow.setPosition(pos);
                infoWindow.setContent("Estas aqui!");
                infoWindow.open(map);
                map.setCenter(pos);
                initAutocomplete();
                
            },
            
            function initAutocomplete(){
                autocomplete = new google.maps.places.Autocomplete(autocompletado);
                autocomplete.addListener('place_changed' , function (){
                  const place = autocomplete.getPlace();
                  map.setCenter(place.geometry.location);
                });
               },
            
        
        () => {
            handleLocationError(true, infoWindow, map.getCenter());
        }
        );
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
      }
    });
  }
  
  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
      browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
  }
  
  window.initMap = initMap;


// {

//     map = new google.maps.Map(mapDiv, {
//         center: argCords,
//         zoom: 4,
//     });

//     marker = new google.maps.Marker({

//     })
// }
