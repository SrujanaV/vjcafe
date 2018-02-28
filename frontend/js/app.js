// Link all the JS Docs here
var myApp = angular.module('myApp', [
    'ui.router',
    'pascalprecht.translate',
    'angulartics',
    'angulartics.google.analytics',
    'ui.bootstrap',
    'ngAnimate',
    'ngSanitize',
    'angular-flexslider',
    'ui.swiper',
    'angularPromiseButtons',
    'toastr',
    'wu.masonry',
    'infinite-scroll',
    'angular-loading-bar'
]);

// Define all the routes below
myApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider,cfpLoadingBarProvider) {
    var tempateURL = "views/template/template.html"; //Default Template URL
 //for loader
    cfpLoadingBarProvider.includeSpinner = true;
    cfpLoadingBarProvider.includeBar = true;
    // cfpLoadingBarProvider.parentSelector = '#loading-bar-container';
    cfpLoadingBarProvider.spinnerTemplate = '<div class="spinner-overlay"><img class="spinner" src="frontend/img/fancybox_loading.gif"/></div>';
    //End of loader
    // for http request with session
    $httpProvider.defaults.withCredentials = true;
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: tempateURL,
            controller: 'HomeCtrl'
        })
        .state('about', {
            url: "/about",
            templateUrl: tempateURL,
            controller: 'AboutCtrl'
        })
        .state('franchise', {
            url: "/franchise",
            templateUrl: tempateURL,
            controller: 'FranchiseCtrl'
        })
        .state('gallery', {
            url: "/gallery",
            templateUrl: tempateURL,
            controller: 'GalleryCtrl'
        })
        .state('serve', {
            url: "/serve",
            templateUrl: tempateURL,
            controller: 'ServeCtrl'
        })
        .state('blog', {
            url: "/blog",
            templateUrl: tempateURL,
            controller: 'BlogCtrl'
        })
        .state('storelocator', {
            url: "/storelocator",
            templateUrl: tempateURL,
            controller: 'StorelocatorCtrl'
        })
          .state('coming-soon', {
            url: "/coming-soon",
            templateUrl: tempateURL,
            controller: 'ComingSoonCtrl'
        })
        .state('form', {
            url: "/form",
            templateUrl: tempateURL,
            controller: 'FormCtrl'
        })
        .state('grid', {
            url: "/grid",
            templateUrl: tempateURL,
            controller: 'GridCtrl'
        });
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(isproduction);
});

myApp.filter('serverimage', function () {
    return function (image) {
        if (image && image !== null) {
            var imgarr = image.split("/")
            //    console.log("imageserver",imgarr)
            if (imgarr.length >= 2) {
                return image;
            } else {
                return adminurl + "upload/readFile?file=" + image;
            }
        } else {
            return undefined;
        }
    }
});

// For Language JS
myApp.config(function ($translateProvider) {
    $translateProvider.translations('en', LanguageEnglish);
    $translateProvider.translations('hi', LanguageHindi);
    $translateProvider.preferredLanguage('en');
});