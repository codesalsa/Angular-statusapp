'use strict';

angular.module('statusapp.controllers', [])

.controller('StatuslistCtrl', function($scope, $uibModal, $log, StatusappService) {

	$scope.statuslist = {};

    // Callback for StatusappService with jsondata in controller
	StatusappService.getStatusList()
        .then(function(data) {
            $scope.statuslist= function() {
                $scope.statuslist = data;
            }
            $scope.statuslist();
        }, function(data){
            console.error(data);
        });

    //Open Item-details modal window with defined size, selected Item's details
    $scope.openItemDetail = function (size, selecteditem, detTitle) {

        var modalInstance = $uibModal.open({
          templateUrl: 'modaltemplate.html', // Load Modal template file
          size: size,
          controller: 'modalInstanceCtrl',  // Modal Controller
          resolve:{                         // Modal data
            modalitem: function(){
                return selecteditem;
            },
            detTitle: function(){
                return detTitle;
            }
          }
        });
    };

})

.controller('modalInstanceCtrl', function($scope, $http, $uibModalInstance, modalitem, detTitle) {

    //console.log(detTitle);
    $scope.modalitem = modalitem;
    $scope.detTitle = detTitle;

    //Modal cancel function
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});
