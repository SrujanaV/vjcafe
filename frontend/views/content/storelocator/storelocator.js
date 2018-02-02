myApp.controller('StorelocatorCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr) {
    $scope.template = TemplateService.getHTML("content/storelocator/storelocator.html");
    TemplateService.title = "Storelocator"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();

    $scope.storeLocation = []; // We need to add city and subCity array of obj
    $scope.locationButton; // To change the value(City) of button
    $scope.locationDropdownOpen = false;
    $scope.location = [{
        'city': 'Mumbai',
        'lat': 19.0760,
        'long': 72.8777,
        'subCity': [{
            'brand': 'img/brands/tony1.png',
            'name': 'Location 1 Name',
            'subCity': 'Sion',
            'url': 'Location 1 URL',
            'address': '17/A, Shashi building,ground floor, sion circle'
        }, {
            'brand': 'img/brands/ms-custom.png',
            'name': 'Location 2 Name',
            'subCity': 'Vile Parle',
            'url': 'Location 2 URL',
            'address': 'Shop 7, Meghdoot, Purushottom Kheraj Road, Opposite Kalidas Theatre',
            'contactNo': '022 69999074'
        }, {
            'brand': 'img/brands/umber.png',
            'name': 'Location 3 Name',
            'subCity': 'Mulund',
            'url': 'Location 3 URL',
            'address': 'Shop No 2, Morya Mahal,Linking Road,  mumbai central, Mumbai - 400050',
            'contactNo': '+91 8291613030'
        }, {
            'brand': 'img/brands/umber.png',
            'name': 'Location 4 Name',
            'subCity': 'Borivali',
            'url': 'Location 4 URL',
            'address': 'Shop No.5, Shroff Tower, Sodawala Lane, Himmat Nagar',
            'contactNo': '+91 9930887711'
        }, {
            'brand': 'img/brands/umber.png',
            'name': 'Location 5 Name',
            'subCity': 'Chembur',
            'url': 'Location 5 URL',
            'address': 'Shop 3, Cubic Mall, Dr. CG Road,Chembur',
            'contactNo': '022 25200302'
        }, {
            'brand': 'img/brands/umber.png',
            'name': 'Location 6 Name',
            'subCity': 'Ghatkopar',
            'url': 'Location 6 URL',
            'address': '3, Prabhu Krupa Buidling, Tilak Road, Opposite Sindhu Road',
            'contactNo': '+91 7045583872'
        }, {
            'brand': 'img/brands/umber.png',
            'name': 'Location 8 Name',
            'subCity': 'Matunga',
            'url': 'Location 8 URL',
            'address': 'Plot 362, Broadway Building, Dr. Babasaheb Ambedkar Road, Kings Circle',
            'contactNo': '022 69999071'
        }, {
            'brand': 'img/brands/umber.png',
            'name': 'Location 9 Name',
            'subCity': 'Bandra',
            'url': 'Location 9 URL',
            'address': '248, Linking Road',
            'contactNo': '022 65999075'
        }, {
            'brand': 'img/brands/umber.png',
            'name': 'Location 10 Name',
            'subCity': 'Kandivali',
            'url': 'Location 10 URL',
            'address': 'Shop 10, Shubhkamna Building, Mahavir Nagar',
            'contactNo': '+91 9664001200'
        }, {
            'brand': 'img/brands/umber.png',
            'name': 'Location 11 Name',
            'subCity': 'Malad',
            'url': 'Location 11 URL',
            'address': '4, Ganga Niwas Society, Opposite Toyota Showroom, Link road',
            'contactNo': '+91 9987150646'
        }, {
            'brand': 'img/brands/umber.png',
            'name': 'Location 12 Name',
            'subCity': 'Thane',
            'url': 'Location 12 URL',
            'address': 'Shop 5, Saro Darshan Tower, Shivaji Path,  Talao Pali Junction, Near Kalyan Jewellers, Naupada',
            'contactNo': '+91 9820318541'
        }, {
            'brand': 'img/brands/umber.png',
            'name': 'Location 13 Name',
            'subCity': 'Bhayandar',
            'url': 'Location 13 URL',
            'address': 'Shop No. 3, Krishna Kunj Building, BP Road, Opp. Sai Baba Hospital, Venkateshwar Nagar',
            'contactNo': '+91 9594278276 / +91 7977320638'
        }]

    }, {
        'city': 'Navi Mumbai',
        'lat': 19.0330,
        'long': 73.0297,
        'subCity': [{
            'brand': 'img/brands/dockers.png',
            'name': 'Location 1 Name',
            'subCity': 'Vashi',
            'url': 'Location 1 URL',
            'address': 'Pranavanandji Marg, Sector 30A, Vashi',
            'contactNo': '022 2781 0853'
        }]
    }, {
        'city': 'Thane',
        'lat': 19.2183,
        'long': 72.9781,
        'subCity': [{
            'brand': 'img/brands/umber.png',
            'name': 'Location 1 Name',
            'subCity': 'Mira Road',
            'url': 'Location 1 URL',
            'address': 'Shop 11, Oswal Orbit Shopping Center, Kanakia Junction, Chandan Shanti, Mira Road, Thane',
            'contactNo': '+91 7506963733'
        }, {
            'brand': 'img/brands/ms-custom.png',
            'name': 'Location 2 Name',
            'subCity': 'Naupada',
            'url': 'Location 2 URL',
            'address': 'Shop 5, Saro Darshan Tower, Shivaji Path,  Talao Pali Junction, Near Kalyan Jewellers',
            'contactNo': '+91 9820318541'
        }],
    }, {
        'city': 'Amravati',
        'lat': 20.9374,
        'long': 77.7796,
        'subCity': [{
            'brand': 'img/brands/ms-custom.png',
            'name': 'Location 1 Name',
            'subCity': 'Amravati',
            'url': 'Location 1 URL',
            'address': '444605, Badnera Rd, Vidhya Vihar Colony,  Navathe Nagar'
        }],
    }, {
        'city': 'Surat',
        'lat': 21.1702,
        'long': 72.8311,
        'subCity': [{
            'brand': 'img/brands/ms-custom.png',
            'name': 'Location 1 Name',
            'subCity': 'Surat',
            'url': 'Location 1 URL',
            'address': 'G-22, Prime Shoppers, Opp. Safal Square, University Road, Vesu',
            'contactNo': '+91 098792 29492',
        }],

    }, {
        'city': 'Ahmedabad',
        'lat': 23.0225,
        'long': 72.5714,
        'subCity': [{
            'brand': 'img/brands/ms-custom.png',
            'name': 'Location 2 Name',
            'subCity': 'Ahmedabad',
            'url': 'Location 2 URL',
            'address': '7, Sushilnagar society - Part 2, Manav Mandir, Drive-In-Road, Mayur Nagar Society, Sushil Nagar Society, Memnagar',
            'contactNo': '+91 79 4892 3556'
        }],

    }];

    /* Start of map */
    $scope.showSlider = true;
    var map;
    // which will hold the value of google map API
    var geocoder = new google.maps.Geocoder(); // which will hold the value of google map geocoder API


    //After 500 ms the map initialize function will be called
    var mapOptions = {
        center: new google.maps.LatLng(20.5937, 78.9629), // we have set up India lat & long
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    $timeout(function () {
        function myMap() {
            var mapCanvas = document.getElementById("map");
            for (i = 0; i < $scope.location.length; i++) {
                // We need to set the default location or city in dropdown i.e mumbai. So for that we need to iterate $scope.location to get the mumbai city
                if ($scope.location[i] == $scope.location[0]) {
                    $scope.locationButton = $scope.location[0].city;
                    mapOptions.center = new google.maps.LatLng($scope.location[0].lat, $scope.location[0].long);
                    for (j = 0; j < $scope.location[i].subCity.length; j++) {
                        geocodeAddress($scope.location[0].subCity[j]);
                    }
                }
            }

            map = new google.maps.Map(mapCanvas, mapOptions);

        }
        myMap();

    }, 500);

    function geocodeAddress(locations) {
        // console.log("locati", locations);
        var title = locations.name;
        var address = locations.subCity;
        var url = locations.url;
        $scope.storeLocation.push({
            'address': locations.address,
            'contactNo': locations.contactNo,
            'subCity': locations.subCity
        });

        console.log("storeLocation", $scope.storeLocation);
        geocoder.geocode({
                'address': address
            },

            function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    var marker = new google.maps.Marker({
                        // icon: 'http://umber.wohlig.co.in/img/map-marker-img.png',
                        icon: 'http://maps.google.com/mapfiles/ms/icons/red.png',
                        map: map,
                        position: results[0].geometry.location,
                        title: title,
                        animation: google.maps.Animation.DROP,
                        address: address,
                        url: url
                    })
                    infoWindow(marker, map, title, address, url);
                } else {
                    toastr.warning('Geocode of' + address + 'failed:' + status);
                    //alert("geocode of " + address + " failed:" + status);
                }
            });

    }

    function infoWindow(marker, map, title, address, url) {
        google.maps.event.addListener(marker, 'click', function () {
            var html = "<div><h6 style='margin-top: 5px; margin-bottom: 5px;'>" + title + "</h6><p style='margin-bottom: 5px;'>" + address + "<br></div><a href='" + url + "'>View location</a></p></div>";
            iw = new google.maps.InfoWindow({
                content: html,
                maxWidth: 200
            });
            iw.open(map, marker);
        });
    }

    //This is dropdown's function wihich is used for changing the map location after clicking on  a particular city from the dropdown list.

    // For changing addresses after clicking on a particular city
    $scope.changePlaces = function (place) {
        $scope.locationDropdownOpen = false;
        $scope.locationButton = place.city; // After clicking on dropdown, the button value changes
        $scope.showSlider = false;
        $scope.storeLocation = [];
        console.log("storeLocation", $scope.storeLocation)

        map.setCenter(new google.maps.LatLng(place.lat, place.long)); //Set the lat & long of selected dropdown's city

        for (i = 0; i < $scope.location.length; i++) {
            if ($scope.location[i].city == place.city) {
                for (j = 0; j < $scope.location[i].subCity.length; j++) {
                    // alert($scope.location[i].subCity[j].subCity);
                    geocodeAddress($scope.location[i].subCity[j]);
                }
                $timeout(function () {
                    $scope.showSlider = true;
                }, 0.5);
            }
        }

        // End of map 
    }; // End of click 
})