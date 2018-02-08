myApp.factory('NavigationService', function ($http) {
    var navigation = [{
        name: "Home",
        classis: "active",
        anchor: "home",
        subnav: [{
            name: "Subnav1",
            classis: "active",
            anchor: "home"
        }]
    }, {
        name: "Links",
        classis: "active",
        anchor: "links",
        subnav: []
    }];

    return {
        getNavigation: function () {
            return navigation;
        },
        getStoreLocator: function (callback) {
            $http({
                url: adminurl + 'StoreLocator/search',
                method: 'POST',
                withCredentials: false
            }).then(callback);
        },
        getAllTestimonials: function (callback) {
            $http({
                url: adminurl + 'Tesimonial/search',
                method: 'POST',
                withCredentials: false
            }).then(callback);
        },
        getAllSlides: function (callback) {
            $http({
                url: adminurl + 'Slider/search',
                method: 'POST',
                withCredentials: false
            }).then(callback);
        },
        getAllGalleryImage: function (callback) {
            $http({
                url: adminurl + 'Gallery/search',
                method: 'POST',
                withCredentials: false
            }).then(callback);
        },
    };
});