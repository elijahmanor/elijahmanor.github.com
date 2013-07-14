function WeatherController($scope, $http) {
  var forecasts = $scope.forecasts = [];

  $scope.search = function() {
    $scope.forecasts.push(this.get($scope.zip));
    $scope.zip = "";
  };

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

  this.get = function(zip) {
    return _.find(this.forecasts, function(item) { return item.zip === zip; });
  };

  $scope.remove = function(forecast) {
    this.forecasts.splice(this.forecasts.indexOf(forecast), 1);
  };
});
