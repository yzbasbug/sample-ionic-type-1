angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout,$state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };
  $scope.goPage = function(page) {
	  $state.go(page);
  };
  
  $scope.goLink = function(page,taskId) {
	  $state.go(page,{'taskId':taskId});
  };
  
  $scope.alert = function(alertText) {
	  alert(alertText);
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('TasklistsCtrl', function($scope) {
  $scope.tasks = [
    { title: 'Curuf Taşıma', id: 1 },
    { title: 'Alan Kazısı', id: 2 },
    { title: 'Ham Madde Taşıma', id: 3 },
    { title: 'Kazı Çalışması', id: 4 }
  ];
})

.controller('TaskCtrl', function($scope,$stateParams) {
	console.log($stateParams);
})

.controller('MessagesCtrl', function($scope) {
	 $scope.messages = [
		    { title: 'Sevkiyat Hk.', id: 1, from: 'Karayolu Daire Başkanlığı', content:'' },
		    { title: 'Sevkiyat Hk.', id: 2, from: 'Demiryolu Daire Başkanlığı', content:''  },
		    { title: 'Sevkiyat Hk.', id: 3, from: 'Karayolu Daire Başkanlığı', content:''  },
		    { title: 'Sevkiyat Hk.', id: 4, from: 'Demiryolu Daire Başkanlığı', content:''  }
		  ];
})

.controller('MessageCtrl', function($scope,$stateParams, $timeout, $ionicScrollDelegate) {
	 $scope.hideTime = true;

	  var alternate,
	    isIOS = ionic.Platform.isWebView() && ionic.Platform.isIOS();

	  $scope.sendMessage = function() {
	    alternate = !alternate;

	    var d = new Date();
	  d = d.toLocaleTimeString().replace(/:\d+ /, ' ');

	    $scope.messages.push({
	      userId: alternate ? '12345' : '54321',
	      text: $scope.data.message,
	      time: d
	    });

	    delete $scope.data.message;
	    $ionicScrollDelegate.scrollBottom(true);

	  };


	  $scope.inputUp = function() {
	    if (isIOS) $scope.data.keyboardHeight = 216;
	    $timeout(function() {
	      $ionicScrollDelegate.scrollBottom(true);
	    }, 300);

	  };

	  $scope.inputDown = function() {
	    if (isIOS) $scope.data.keyboardHeight = 0;
	    $ionicScrollDelegate.resize();
	  };

	  $scope.closeKeyboard = function() {
	    // cordova.plugins.Keyboard.close();
	  };


	  $scope.data = {};
	  $scope.myId = '12345';
	  $scope.messages = [];
})

.directive('input', function($timeout) {
  return {
    restrict: 'E',
    scope: {
      'returnClose': '=',
      'onReturn': '&',
      'onFocus': '&',
      'onBlur': '&'
    },
    link: function(scope, element, attr) {
      element.bind('focus', function(e) {
        if (scope.onFocus) {
          $timeout(function() {
            scope.onFocus();
          });
        }
      });
      element.bind('blur', function(e) {
        if (scope.onBlur) {
          $timeout(function() {
            scope.onBlur();
          });
        }
      });
      element.bind('keydown', function(e) {
        if (e.which == 13) {
          if (scope.returnClose) element[0].blur();
          if (scope.onReturn) {
            $timeout(function() {
              scope.onReturn();
            });
          }
        }
      });
    }
  }
});


