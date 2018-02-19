myApp.controller('ServeCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.getHTML("content/serve/serve.html");
    TemplateService.title = "Serve"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();

    $scope.bricks = [{
            "image": "img/serve/1.jpg",
            "name": "Cheesy Fries"
        },{
            "image": "img/serve/2.jpg",
            "name": "Cheesy Fries"
        },
        {
            "image": "img/serve/3.jpg",
            "name": "Cheesy Fries"
        },{
            "image": "img/serve/4.jpg",
            "name": "Cheesy Fries"
        }, {
            "image": "img/serve/6.jpg",
            "name": "Cheesy Fries"
        },
        {
            "image": "img/serve/7.jpg",
            "name": "Cheesy Fries"
        }, {
            "image": "img/serve/9.jpg",
            "name": "Cheesy Fries"
        },
        {
            "image": "img/serve/18.jpg",
            "name": "Milk Shake"
        }, {
            "image": "img/serve/13.jpg",
            "name": "Cheesy Fries"
        },
        {
            "image": "img/serve/15.jpg",
            "name": "Cheesy Fries"
        }, {
            "image": "img/serve/17.jpg",
            "name": "Cheesy Fries"
        },
        {
            "image": "img/serve/11.jpg",
            "name": "Cheesy Fries"
        }, {
            "image": "img/serve/19.jpg",
            "name": "Milk Shake"
        }]

        var infScroll = new InfiniteScroll( '.container', {
            // defaults listed
          
            path: undefined,
            // REQUIRED. Determines the URL for the next page
            // Set to selector string to use the href of the next page's link
            // path: '.pagination__next'
            // Or set with {{#}} in place of the page number in the url
            // path: '/blog/page/{{#}}'
            // or set with function
            // path: function() {
            //   return return '/articles/P' + ( ( this.loadCount + 1 ) * 10 );
            // }
          
            append: undefined,
            // REQUIRED for appending content
            // Appends selected elements from loaded page to the container
          
            checkLastPage: true,
            // Checks if page has path selector element
            // Set to string if path is not set as selector string:
            //   checkLastPage: '.pagination__next'
          
            prefill: false,
            // Loads and appends pages on intialization until scroll requirement is met.
          
            responseType: 'document',
            // Sets the type of response returned by the page request.
            // Set to 'text' to return flat text for loading JSON.
          
            outlayer: false,
            // Integrates Masonry, Isotope or Packery
            // Appended items will be added to the layout
          
            scrollThreshold: 400,
            // Sets the distance between the viewport to scroll area
            // for scrollThreshold event to be triggered.
          
            elementScroll: false,
            // Sets scroller to an element for overflow element scrolling
          
            loadOnScroll: true,
            // Loads next page when scroll crosses over scrollThreshold
          
            history: 'replace',
            // Changes the browser history and URL.
            // Set to 'push' to use history.pushState()
            //    to create new history entries for each page change.
          
            historyTitle: true,
            // Updates the window title. Requires history enabled.
          
            hideNav: undefined,
            // Hides navigation element
          
            status: undefined,
            // Displays status elements indicating state of page loading:
            // .infinite-scroll-request, .infinite-scroll-load, .infinite-scroll-error
            // status: '.page-load-status'
          
            button: undefined,
            // Enables a button to load pages on click
            // button: '.load-next-button'
          
            onInit: undefined,
            // called on initialization
            // useful for binding events on init
            // onInit: function() {
            //   this.on( 'append', function() {...})
            // }
          
            debug: false,
            // Logs events and state changes to the console.
          })
})