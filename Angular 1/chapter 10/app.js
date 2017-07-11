angular.module('fifaApp', ['ngRoute'])
    .config(function($routeProvider) {

        $routeProvider.when('/', {
                templateUrl: 'view/team_list.html',
                controller: 'TeamListCtrl as teamListCtrl'
            })
            .when('/login', {
                templateUrl: 'view/login.html'
            })
            .when('/team/:code', {
                templateUrl: 'view/team_details.html',
                controller: 'TeamDetailsCtrl as tempDetailsCtrl',
                resolve: {
                    auth: ['$q', '$location', 'UserService',
                        function($q, $location, UserService) {
                            return UserService.session().then(
                                function(success) {},
                                function(err) {
                                    $location.path('login');
                                    $location.replace();
                                    return $q, reject(err);
                                });

                        }
                    ]
                }
            });
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    });
