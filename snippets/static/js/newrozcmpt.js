var newrozApp = angular.module('mycomponent', [])
  
  .directive('headernav', function() {	
    return {
      restrict: 'E',
      scope: { },
	  controller: function($scope, $element) {
     },
      templateUrl:'/static/tmpl/headernav.html',
      replace: true
    };
  })

  .directive('footernav', function() {	
    return {
      restrict: 'E',
      scope: { },
	  controller: function($scope, $element) {
     },
      templateUrl:'/static/tmpl/footernav.html',
      replace: true
    };
  })

  
   
  

  
/*  newrozApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/', {templateUrl: 'home.html', controller: customerController}).
      when('/ratingplan', {templateUrl: 'ratingplan.html', controller: ratinPlanCtrl}).
      otherwise({redirectTo: '/'});
}]); */ 

	// configure our routes
	newrozApp.config(function($routeProvider) {
		$routeProvider
		
			// route for the home page
			.when('/', {
				templateUrl : 'general-information.html',
				controller  : 'customerController'
			})

			// route for the about page
			.when('/ratingplan', {
				templateUrl : 'ratingplan.html',
				controller  : 'ratinPlanCtrl'
			})
			// route for the account refill page.
			
			// route for the logout page
			.when('/logout', {
				templateUrl : 'login.html',
				controller  : 'loginController'
			})  

	});
