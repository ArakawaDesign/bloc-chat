(function() {
    function MainCtrl(Room) {
        this.room = Room.all;
    }
    
    
    angular
        .module('blocChat')
        .controller('MainCtrl', ['Room', MainCtrl])
    
})();