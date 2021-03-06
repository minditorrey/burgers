'use strict';

var app = angular.module('burgersApp');

app.controller('homeController', function($scope, $state, $stateParams) {
    $scope.myModel = {
        Url: 'https://thebelchers.herokuapp.com/#/',
        Name: "Check out The Belcher's Best Quotes!",
        ImageUrl: "https://upload.wikimedia.org/wikipedia/en/7/7f/Bob's_Burgers_promo.png"
    };
});

app.controller('bobController', function($scope, $state, $stateParams, $location, $anchorScroll, bobService) {
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
	
	$scope.scrollTo = function(id) {
      	$location.hash(id);
      	$anchorScroll();
    } 

});

app.controller('geneController', function($scope, $state, $stateParams, $location, $anchorScroll, geneService) {
	geneService.getAll()
    .then(res => {
        $scope.genes = res.data;
        var genes = $scope.genes;
        console.log(genes);
    })
    .catch(err => {
        console.log('err:', err);
    });
	
	      
    $scope.myModel = {
        Url: 'http://www.linkd.us/#/',
        Name: "I like linkd!"
    };
      
	$scope.likeIt = (gene) => {
		gene.likes += 1;
		console.log('likes:', gene.likes);
		geneService.updateLikes(gene)
		.then(res => {
			console.log('gene.likes:', $scope.genes.likes);

		})
	}	
	$scope.dislikeIt = (gene) => {
		gene.dislikes += 1;
		geneService.updateDislikes(gene)
		.then(res => {
			console.log('gene.dislikes:', $scope.genes.dislikes);
		})	
	}

	$scope.scrollTo = function(id) {
      	$location.hash(id);
      	$anchorScroll();
    } 
});

app.controller('louiseController', function($scope, $state, $location, $anchorScroll, $stateParams, louiseService) {
	louiseService.getAll()
    .then(res => {
        $scope.louises = res.data;
        var louises = $scope.louises;
        console.log(louises);
    })
    .catch(err => {
        console.log('err:', err);
    });
      
	$scope.likeIt = (louise) => {
		louise.likes += 1;
		console.log('likes:', louise.likes);
		louiseService.updateLikes(louise)
		.then(res => {
			console.log('louise.likes:', $scope.louises.likes);
		})
	}	
	$scope.dislikeIt = (louise) => {
		louise.dislikes += 1;
		louiseService.updateDislikes(louise)
		.then(res => {
			console.log('louise.dislikes:', $scope.louises.dislikes);
		})	
	}
	$scope.scrollTo = function(id) {
      	$location.hash(id);
      	$anchorScroll();
    } 

});

app.controller('lindaController', function($scope, $state, $stateParams, $location, $anchorScroll, lindaService) {
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

	$scope.scrollTo = function(id) {
      	$location.hash(id);
      	$anchorScroll();
    } 
});

app.controller('tinaController', function($scope, $state, $stateParams, $location, $anchorScroll, tinaService) {
	tinaService.getAll()
    .then(res => {
        $scope.tinas = res.data;
        var tinas = $scope.tinas;
        console.log(tinas);
    })
    .catch(err => {
        console.log('err:', err);
    });
	
	      
    $scope.myModel = {
        Url: 'http://www.linkd.us/#/',
        Name: "I like linkd!"
    };
      
	$scope.likeIt = (tina) => {
		tina.likes += 1;
		console.log('likes:', tina.likes);
		tinaService.updateLikes(tina)
		.then(res => {
			console.log('tina.likes:', $scope.tinas.likes);
		})
	}	
	$scope.dislikeIt = (tina) => {
		tina.dislikes += 1;
		tinaService.updateDislikes(tina)
		.then(res => {
			console.log('tina.dislikes:', $scope.tinas.dislikes);
		})	
	}
	$scope.scrollTo = function(id) {
      	$location.hash(id);
      	$anchorScroll();
    } 
});

