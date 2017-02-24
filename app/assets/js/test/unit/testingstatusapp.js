describe('Testing Crossover statusapp', function(){
	describe('Testing Crossover statusapp Controller', function(){
		
		it('should demonstrate using when (200 status)', inject(function($http, $httpBackend) {
			var $scope = {};

			/* Code Under Test */
			$http.get('http://localhost:8000/assets/json/statuslist.json')
			.success(function(data, status, headers, config) {
			  $scope.valid = true;
			  $scope.response = data;
			})
			.error(function(data, status, headers, config) {
			  $scope.valid = false;
			});
			/* End */

			$httpBackend
			.when('GET', 'http://localhost:8000/assets/json/statuslist.json')
			.respond(200);

			$httpBackend.flush();

			expect($scope.valid).toBe(true);
			expect($scope.response).toEqual();
		}));
	});
});