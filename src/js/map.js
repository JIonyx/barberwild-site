function initMap() {
    var center = {lat: 62.376, lng: 89.026};
    // http://stackoverflow.com/questions/6048975/google-maps-v3-how-to-calculate-the-zoom-level-for-a-given-bounds
    // http://stackoverflow.com/questions/8670859/highlight-whole-countries-in-google-maps
    var map = new google.maps.Map(document.querySelector('.hero__map'), {
        zoom: 5, 
        center: center,
        scrollwheel: false
    });


   map.addListener('click', function(e) {
        placeMarkerAndPanTo(e.latLng, map);
    });

    function placeMarkerAndPanTo(latLng, map) {
        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            icon: 'assets/img/cactus.svg'
        });
    }
        // map.panTo(latLng);

    map.setOptions({styles: styles});
}

    function addMarker() {

    }

    var styles = [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "saturation": "-5"
            },
            {
                "color": "#ff9d3d"
            },
            {
                "weight": "0.71"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#ff7e00"
            },
            {
                "saturation": "35"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#ff7e00"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text",
        "stylers": [
            {
                "hue": "#ff7e00"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "hue": "#ff7e00"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ff9d3d"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
            {
                "hue": "#ff7e00"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#ff7e00"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text",
        "stylers": [
            {
                "hue": "#ff7e00"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "hue": "#ff7e00"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#ff7e00"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#ff7e00"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ff9d3d"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ff9d3d"
            },
            {
                "lightness": 17
            }
        ]
    }
];






window.onload = function() {
};






var marker = { 
    "city-name": "Калининград",
    "icon": "cactus.png",
    "show-name": true,
    "description": [
        {
            "shop-name": "OldBoy Barbershop",
            "address": "ул. Театральная 30<br> ТРЦ «Европа»",
            "phone-display": "+7(4012) 52-57-90",
            "phone": "84012525790",
            "email": "",
            "url": "http://oldboybarbershop.com/kaliningrad",
            "social": [
                {
                    "name": "vkontakte",
                    "icon": "vk",
                    "url": "https://vk.com/oldboy_barbershop"
                },
                {
                    "name": "facebook",
                    "icon": "fb",
                    "url": "https://www.facebook.com/oldboybarbershop.kaliningrad"
                },
                {
                    "name": "instagram",
                    "icon": "inst",
                    "url": "https://www.instagram.com/oldboy_kaliningrad/"
                }
            ]
        },
        {
            "shop-name": "OldBoy Barbershop",
            "address": "ул. Артеллерийская 22<br> ТЦ «Aртеллерийский»",
            "phone-display": "+7(4012) 52-59-59",
            "phone": "84012525959",
            "email": "",
            "url": "http://oldboybarbershop.com/kaliningrad",
            "social": [
                {
                    "name": "vkontakte",
                    "icon": "vk",
                    "url": "https://vk.com/oldboy_barbershop"
                },
                {
                    "name": "facebook",
                    "icon": "fb",
                    "url": "https://www.facebook.com/oldboybarbershop.kaliningrad"
                },
                {
                    "name": "instagram",
                    "icon": "inst",
                    "url": "https://www.instagram.com/oldboy_kaliningrad/"
                }
            ]
        }
    ]
}