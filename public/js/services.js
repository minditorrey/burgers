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

