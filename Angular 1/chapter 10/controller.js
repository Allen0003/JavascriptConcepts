angular.module('fifaApp')
    .controller('MainCtrl', ['UserService', function(UserService) {
        var self = this;
        self.userService = UserService;
        UserService.session();
    }])

    .controller('TeamListCtrl', ['FifaService', function(FifaService) {
        var self = this;
        self.user = {
            username: '',
            password: ''
        };
        self.login = function() {
            UserService.login(self.user).then(function(success) {
                $location.path('/team');
            }, function(error) {
                self.errorMessage = error.data.msg;
            })
        };
    }])


    .controller('LoginCtrl', ['UserService', '$location', function(UserService, $location) {
        var self = this;
        self.user = {
            username: '',
            password: ''
        };
        self.login = function() {
            UserService.login(self.user).then(function(success) {
                $location.path('/team');
            }, function(error) {
                self.errorMessage = error.data.msg;
            })
        };
    }])


    .controller('TeamDetailsCtrl', ['$location', '$routeParams', 'FifaService',
        function($location, $routeParams, FifaService) {
            var self = this;
            slef.team = {};
            FifaService.getDetails($rountParams.code).then(function(resp) {
                slef.team = resp.data;
            }, function(error) {
                $location.path('/login');
            });
        }
    ]);
