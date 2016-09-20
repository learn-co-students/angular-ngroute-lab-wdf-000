angular
    .module('app', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/user/:id', {
                templateUrl: 'views/user.html',
                controller: 'UserController',
            // this is ran as soon as we initiate the module (ng-app)
                resolve: {
                  user: function ($routeParams, UserService) {
                      return UserService.getUser($routeParams.id);
                  }
                }
            });
  });



// angular
//     .module('app', ['ngRoute'])
//   .config(function ($routeProvider) {
//     $routeProvider
//       .when('/user/:id', {
//         templateUrl: 'views/user.html',
//         controller: 'UserController as user',
//         resolve: {
//           user: function ($http, $route) {
//             return $http.get('http://0.0.0.0:8882/rest/user/' + $route.current.params.id);
//           }
//         }
//       });
//   });