// app.js
angular.module('sortApp', [])

.controller('mainController', function($scope,$http,$timeout) {
  
    $scope.reload = function () {
        $http.get("https://api.coinmarketcap.com/v1/ticker/")
        .then(function(response) {
            $scope.sushi = response.data;
        }); 
    
        $timeout(function(){
          $scope.reload();
        },5000)
      };
      $scope.reload();
$scope.sortType     = 'name'; // set the default sort type
$scope.sortReverse  = false;  // set the default sort order
$scope.searchFish   = '';     // set the default search/filter term

// create the list of sushi rolls 
/* $scope.sushi = [
{ name: 'Cali Roll', fish: 'Crab', tastiness: 2 },
{ name: 'Philly', fish: 'Tuna', tastiness: 4 },
{ name: 'Tiger', fish: 'Eel', tastiness: 7 },
{ name: 'Rainbow', fish: 'Variety', tastiness: 6 }
]; */

});