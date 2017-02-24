'use strict';

angular.module('statusapp.service', [])

    .service('StatusappService', function($http, $q) {

	   // Create a service for $http GET statuslist json data
	   
	   this.getStatusList =  function() {
	        var deferred = $q.defer();
	        var statuslist = [];

	        $http({
	            method: 'GET',
	            url: 'assets/json/statuslist.json'
	        })

	        .then(function(data){
	        	
	        	data = data.data;
	            deferred.resolve(data);

	        }, function(data){
	            console.error(data);
	        });
	        
	        return deferred.promise;
	    }
	});