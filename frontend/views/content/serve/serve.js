myApp.controller('ServeCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.getHTML("content/serve/serve.html");
    TemplateService.title = "Serve"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    $scope.bricks = [
        "img/serve/1.jpg",
        "img/serve/2.jpg",
        "img/serve/3.jpg",
        "img/serve/4.jpg",
        "img/serve/5.jpg",
        "img/serve/6.jpg",
        "img/serve/7.jpg",
        "img/serve/8.jpg",
        "img/serve/9.jpg",
        "img/serve/10.jpg",
        "img/serve/11.jpg",
        "img/serve/12.jpg",
        "img/serve/13.jpg",
        "img/serve/14.jpg",
        "img/serve/15.jpg",
        "img/serve/16.jpg",
        "img/serve/17.jpg",
        "img/serve/18.jpg",
        "img/serve/19.jpg",
        "img/serve/20.jpg",
    ]
})