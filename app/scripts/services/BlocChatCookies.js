(function() {
  function BlocChatCookies($cookies, $location) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    console.log($cookies);
    console.log(currentUser);
    if (!currentUser || currentUser === '') {
    	$location.path('/setUser');
    }
  }
  angular
    .module('blocChat')
    .run(['$cookies', '$location', BlocChatCookies]);
})();