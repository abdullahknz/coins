// app.js
angular.module('sortApp', [])


.controller('mainController', function($scope,$http,$timeout) {
    $scope.specialCoins = [];
    $scope.mycoins = [
        "ADA",
         "XEM",
         "Omg",
         "Waves",
         "TRX",
         "BTS",
         "bytecoin",
         "steem",
         "komodo",
         "salt",
         "doge",
         "ark",
         "mco",
         "game",
         "bnt",
         "MTL",
         "nav", 
        "edg",
         "storj",
         "ppc", 
        "ubq", 
        "zen",
         "grs",
         "ant",
         "adx",
         "ftc",
         "part",
         "qrl",
         "rise",
         "fair", 
        "via",
         "nmc",
         "emc",
         "cloak", 
        "agrs",
         "aeon",
         "eng",
         "TIX", 
        "ION",
         "SIB",
         "gup",
         "ok",
         "xel", 
        "SHIFT", 
        "BLK", 
        "VRC", 
        "TRIG", 
        "golos",
         "GCR", 
        "RBY", 
        "DTB", 
        "VIB", 
        "THC", 
        "AMP",
         "TX", 
        "BSD",
         "Rads", 
        "neos",
         "clam",
         "myst",
         "slr",
         "btm",
         "exp",
         "swt", 
        "xvc",
        "NCNT"
    ]
    $scope.reload = function () {
        $http.get("https://api.coinmarketcap.com/v1/ticker/")
        .then(function(response) {
            $scope.sushi = response.data;
            $scope.specialCoins = [];
            $scope.olmayanCoinler = [];
            $scope.sushi.forEach(element => {
                for(i=0;i<$scope.mycoins.length;i++){
                    if($scope.mycoins[i].toUpperCase()==element.symbol.toUpperCase() || $scope.mycoins[i].toUpperCase()==element.name.toUpperCase()){
                        $scope.specialCoins.push(element);
                    }
                    
                }
            });
        }); 
    
        $timeout(function(){
          $scope.reload();
        },5000)
      };
      $scope.reload();
$scope.sortType     = 'name'; // set the default sort type
$scope.sortReverse  = false;  // set the default sort order
$scope.searchFish   = '';     // set the default search/filter term



});