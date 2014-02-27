/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
 
function customerController($scope, $http) {
     $http.get('/static/data/Rating_Plan.json').success(
    	 function(data) {
    		 	$scope.data = data;
    	 }
    );

}

function tabController($scope, $http){ 

$http.get('/static/data/Header.json').success(
    	 function(data) {
    		 	$scope.data = data;
    	 }
    );

}

function footersController($scope, $http){ 
	$http.get('/static/data/Footer.json').success(
    	 function(data) {
    		 	$scope.data = data;
    	 }
    );

}



function ratinPlanCtrl($scope, $http){
	  $http.get('/static/data/general-information.json').success(
    	 function(data) {
    		 	$scope.data = data;
    	 }
    );
}
