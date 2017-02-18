(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });

        $stateProvider
            .state('chat', {
                url: '/',
                controller: 'ChatCtrl as chat',
                templateUrl: '/templates/chat.html'
            })
            .state('setUser', {
                url: '/setUser',
                controller: 'SetUserCtrl as setUser',
                templateUrl: '/templates/setUser.html'
            });
    };

    angular
        .module('blocChat', ['firebase','ui.router', 'ngCookies'])
        .config(config);
})();