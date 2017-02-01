(function() {
    function HomeCtrl(Room) {
        console.log(Room);
        this.room = Room;
    }
    
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl])
    
})();