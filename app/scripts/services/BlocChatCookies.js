(function() {
  function BlocChatCookies($cookies, $location) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    console.log($cookies);
    console.log(currentUser);
    if (!currentUser || currentUser === '') {

    var addNewUser = function(newUser) {
      $cookies.put('blocChatCurrentUser', newUser);
      }
    	$location.path('/setUser');
    }
  }
  angular
    .module('blocChat')
    .run(['$cookies', '$location', BlocChatCookies])
    .factory('BlocChatCookies', [BlocChatCookies]);
})();