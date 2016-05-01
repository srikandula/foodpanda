fpModule.controller('chutneysController', [
		'$scope',
		'$location',
		'currentTabSelectedService',
		'chutneysService',
		'dataHolderService',
		function($scope, $location, currentTabSelectedService, chutneysService,
				dataHolderService) {

			$scope.temp = "controller is synced";
			var menuList = [];

			$scope.loadMenu = function() {
				$scope.chutneysMenuList = chutneysService
						.query(function(testData) {
							$scope.menuList = testData;
						});
			}
		} ]);
