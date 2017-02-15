(function() {
    function HomeCtrl(Room, $scope) {
        //I think this controller is redundant
        $scope.rooms = Room;
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$scope', HomeCtrl])
    
})();