myApp.controller('BlogCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/blog/blog.html");
        TemplateService.title = "blog"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $scope.blog=[
            {
                img:"img/blog/1.jpg",
                title:"Top 5 Skin Care Tips for the Monsoons!",
                date:"Friday, November 3, 2017"

            },
                 {
                img:"img/blog/1.jpg",
                title:"Top 5 Skin Care Tips for the Monsoons!ips for the Monsoons!",
                date:"Friday, November 3, 2017"

            },    {
                img:"img/blog/1.jpg",
                title:"Top 5 Skin Care Tips for the Monsoonsips for the Monsoons!!",
                date:"Friday, November 3, 2017"

            },    {
                img:"img/blog/1.jpg",
                title:"Top 5 Skin Care Tips for the Monsoons!",
                date:"Friday, November 3, 2017"

            },    {
                img:"img/blog/1.jpg",
                title:"Top 5 Skin Care Tips for the Monsoons!",
                date:"Friday, November 3, 2017"

            },  {
                img:"img/blog/1.jpg",
                title:"Top 5 Skin Care Tips for the Monsoons!",
                date:"Friday, November 3, 2017"

            }
        ]
        $scope.blogPopular=[
            {
                img:"img/blog/1.jpg",
                title:"Top 5 Skin Care Tips for the Monsoons!",
                date:"Friday, November 3, 2017"

            },
                 {
                img:"img/blog/1.jpg",
                title:"Top 5 Skin Care Tips for the Monsoons!",
                date:"Friday, November 3, 2017"

            },    {
                img:"img/blog/1.jpg",
                title:"Top 5 Skin Care Tips for the Monsoons!",
                date:"Friday, November 3, 2017"

            },    {
                img:"img/blog/1.jpg",
                title:"Top 5 Skin Care Tips for the Monsoons!",
                date:"Friday, November 3, 2017"

            },    {
                img:"img/blog/1.jpg",
                title:"Top 5 Skin Care Tips for the Monsoons!",
                date:"Friday, November 3, 2017"

            },
        ]
    })