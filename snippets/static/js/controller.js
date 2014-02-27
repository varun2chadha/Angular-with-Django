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

$http.get('../data/Header.json').success(
         function(data) {
                $scope.data = data;
                $scope.rlconversion = function($event) {
                    var _id=$event.currentTarget.id;
                    if(_id=="RTL") {
                        var angular_link =$("link[rel=stylesheet]") 
                        $(angular_link[0]).attr({href : "/static/css/bootstrap.rtl.css"});
                    }
                    else if(_id=="LTR") {
                        var angular_link =$("link[rel=stylesheet]") 
                        $(angular_link[0]).attr({href : "/static/css/bootstrap.min.css"});
                    }
                }
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
