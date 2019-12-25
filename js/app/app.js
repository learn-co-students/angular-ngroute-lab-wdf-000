angular
    .module('app', ['ngRoute'])
    .service('UserService', function($http){
      this.getUser = function(name){
        return $http.get('http://0.0.0.0:8882/rest/user/' + name);
      }
    })
    .config(function($routeProvider){
      $routeProvider
        .when('/user/:id', {
            controller: 'UserController',
            templateUrl: 'views/user.html',
            resolve: {
                test: function() {
                    return 'test variable';
                }
            }
        });
    });
