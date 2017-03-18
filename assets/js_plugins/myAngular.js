var app = angular.module('projects', ['ngRoute', 'ngAnimate']);



app.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
});

/*app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "index.html"
    })
        .when("/view-project", {
        templateUrl: "view-project.html"
    });
});
*/

app.directive('owl-item', [function() {
    return {
        restrict: 'A',
        //transclude: false,
        link: function(scope, element) {
            // wait for the last item in the ng-repeat then call init
            if (scope.$last) {

                var owl = $(element.parent()).owlCarousel({
                    loop: true,
                    margin: 0,
                    autoplay: false,
                    dots: true,
                    items: 1,
                    lazyLoad: true,
                });

                /*owl.on('mousewheel', '.owl-stage', function(e) {
                    if (e.deltaY > 0) {
                        owl.trigger('next.owl');
                    } else {
                        owl.trigger('prev.owl');
                    }
                    e.preventDefault();
                });*/
            }
        }
    };
}]);

app.controller('projectsCtrl', function($scope, $http) {


    $http.get("assets/json/projects.json").then(function(response) {
        $scope.projects = response.data;
        $scope.activeProject = $scope.projects[0];

        $scope.activeProjectImage = $scope.activeProject.img;


    });



    $scope.sort = function(keyname) {
        $scope.sortKey = keyname; //set the sortKey to the param passed
    };

    $scope.projectId = function(key) {
        $scope.activeProject = $scope.projects[key]; //debugger;
    };

    // alert($scope.projectId);

});

