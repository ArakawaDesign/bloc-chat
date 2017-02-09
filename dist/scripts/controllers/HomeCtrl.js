(function() {
    function HomeCtrl(Room, $scope) {
        console.log(Room);
        $scope.rooms = Room;
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$scope', HomeCtrl])
    
})();