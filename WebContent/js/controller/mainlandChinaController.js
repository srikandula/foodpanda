fpModule.controller('mainlandChinaController',
				[
						'$scope',
						'$location',
						'currentTabSelectedService',
						'mainlandChinaService',
						'dataHolderService',
						function($scope, $location, currentTabSelectedService, mainlandChinaService, dataHolderService) {

							$scope.temp = "controller is synced";

							$scope.loadMenu = function(){
								if(currentTabSelectedService.get() === 3){
								}
							}

						} ]);
