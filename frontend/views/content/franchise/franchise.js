myApp.controller('FranchiseCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/franchise/franchise.html");
        TemplateService.title = "Franchise"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
    })