/**
 * Created by dark0s on 20/07/15.
 */
app.factory('weatherFactory', function($http, $q, API_URL) {
    return {
        getTempCity: function(city, country) {
            country = country? country: 'ma';
            var deffered = $q.defer();
            $http.get(API_URL, {params: { q: city+ ',' + country}})
                .success(function(resp, status) {
                    deffered.resolve(resp.main.temp - 273.15);
                })
                .error(function(data, status) {
                    deffered.reject('Something is wrong!');
                });
            return deffered.promise;
        }
    }
});