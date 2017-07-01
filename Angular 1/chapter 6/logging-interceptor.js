angular.module('notesApp', []).controller('LoginCtrl', ['$http', function($http) {
        var self = this;
        self.newTodo = {};

        var fetchTodos = function() {
            $http.get('http://127.0.0.1:8080/JAXWSServer/crunchify/getMelWeekend')
                .then(function(response) {
                    self.items = response.data;
                }, function(errorResponse) {
                    console.error("GG");
                });
        };
        fetchTodos();

        self.add = function() {
            $http.post('http://127.0.0.1:8080/JAXWSServer/crunchify/getMelWeekday', self.newTodo)
                .then(fetchTodos).then(function(response) {
                    self.newTodo = {};
                });
        };
    }])
    .factory('MyLogginfInterceptor', ['$q', function($q) {
        return {
            request: function(config) {
                console.log('Request made with ', config);
                return config;
            },
            requestError: function(rejection) {
                console.log('Request error due to ', response);
                return $q.reject(rejection);
            },
            response: function(response) {
                console.log('Response from server', response);
                return response || $q.when(response);
            },
            responseError: function(rejection) {
                console.log('Response from server', response);
                return $q.reject(rejection);
            }
        };
    }])
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.interceptors.push('MyLogginfInterceptor');
    }]);
