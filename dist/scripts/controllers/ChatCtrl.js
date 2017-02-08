(function() {
    function ChatCtrl(Room, $scope) {
        var rooms = $scope.rooms.all;
        $scope.submit = function(roomname) {
            if ($scope.roomname) {
                $scope.createRoom(roomname);
                $scope.roomname = '';
            }
        }
        
        $scope.createRoom = function(roomname) {
            $scope.rooms.all.$add({ $value: roomname}).then(function(ref) {
                var id = ref.key;
                rooms.$indexFor(id);
            });
        };
    }    
    angular
        .module('blocChat')
        .controller('ChatCtrl', ['Room', '$scope', ChatCtrl])
})();