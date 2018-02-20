myApp.controller('ServeCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.getHTML("content/serve/serve.html");
    TemplateService.title = "Serve"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();

    // $scope.bricks = [{
    //         "image": "img/serve/1.jpg",
    //         "name": "Cheesy Fries"
    //     }, {
    //         "image": "img/serve/2.jpg",
    //         "name": "Cheesy Fries"
    //     },
    //     {
    //         "image": "img/serve/3.jpg",
    //         "name": "Cheesy Fries"
    //     }, {
    //         "image": "img/serve/4.jpg",
    //         "name": "Cheesy Fries"
    //     }, {
    //         "image": "img/serve/6.jpg",
    //         "name": "Cheesy Fries"
    //     },
    //     {
    //         "image": "img/serve/7.jpg",
    //         "name": "Cheesy Fries"
    //     }, {
    //         "image": "img/serve/9.jpg",
    //         "name": "Cheesy Fries"
    //     },
    //     {
    //         "image": "img/serve/18.jpg",
    //         "name": "Milk Shake"
    //     }, {
    //         "image": "img/serve/13.jpg",
    //         "name": "Cheesy Fries"
    //     },
    //     {
    //         "image": "img/serve/15.jpg",
    //         "name": "Cheesy Fries"
    //     }, {
    //         "image": "img/serve/17.jpg",
    //         "name": "Cheesy Fries"
    //     },
    //     {
    //         "image": "img/serve/11.jpg",
    //         "name": "Cheesy Fries"
    //     }, {
    //         "image": "img/serve/19.jpg",
    //         "name": "Milk Shake"
    //     }
    // ]
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