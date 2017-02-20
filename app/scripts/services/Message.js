(function() {
	function Message($firebaseArray, $cookies) {
		var ref = firebase.database().ref().child("messages").orderByChild('roomId');
		var messages = $firebaseArray(ref);

		var currentUser = $cookies.get('blocChatCurrentUser');
		var roomIdNum = null;

		var getByRoomId = function(roomId) {
			roomIdNum = roomId
			return $firebaseArray(ref.equalTo(roomId));
		}

		var send = function(newMessage) {
			messages.$add({
				content: newMessage,
				username: currentUser,
				roomId: roomIdNum,
				sentAt: getTimestamp()
			}).then(function(ref) {
				var id = ref.key;
				messages.$indexFor(id);
			});
		};
		
		var getTimestamp = function() {
			var date = new Date();
			var hours = date.getHours()
			var minutes = date.getMinutes().toString();
			var seconds = date.getSeconds().toString();
			if (hours < 12) {
				var period = 'AM';
			} else {
				period = 'PM';
			}

			if (hours > 12) {
				hours -= 12;
				hours.toString()
			}
			var timestamp = hours + ':' + minutes + ':' + seconds + " " + period;
			return timestamp;
		}
		return {
			all: messages,
			getByRoomId: getByRoomId,
			send: send
		};
	}

	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', '$cookies', Message]);

})();