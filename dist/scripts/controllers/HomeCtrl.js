(function() {
    function HomeCtrl(Room, $scope) {
        $scope.rooms = Room;
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$scope', HomeCtrl])
    
})();