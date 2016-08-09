function UserController($scope,test){
  $scope.test = test
}

angular
	.module('app')
	.controller('UserController', UserController);
