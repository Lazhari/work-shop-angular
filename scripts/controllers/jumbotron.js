/**
 * Created by dark0s on 20/07/15.
 */
app.controller('JumbotronCtrl', function($scope, cityService, weatherFactory) {
    // Init Controller
    $scope.title = 'Application Métheo Maroc';
    $scope.description = 'Application Métheo basée sur le Web service open weather map';
    $scope.city = 'Marrakech';

    $scope.temp= null;

    // Example using services
    $scope.cities = cityService.cities;

    //Example using facotries
    $scope.getTempCity = function() {
        weatherFactory.getTempCity($scope.city).then(function(result){
            $scope.temp = result;
        },function(error){
            alert(error);
        })
    }

});