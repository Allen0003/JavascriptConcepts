angular.module('notesApp', []).controller('LoginCtrl', ['$http', function($http) {
        var self = this;
        self.user = {};
        self.message = 'Please login';

        self.login = function() {
            $http.post('http://127.0.0.1:8080/JAXWSServer/crunchify/getMelWeekday',
                self.user).then(
                function(resp) {
                    self.message = resp.data.msg;
                });
        };
    }])
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.transformRequest.push(
            function(data) {
                var requestStr;
                if (data) {
                    data = JSON.parse(data);
                    for (var key in data) {
                        if (requestStr) {
                            requestStr += '&' + key + '=' + data[key];
                        } else {
                            requestStr = key + '=' + data[key];
                        }
                    }
                }
                console.log(" str = " + requestStr);
                return requestStr;
            });
        $httpProvider.defaults.headers.post['Content-Type'] = 'applocation/x-www.form-urlencoded';
    }]);
