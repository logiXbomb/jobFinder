angular.module('app', [ 'ngResource'c ]);

angular.module('app').controller('testCtrl', function($scope, $resource) {
    $scope.jobs = $resource('/api/jobs').query();
});