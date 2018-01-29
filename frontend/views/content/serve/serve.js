myApp.controller('ServeCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/serve/serve.html");
        TemplateService.title = "Serve"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
    })