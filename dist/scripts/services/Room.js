(function() {
    function Room($firebaseArray) {
        var Room = {};
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);

        var showRoom = rooms;
        //Room.roomId = rooms;
        //console.log(showRoom);

        showRoom.then(function(rooms) {
            showRoom = rooms;
        });

        console.log(showRoom);

        Room.listRooms = function() {
            return {
                all: rooms
            }
        }

        Room.addRoom = function(roomname) {
            rooms.$add({ $value: roomname }).then(function(ref) {
                var id = ref.key
                this.roomname = '';
                return rooms.$indexFor(id);
            });
        };

        Room.setRoom = function(currentRoom) {
            console.log(currentRoom);
            if (!currentRoom) {
                rooms.$loaded(function(rooms) {
                return Room.showRoom = rooms[0].$value;
                });
            } else {
            return Room.showRoom = currentRoom;
            }
        };

        Room.clickRoom = function(event) {
            //console.log(event.currentTarget);
            rooms.$loaded(function(rooms) {
                console.log(event);
                console.log(event.path[1].children[1].innerHTML);
                console.log(rooms);
                Room.roomId = event.path[1].children[1].innerHTML;
                return Room.showRoom = event.currentTarget.innerHTML;
            });
        }

        return Room;

    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();