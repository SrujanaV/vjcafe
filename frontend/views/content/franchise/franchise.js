myApp.controller('FranchiseCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal,$state) {
    $scope.template = TemplateService.getHTML("content/franchise/franchise.html");
    TemplateService.title = "Franchise"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();


    $scope.franchiseSubmit = function (franchise) {

        NavigationService.saveFranchise(franchise, function (data) {
            console.log("in franchise", data);

            if (data.data.value) {
                $scope.franchiseClose = $uibModal.open({
                    animation: true,
                    templateUrl: 'views/modal/franchise-thanks.html',
                    scope: $scope,
                    size: 'sm'
                });
                $timeout(function () {
                    $scope.franchiseClose.close();
                    $state.reload();
                }, 2000);

            }

        })
    }
})