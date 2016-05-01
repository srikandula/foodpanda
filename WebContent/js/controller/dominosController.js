fpModule.controller('dominosController',
				[
						'$scope',
						'$location',
						'currentTabSelectedService',
						'dominosService',
						'dataHolderService',
						function($scope, $location, currentTabSelectedService, dominosService, dataHolderService) {

							$scope.temp = "controller is synced";

							$scope.loadMenu = function(){
								if(currentTabSelectedService.get() === 4){

								}
							}

						} ]);
