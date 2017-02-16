(function() {
    function ChatCtrl(Room, $scope, Message) {
        $scope.rooms = Room.all;
        $scope.activeRoom = null;

        $scope.selectRoom = function(room) {
            $scope.activeRoom = room;
            $scope.messages = Message.getByRoomId($scope.activeRoom.$id);
            console.log($scope.messages);
        };

        $scope.submit = function(roomname) {
            if ($scope.roomname) {
                var newRoom = Room.addRoom($scope.roomname);

                newRoom.then(function(room) {
                    $scope.selectRoom(room);
                    $scope.roomname = '';
                });
            };
        };



    }  

    angular
        .module('blocChat')
        .controller('ChatCtrl', ['Room', '$scope', 'Message', ChatCtrl])
})();