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
        $scope.activeProject = $scope.projects[key];     //debugger;


    }; 

         // alert($scope.projectId);


    // $scope.projectId = '101';

    /* $scope.activeProject = function() {
         var myArray = $scope.projects;
         var nameKey = $scope.projectId;

         for (var i = 0; i < myArray.length; i++) {
             if (myArray[i].id == nameKey) {
                 return myArray[i];
             }
         };

         alert($scope.projectId);
     };

     */



    /*function search(nameKey, myArray) {
            for (var i = 0; i < myArray.length; i++) {
                if (myArray[i].id == nameKey) {
                    return myArray[i];
                }
            }
        }
        var array = $scope.projects;
        $scope.activeProject = search($scope.projectId, array);
        alert($scope.projectId);
    */
    // angular.toJson($scope.activeProject)



    // debugger;



});