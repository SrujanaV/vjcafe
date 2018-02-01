myApp.controller('StorelocatorCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/storelocator/storelocator.html");
        TemplateService.title = "Storelocator"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();

        $scope.locations=[{
            "name":"Sion West",
            "address":"<b>17/A, Shashi building,ground floor,<br>sion circle, sion west.<br>Mumbai - 400022<b>",
            "phone":"23425"
        },{
            "name":"Vile Parle West",
            "address":"Shop 2, Ground Floor, Shree Nataraj Building,<br>Opposite Bhaidas Auditorium, JVPD Lane,<br> Vile Parle West, Mumbai<br>Maharashtra 400056",
            "phone":"02269999074"
        },{
            "name":"Mulund West",
            "address":"",
            "phone":""
        },{
            "name":"Borivali West",
            "address":"",
            "phone":""
        },{
            "name":"Chembur",
            "address":"",
            "phone":""
        },{
            "name":"Ghatkopar East",
            "address":"",
            "phone":""
        },{
            "name":"Mira Road",
            "address":"",
            "phone":""
        },{
            "name":"Matunga East",
            "address":"",
            "phone":""
        },{
            "name":"Bandra West",
            "address":"",
            "phone":""
        },{
            "name":"Kandivali West",
            "address":"",
            "phone":""
        },{
            "name":"Malad West",
            "address":"",
            "phone":""
        },{
            "name":"Thane West",
            "address":"",
            "phone":""
        },{
            "name":"Bhayandar",
            "address":"",
            "phone":""
        }]

        $scope.changePlaces=function(location){
            $scope.locationDropdownOpen = false;
            $scope.locationButton = location.name; // After clicking on dropdown, the button value changes
            $scope.showSlider = false;
            $scope.storeLocation = [];
        }
    })