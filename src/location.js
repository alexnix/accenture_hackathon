app.controller('locationCtrl', ['$scope', '$http', '$q', function ($scope, $http, $q) {
    $scope.moduleName = 'Add location';
    $scope.showHints = true;
    $scope.count = 1;
    $scope.isEditMode = false;
    $scope.institutions = [];

    $scope.location = {
        address: null,
        email: null,
        phoneNumber: null,
        description: null,
        noOfMembers: null,
        wCount: null,
        mCount: null,
        projects: []
      };
      $scope.project = {title: null, description: null};
      if($scope.location.projects && $scope.location.projects.length == 0)
        $scope.location.projects.push($scope.project);

    $scope.$watch('location.phoneNumber', function(newVal, oldVal) {
        if (newVal=="" || (newVal && newVal.length == 10))
            $scope.showHints = false;
        else
            $scope.showHints = true;     
    });

    $scope.addProject = function() {
        $scope.location.projects.push({title:null, description:null});
        $scope.count++;
    };

    $scope.editInstitution = function() {
        isEditMode = true;
    }

    $scope.addInstitution = function(location) {
        $scope.institutions.push(location);
    };

    //getUser();

    // function getUser() {
    //     var deffered = $q.defer();
    //     var query = '';
    //     $http.get('/api/getUser' + (query ? '?' + query : ''))
    //         .success(function(response) {
    //             deffered.resolve(response);
    //             $scope.user = response;
    //         }).error(function(data, status, headers, config) {
    //             deffered.reject(data);
    //     });
    // }
}]);
