(function() {
	function Message($firebaseArray) {
		var ref = firebase.database().ref().child("messages");
		var messages = $firebaseArray(ref);
		console.log($firebaseArray(ref));
			console.log(ref.key);
		return {
			all: messages,
			getByRoomId: function(roomId) {
					return ref.orderByChild('roomId').equalTo(roomId);
			}
		}
	}


	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', Message]);

})();