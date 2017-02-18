(function() {
    function SetUserCtrl($scope, $location, BlocChatCookies) {
        console.log(BlocChatCookies);
      $scope.submit = function() {
        if ($scope.text) {
            console.log('testing');
          var newUser = $scope.text;  
          BlocChatCookies.addNewUser(newUser);
          $scope.text = '';
        }
    }
}
    angular
        .module('blocChat')
        .controller('SetUserCtrl', ['$scope','$location', 'BlocChatCookies', SetUserCtrl])
})();