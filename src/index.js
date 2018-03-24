var app = angular.module("app", ['ngSanitize', 'ngMaterial', 'ngMessages', 'ngMdIcons', 'mdDataTable', 'md.data.table']);

app.run(function($http, $rootScope){

  $rootScope.backToEvents = function() {
    $rootScope.menuItem = 'events'
  }

  $rootScope.menuItem = 'events';

  $rootScope.upcoming_events = [
    {}, {}
  ]
  var map;
  function setMenuDetails() {
    $rootScope.menuItem = 'details'
    $rootScope.$apply()
  }
  function addMakerForInstitution(i) {
    var marker = new google.maps.Marker({
      tile: i.name,
      position: {lat: i.lat, lng: i.lng},
      map: map,
    })
    marker.addListener('click', function() {
      map.setZoom(15);
      map.setCenter(marker.getPosition());
      setMenuDetails()
    });
  }

  function getInstitutions() {
    var mock_institutions = [
      {
        name: "Robo Fun",
        type: "magazin",
        lat: 44.4209146,
        lng: 26.1285768,
      },
      {
        name: "Optimus Digital",
        type: "magazin",
        lat: 44.4336031,
        lng: 26.0532519,
      },
      {
        name: "Laboratorul lui Burileanu @ ETTI",
        type: "educational",
        lat: 44.4337844,
        lng: 26.0575959,
      }
    ]

    // $http.get("").then(function(res) {
      mock_institutions.forEach((i) => {
        addMakerForInstitution(i)
      })
    // })
  }

  // Load map
  var uluru = {lat: 44.4227849, lng: 26.1241555};
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: uluru,
    styles: [
          {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
          {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
          {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
          {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{color: '#263c3f'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{color: '#6b9a76'}]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{color: '#38414e'}]
          },
          {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{color: '#212a37'}]
          },
          {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{color: '#9ca5b3'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{color: '#746855'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{color: '#1f2835'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{color: '#f3d19c'}]
          },
          {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{color: '#2f3948'}]
          },
          {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{color: '#17263c'}]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{color: '#515c6d'}]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [{color: '#17263c'}]
          }
        ]
  });

  getInstitutions()

})

app.controller("MapCtrl", function($scope, $http, $rootScope){

})

app.controller("MenuCtrl", function($scope, $http, $rootScope){
  $rootScope.menuItem = 'login'

  $scope.loginWithFacebook = function() {
    alert(1)
  }

  $scope.register = function() {
    firebase.auth().createUserWithEmailAndPassword($scope.email, $scope.password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      swal("")
    })
  }

  $scope.login = function() {

  }

})
