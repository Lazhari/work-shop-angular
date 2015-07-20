/**
 * Created by dark0s on 20/07/15.
 */
app.directive('weatherTemp', function() {
    return {
        restrict:'E',
        scope:{
            temp: '='
        },
        templateUrl:'scripts/tpl/directives/weather-tmp.html'
        //template: '<div class="row text-center" ng-show="temp"><h1>Température: </h1> {{temp|number:0}}°</div>'
    }
});

app.directive('jumbotronTemplate', function() {
    return {
        restrict:'E',
        scope:{
            title: '=',
            description: '=',
            cities :'=',
            temp :'&',
            city:'='
        },
        templateUrl:'scripts/tpl/directives/jumbotron-template.html'
    }
});