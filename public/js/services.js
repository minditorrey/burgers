'use strict';

var app = angular.module('burgersApp');

app.service('bobService', function($http) {
    this.getAll = () => {
      return $http.get('/api/bob');
    };
    this.updateLikes = bob => {
      return $http.put(`/api/bob/likes/${bob._id}`, bob);
    }
    this.updateDislikes = bob => {
      return $http.put(`/api/bob/dislikes/${bob._id}`, bob);
    }
})

app.service('lindaService', function($http) {
    this.getAll = () => {
      return $http.get('/api/linda');
    };
    this.updateLikes = linda => {
      return $http.put(`/api/linda/likes/${linda._id}`, linda);
    }
    this.updateDislikes = linda => {
      return $http.put(`/api/linda/dislikes/${linda._id}`, linda);
    }
})

app.service('tinaService', function($http) {
    this.getAll = () => {
      return $http.get('/api/tina');
    };
    this.updateLikes = tina => {
      return $http.put(`/api/tina/likes/${tina._id}`, tina);
    }
    this.updateDislikes = tina => {
      return $http.put(`/api/tina/dislikes/${tina._id}`, tina);
    }
})

app.service('geneService', function($http) {
    this.getAll = () => {
      return $http.get('/api/gene');
    };
    this.updateLikes = gene => {
      return $http.put(`/api/gene/likes/${gene._id}`, gene);
    }
    this.updateDislikes = gene => {
      return $http.put(`/api/gene/dislikes/${gene._id}`, gene);
    }
})



