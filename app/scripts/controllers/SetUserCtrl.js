(function() {
    function SetUserCtrl($scope, $location, $cookies) {
      $scope.submit = function() {
        if ($scope.text) {
          var newUser = $scope.text;  
          $cookies.put('blocChatCurrentUser', newUser);
          $scope.text = '';
          $location.path('/');
        }
    }
}
    angular
        .module('blocChat')
        .controller('SetUserCtrl', ['$scope','$location', '$cookies', SetUserCtrl])
})();