app.controller('locationCtrl', ['$scope', '$http', '$q', function ($scope, $http, $q) {
    $scope.moduleName = 'Add location';
    $scope.showHints = true;
    $scope.count = 1;
    $scope.isEditMode = false;
    $scope.institutions = [];
    $scope.isLogged = false;

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
      $scope.institution = {
            address: "Flat 7, Ghani Baloch Court",
            phone: "1234567890",
            email: "ioana@ioana.com",
            name: "ioana's building",
            contact_name: "ioana",
            description: "this is ioana's building.",
            member_count: "47",
            women_count: "46"
      };
      $scope.computePercentage = function(w, m) {
        if(typeof(m) == "string" && typeof(w) == "string") {
            m = Number(m);
            w = Number(w);
        }
        return Math.round((w*100) / m);
      };
      $scope.institutions.push($scope.institution);
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
    //             $scope.isLogged = true;
    //         }).error(function(data, status, headers, config) {
    //             deffered.reject(data);
    //     });
    // }
}]);
