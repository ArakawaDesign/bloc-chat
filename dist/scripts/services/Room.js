(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);

        var addRoom = function(roomname) {
            return rooms.$add({ name: roomname }).then(function(ref) {
                var id = ref.key;
                return rooms.$getRecord(id);
            });
        };

        return {
            all: rooms,
            addRoom: addRoom
        }
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();