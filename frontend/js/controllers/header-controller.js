myApp.controller('headerCtrl', function ($scope, TemplateService) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    // $.fancybox.close(true);
     $scope.scrollTop = function()
    {
         $('html, body').animate({
        scrollTop: $('body,html').offset().top -100 
    }, 3000);
    }
    $scope.headerActive =function(){
        $( ".dropdown-holder").addClass( "active" );
    }
    //for header scroll scss change
        $(window).scroll(function () {
        if ($(document).scrollTop() > 100) {
             $("header").addClass("header-change");
            // $(".theme-main-menu-one").css("background", 'rgba(0, 0, 0, 0.54)');

        } else {
              $("header").removeClass("header-change");
        }
    });
});