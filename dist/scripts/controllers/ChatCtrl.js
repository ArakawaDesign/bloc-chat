(function() {
    function ChatCtrl(Room, $scope, Message) {
        $scope.rooms = Room.all;
        $scope.activeRoom = null;
        $scope.selectRoom = function(room) {
            $scope.activeRoom = room;
            $scope.messages = Message.getByRoomId(room.$id);
        };

        $scope.submit = function(roomname) {
            if (roomname) {
                var newRoom = Room.addRoom(roomname);

                newRoom.then(function(room) {
                    $scope.selectRoom(room);
                    $scope.roomname = '';
                });
            };
        };

        $scope.messageSubmit = function(message) {
            if (message) {
                Message.send(message);
                $scope.message = '';
            }
        }
    }  

    angular
        .module('blocChat')
        .controller('ChatCtrl', ['Room', '$scope', 'Message', ChatCtrl])
})();