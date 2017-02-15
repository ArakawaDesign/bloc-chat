(function() {
    function ChatCtrl(Room, $scope) {
        $scope.rooms = Room;
        $scope.rooms.setRoom();
        $scope.submit = function(roomname) {
            if ($scope.roomname) {
                $scope.rooms.addRoom($scope.roomname);
                var selectedRoom = $scope.rooms.setRoom($scope.roomname);
                $scope.roomname = '';
            };
        };
    }  

    angular
        .module('blocChat')
        .controller('ChatCtrl', ['Room', '$scope', ChatCtrl])
})();