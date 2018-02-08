var mySwiper;
myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout, $filter) {
    $scope.template = TemplateService.getHTML("content/home/home.html");
    TemplateService.title = "Home"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    // $(document).ready(function(){
    //     $('.owl-carousel').owlCarousel();
    //     autoPlay: 3000;
    //   });

    NavigationService.getAllSlides(function (data) {

        $scope.mySlides = data.data.data.results;
        console.log("in slider", $scope.mySlides);
    })

    // $scope.mySlides = [
    //     'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
    //     'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
    //     'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
    //     'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
    // ];
    var abc = _.times(100, function (n) {
        return n;
    });

    var i = 0;
    $scope.buttonClick = function () {
        i++;
        console.log("This is a button Click");
    };
    $scope.mySlides1 = [
        'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
        'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
        'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
        'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg',
    ]

    $timeout(function () {
        mySwiper = new Swiper('.swiper-container1', {
            loop: true,
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 1200,
                modifier: 1,
                slideShadows: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }, 300);

    NavigationService.getAllGalleryImage(function (data) {
        var gallery = {};
        $scope.homeSlide = [];
        gallery = data.data.data.results;
        console.log("in galler", $scope.homeSlide);
        // var sortedGallery = _.sortBy(gallery, ['order']);
        _.each(gallery, function (gal) {
            _.each(gal.image, function (img) {
                $scope.homeSlide.push(img);
            })
        })
    });

    // $scope.homeSlide = [
    //     'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
    //     'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
    //     'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
    //     'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg',
    //     'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
    //     'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
    //     'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
    //     'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg',
    //     'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
    //     'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
    //     'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
    //     'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg',
    // ]
    $scope.timeline = [{
        "year": "2015",
        "description": "The VJ Cafe was founded. ",
        "img": "timeline1.jpg"
    }, {
        "year": "2016",
        "description": "opened an outlet at linking road, bandra",
        "img": "timeline2.jpg"
    }, {
        "year": "2017",
        "description": "opening of another outlet at king's circle, matunga . Also, VJ Cafe got into franchising.",
        "img": "timeline3.jpg"
    }];

    NavigationService.getAllTestimonials(function (data) {
        console.log("in testimonial", data);
        $scope.testimonials = data.data.data.results;
    });


    // $scope.testimonials=[{
    //     "content": "we are very glad to be a part of the vj cafe family. the support from the team is overwhelming. VJ cafe's team is always ready to help whenever we need it. #weloveyoutoo",
    //     "name": "Jinal Shah",
    //     "country": "Franchise Owner Ghatkopar "
    // }, {
    //     "content": "The food there is commendable, mouth watering. There are many varieties of fries and they keep adding few once in a month or two.",
    //     "name": "Sandeep Parui",
    //     "country": "Customer"
    // }, {
    //     "content": "The best place to have awesome fries in awesome prices. This place has been a hub for all college going people in vileparle. All the items on their menu are in demand by all masses.",
    //     "name": "food schmooze",
    //     "country": "Customer"
    // },{
    //     "content": "If you are looking for pure veg or jain options in wraps and fries this is the right place for you. As far as the food goes..the wraps and fries are delish..",
    //     "name": "priyanka",
    //     "country": "Customer"
    // }, {
    //     "content": "The vj cafe is very popular for its fries especially amongst youngsters. They have amazing fries options to order from.I have ordered BBQ cheese fries and omg it was delicious.",
    //     "name": "hardik kothari",
    //     "country": "Customer"
    // }, {
    //     "content": "Good place and amazing people who are running the joint. They make a point to make you comfortable and help with the order. The food is good, reasonable and in good quantity.",
    //     "name": "Neil joshi",
    //     "country": "Customer"
    // },{
    //     "content": "This is a great place to eat fries. They serve amazing fries mixed with various sauces which gives a good taste to our taste buds, I really liked the BBQ fries from here.",
    //     "name": "Manthan Kulkarni",
    //     "country": "Customer"
    // }, {
    //     "content": "The place is the adda for all teenagers... They have really good and very prompt service... Also the place is very small and very neet and clean...",
    //     "name": "asmita pawar",
    //     "country": "Customer"
    // }, {
    //     "content": "Variety of fries are offered by this place. They also have wedges, rolls, burgers and so on. Pototo twister is a must if you visit this place.",
    //     "name": "siddhesh pathak",
    //     "country": "Customer"
    // }]

})