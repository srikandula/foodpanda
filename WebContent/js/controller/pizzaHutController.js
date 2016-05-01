fpModule.controller('pizzaHutController', [
		'$scope',
		'$location',
		'currentTabSelectedService',
		'pizzaHutService',
		'dataHolderService',
		function($scope, $location, currentTabSelectedService,
				pizzaHutService, dataHolderService) {

			var menuList = {};

			$scope.loadMenu = function() {
				$scope.pizzaHutMenuList = pizzaHutService.get(function(
						testData) {
					$scope.menuList = testData.items;
				});
			}

		} ]);
