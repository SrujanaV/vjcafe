myApp.controller('ServeCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.getHTML("content/serve/serve.html");
    TemplateService.title = "Serve"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    $scope.data = {
        skip: 0,
        limit: 8,
    }
    $scope.bricks = [];
    $scope.loadingDisable = false;
    $scope.loadMore1 = function () {
        console.log("LoadMore")
        $scope.getWhatWeServe();
        $scope.loadingDisable = true;
    }
    $scope.getWhatWeServe = function () {
        console.log("data", $scope.data);
        NavigationService.getWhatWeServe($scope.data, function (data) {
            $scope.data.skip = $scope.data.skip + 8;           
            console.log("data", data.data.data);
            if (data.data.data.length!=0) {
                console.log("inside if");
                $scope.bricks.push(data.data.data);
                $scope.bricks=_.flattenDeep($scope.bricks);
                console.log("$scope.bricks",$scope.bricks);
                $scope.loadingDisable = false;
            }
           else{
               $scope.loadingDisable=true;
           }
        })
    }
})