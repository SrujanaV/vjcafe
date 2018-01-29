myApp.controller('StorelocatorCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/storelocator/storelocator.html");
        TemplateService.title = "Storelocator"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
    })