var app = angular.module("app", []);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", { controller:
      "WeatherController",
      templateUrl: "./weather-list.html"
    })
    .when("/details/:zip", {
      controller: "WeatherDetailController",
      templateUrl: "./weather-detail.html"
    })
    .otherwise({ redirectTo: "./" });
});

app.controller("WeatherController", function ($scope, weatherService) {
  var forecasts = $scope.forecasts = weatherService.getList();

  $scope.search = function() {
    weatherService.search($scope.zip);
    $scope.zip = "";
  };

  $scope.remove = function(forecast) {
    weatherService.remove(forecast);
  };
});

app.controller("WeatherDetailController", function ($scope, $routeParams, weatherService) {
  var forecast = weatherService.get($routeParams.zip);

  $scope.forecast = forecast;
});

app.service("weatherService", function($http) {
  this.forecasts = [];

  this.search = function(zip) {
    var url = "http://api.wunderground.com/api/7eaec3b21b154448/conditions/q/" + zip + ".json?callback=JSON_CALLBACK";
    var that = this;

    $http.jsonp(url).success(function(data) {
      var observation = data.current_observation;
      that.forecasts.push({
          id: observation.display_location.zip,
          url: observation.icon_url,
          state: observation.display_location.state_name,
          zip: observation.display_location.zip,
          city: observation.display_location.city,
          temperature: observation.temp_f,
          wind: observation.wind_mph,
          feelslike: observation.feelslike_f,
          image: observation.image.url
      });
    });
  };

  this.getList = function() {
    return this.forecasts;
  };

  this.get = function(zip) {
    return _.find(this.forecasts, function(item) { return item.zip === zip; });
  };

  this.remove = function(forecast) {
    this.forecasts.splice(this.forecasts.indexOf(forecast), 1);
  };
});