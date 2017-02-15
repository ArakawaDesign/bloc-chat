(function() {
    function Room($firebaseArray) {
        var Room = {};
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);

        console.log(rooms);
        console.log(rooms[0]);

        rooms.$loaded(function(rooms) {
                console.log("async");
                console.log(rooms[0]);
        });

        var addRoom = function(roomname) {
            rooms.$add({ $value: roomname }).then(function(ref) {
                var id = ref.key;

                return rooms.$indexFor(id);
            });
        };

        var setRoom = function(currentRoom) {
            console.log(currentRoom);
            if (!currentRoom) {
                return rooms;
                rooms.$loaded(function(rooms) {
                return Room.showRoom = rooms[0].$value;
                });
            } else {
            return currentRoom;
            }
        };

        var activeRoom = function(clickedRoom) {
        }

        return {
            all: rooms,
            addRoom: addRoom,
            setRoom: setRoom,
            activeRoom: activeRoom
        }
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();