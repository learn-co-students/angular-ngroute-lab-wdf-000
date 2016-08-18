angular
    .module('app', ['ngRoute'])
    .service('UserService', function($http) {
  		this.getUser = function (name) {
		    return $http.get('http://0.0.0.0:8882/rest/user/' + name);
			};
    })
    .config(function($routeProvider) {
    	$routeProvider
    		.when('/user/:name', {
    			templateUrl: 'views/user.html',
    			controller: 'UserController as user',
    			resolve: {
    				user: function($routeParams, UserService) {
    					return UserService.getUser($routeParams.name);
    				}
    			}
    		});
    });