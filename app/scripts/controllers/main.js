'use strict';

angular.module('naturewalkApp')
  .controller('MainCtrl',['$scope', function ($scope) {
    $scope.bunny = {
    	type: 'hero',
    	position: {
    		top: 540,
    		left: 310
    	}
    };

    $scope.bunnyTypes = ['nice','mean','hero','cute'];
    $scope.amountMoved = 10;

  	// MOVE ***FUNCTION MACHINE***
  	$scope.move = function(event){
  		var n = parseInt($scope.amountMoved);


  		$scope.be = event.keyCode;

  		if (event.keyCode == 38) {
			$scope.moveUp(n);
		}
		if(event.keyCode == 40) {
			$scope.moveDown(n);
		}
		if (event.keyCode == 37) {
			$scope.moveLeft(n);
		}
		if (event.keyCode == 39){
			$scope.moveRight(n);
		}

		$scope.be = $scope.bunny.position.top + ',' + $scope.bunny.position.left; 
  	};




  	// DIRECTIONS ***function machines***
  	$scope.moveUp = function(n){
  		$scope.bunny.position.top = $scope.bunny.position.top - n;
  	};


  	$scope.moveDown = function(n){
  		$scope.bunny.position.top = $scope.bunny.position.top + n;
  	};


  	$scope.moveLeft = function(n){
  		$scope.bunny.position.left = $scope.bunny.position.left - n;
  	};


  	$scope.moveRight = function(n){
  		$scope.bunny.position.left = $scope.bunny.position.left + n;
  	};

  }]);
