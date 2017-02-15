(function() {
    function ChatCtrl(Room, $scope) {
        $scope.rooms = Room.all;
        console.log($scope.rooms);
        console.log($scope.rooms[0]);
        console.log($scope.rooms[0].$value);
        Room.setRoom($scope.rooms[0]);
        Room.activeRoom();
        Room.showRoom;
        $scope.submit = function(roomname) {
            if ($scope.roomname) {
                Room.addRoom($scope.roomname);
                Room.setRoom($scope.roomname);
                $scope.roomname = '';
            };
        };
    }  

    angular
        .module('blocChat')
        .controller('ChatCtrl', ['Room', '$scope', ChatCtrl])
})();