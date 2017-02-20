(function() {
  function BlocChatCookies($cookies, $location) {

    var currentUser = $cookies.get('blocChatCurrentUser');

    if (!currentUser || currentUser === '') {
    	$location.path('/setUser');
    }
  }
  
  angular
    .module('blocChat')
    .run(['$cookies', '$location', BlocChatCookies]);
})();