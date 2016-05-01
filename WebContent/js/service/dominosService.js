fpModule.factory('dominosService',['$resource', function($resource) {
	  return  $resource(
			  'http://localhost:8080/chutneys/rs/menu'
			  );
}
]);

