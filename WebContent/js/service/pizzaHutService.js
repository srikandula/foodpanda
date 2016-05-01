fpModule.factory('pizzaHutService',['$resource', function($resource) {
	  return  $resource(
			  'http://localhost:8080/pizzahut/rs/menu'
			  );
}
]);

