(function() {
    function Room($firebaseArray) {
        console.log(ref);
        console.log($firebaseArray);
        console.log(rooms);
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
    
        return {
            all: rooms
        };
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();