var app = angular.module('burgersApp', ['ui.router', 'angulike']);

app.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: '/html/home.html',
			controller: 'homeController'
		})
    	.state('bob', {
			url: '/bob',
			templateUrl: '/html/bob.html',
			controller: 'bobController'
		})
		.state('gene', {
			url: '/gene',
			templateUrl: '/html/gene.html',
			controller: 'geneController'
		})
		.state('linda', {
			url: '/linda',
			templateUrl: '/html/linda.html',
			controller: 'lindaController'
		})		
		.state('louise', {
			url: '/louise',
			templateUrl: '/html/louise.html',
			controller: 'louiseController'
		})
		.state('tina', {
			url: '/tina',
			templateUrl: '/html/tina.html',
			controller: 'tinaController'
		})

	$urlRouterProvider.otherwise('/');

});