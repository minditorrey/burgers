'use strict';

var app = angular.module('burgersApp');

app.controller('homeController', function($scope, $state, $stateParams) {

});

app.controller('bobController', function($scope, $state, $stateParams, bobService) {
	bobService.getAll()
    .then(res => {
        $scope.bobs = res.data;
        var bobs = $scope.bobs;
        var tags = $scope.bobs.tags;
        console.log(bobs);
    })
    .catch(err => {
        console.log('err:', err);
    });
	
	      
    $scope.myModel = {
        Url: 'http://www.linkd.us/#/',
        Name: "I like linkd!"
    };
      
	$scope.likeIt = (bob) => {
		bob.likes += 1;
		console.log('likes:', bob.likes);
		bobService.updateLikes(bob)
		.then(res => {
			console.log('bob.likes:', $scope.bobs.likes);

		})
	}	
	$scope.dislikeIt = (bob) => {
		bob.dislikes += 1;
		bobService.updateDislikes(bob)
		.then(res => {
			console.log('bob.dislikes:', $scope.bobs.dislikes);
		})
		
	}

});

app.controller('geneController', function($scope, $state, $stateParams) {


});

app.controller('louiseController', function($scope, $state, $stateParams) {


});

app.controller('lindaController', function($scope, $state, $stateParams, lindaService) {
	lindaService.getAll()
    .then(res => {
        $scope.lindas = res.data;
        var lindas = $scope.lindas;
        console.log(lindas);
    })
    .catch(err => {
        console.log('err:', err);
    });
	
	      
    $scope.myModel = {
        Url: 'http://www.linkd.us/#/',
        Name: "I like linkd!"
    };
      
	$scope.likeIt = (linda) => {
		linda.likes += 1;
		console.log('likes:', linda.likes);
		lindaService.updateLikes(linda)
		.then(res => {
			console.log('linda.likes:', $scope.lindas.likes);

		})
	}	
	$scope.dislikeIt = (linda) => {
		linda.dislikes += 1;
		lindaService.updateDislikes(linda)
		.then(res => {
			console.log('linda.dislikes:', $scope.lindas.dislikes);
		})
		
	}

});

app.controller('tinaController', function($scope, $state, $stateParams) {


});

