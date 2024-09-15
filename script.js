var app = angular.module('login', []);


app.controller('loginCtrl',function($scope,$timeout){

	var user = {
		'login': 'admin',
		'pwd': 'admin'
	};
	
	$scope.ui = {
		'shake' :false
	};
	
	$scope.loginaction = function(){
		if($scope.login == user.login && $scope.pwd == user.pwd){
			$scope.alert = {
				type: 'good',
				message: 'Welcome ! Your are logged ' + user.login
			};
			console.log($scope.alert);
		}
		else{

			$scope.ui.shake = true;
			console.log($scope.alert);
		}
	 $scope.$watch( $scope.ui.shake  ,function(newValue, oldValue){
		  if($scope.ui.shake == true){
				$timeout(function(){
					$scope.ui.shake = false;
				}, 1000);
			}
	 	});
	};


});