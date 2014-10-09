'use strict';

angular.module('SaraSolomonLiteIonic.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('RecipesCtrl', function($scope, Recipes) {
 $scope.Recipes = new Recipes();
 $scope.Recipes.loadRecipes();
})

.controller('RecipeDetailCtrl', function($scope, $stateParams, Recipes, $sce) {
  $scope.Recipes = new Recipes();
  $scope.Recipes.loadRecipes(function () {
    $scope.recipe = $scope.Recipes.get($stateParams.recipeId);
    console.log($scope.recipe);
  });
})
.controller('ShopCtrl', function($scope, Shop) {
 $scope.Shop = new Shop();
 $scope.Shop.loadItems();
})

.controller('ItemDetailCtrl', function($scope, $stateParams, Shop, $sce) {
  $scope.Shop = new Shop();
  $scope.Shop.loadItems(function () {
    $scope.item = $scope.Shop.get($stateParams.itemId);
    console.log($scope.item);
  });
})

.controller('WorkoutsCtrl', function($scope, Videos, $sce) {
 $scope.Videos = new Videos();
 $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }
 $scope.Videos.loadVideos(function () {
 });
 $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }
  $scope.trimId = function(id, justId) {
  	if (justId == true || justId === undefined) {
  	return $scope.trustSrc("http://www.youtube.com/embed/" + id.substr(id.length - 11));
  	}else{
  	return $scope.trustSrc(id.substr(id.length - 11));
  	}

  }
})
.controller('WorkoutDetailCtrl', function($scope, $stateParams, Videos, $sce) {
$scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }
$scope.trimId = function(id, justId) {
  	if (justId === true) {
  	return $scope.trustSrc("http://www.youtube.com/embed/" + id.substr(id.length - 11));
  	}else{
  	return id.substr(id.length - 11);
  	}

}
$scope.Videos = new Videos();
$scope.Videos.loadVideos(function () {
	$scope.video = $scope.Videos.get($stateParams.workoutId, $scope.trimId);
	    console.log($scope.video);
	});
})



.controller('NewsletterCtrl', function($scope, $firebase) {

  var ref = new Firebase("https://sara-solomon-lite.firebaseio.com/");

	$( ".success" ).hide();
	$scope.email = 'test@test.com';
	$scope.first = 'Jane';
	$scope.last = 'Doe';
	$scope.recipes = true;
	$scope.IFTutorial = true;
  $scope.fiftyDayChallenge = true;
  
  $scope.submit = function(){
      ref.push({
        first: $scope.first,
        last: $scope.last,
        email: $scope.email,
        recipes: $scope.recipes,
        iftutorial: $scope.IFTutorial,
        fiftydaychallenge: $scope.fiftyDayChallenge

      });  
    $( ".success" ).show();
    $( ".newsletter" ).hide();
  };
  
});
