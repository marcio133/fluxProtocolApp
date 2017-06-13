angular.module('myApp').controller('ListController', function($scope, $state, HomeService) {
    var self = this;

    $scope.protocols = HomeService.getProtocols();

    $scope.remove = function(index) {
        HomeService.removeProtocol(index);
    }

    $scope.edit = function(index) {
        $state.go("home", { edit: index });
    }
});