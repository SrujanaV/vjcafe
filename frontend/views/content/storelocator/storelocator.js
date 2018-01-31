myApp.controller('StorelocatorCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/storelocator/storelocator.html");
        TemplateService.title = "Storelocator"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();

        $scope.locations=[{
            "name":"Head Office",
            "address1":"Bloombay Enterprises LLP, Deividayal Mill Compound,",
            "address2":"Reay Road, Darukhana, ",
            "address3":"Mumbai, India 400010"
        }]
    })