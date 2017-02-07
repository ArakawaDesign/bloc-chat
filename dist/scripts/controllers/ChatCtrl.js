(function() {
    function ChatCtrl(Room, $scope, $uibModal) {
        
        
        
        $scope.rooms = Room;
        var rooms = $scope.rooms.all;
        $scope.createRoom = function() {
            $scope.rooms.all.$add({ foo: "bar"}).then(function(ref) {
                var id = ref.key;
                console.log("added record with id " + id);
                rooms.$indexFor(id);
            });
        };
    }    
    angular
        .module('blocChat')
        .controller('ChatCtrl', ['Room', '$scope', '$uibModal', ChatCtrl])
    
})();