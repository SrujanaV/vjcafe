myApp.controller('SocialhubCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/socialhub/socialhub.html");
        TemplateService.title = "Socialhub"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
    })