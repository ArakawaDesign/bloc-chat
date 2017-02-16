(function() {
	function Message($firebaseArray) {
		var ref = firebase.database().ref().child("messages").orderByChild('roomId');
		var messages = $firebaseArray(ref);
		console.log(ref)

		var getByRoomId = function(roomId) {
			return $firebaseArray(ref.equalTo(roomId));
		}

		return {
			all: messages,
			getByRoomId: getByRoomId
		}
	}


	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', Message]);

})();