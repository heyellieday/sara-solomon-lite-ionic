'use strict';

angular.module('SaraSolomonLiteIonic.controllers', [])

.controller('DashCtrl', function($scope) {
  $scope.openLink = function(url) {
    window.open(url, '_blank', 'location=no');
 };
})

.controller('RecipesCtrl', function($scope, Recipes) {
 $scope.Recipes = new Recipes();
 $scope.Recipes.loadRecipes();

 var end = false;
  $scope.currentPage = 1;

  $scope.fetchMore = function() {
    if (end) return;

    $http.get("http://www.drsarasolomon.com/api/get_posts/?categories=recipes&page=" + $scope.currentPage).success(function(data) {
      if (data.posts.length){
        Array.prototype.push.apply($scope.Recipies.recipes, data.posts);
        $scope.currentPage++;
      }else{ end = true;}
    }).error(function(err) {
      console.log("Failed to download list items:", err);
      end = true;
    }).finally(function() {
      $scope.$broadcast("scroll.infiniteScrollComplete");
    });
  };
})

.controller('RecipeDetailCtrl', function($scope, $stateParams, Recipes, $sce) {
  $scope.Recipes = new Recipes();
  $scope.Recipes.loadRecipes(function () {
    $scope.recipe = $scope.Recipes.get($stateParams.recipeId);
    console.log($scope.recipe);
  });
})
.controller('ShopCtrl', function($scope, Shop) {

  $scope.openLink = function(url) {
    window.open(url, '_blank', 'location=no');
 };
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



.controller('NewsletterCtrl', function($scope, $http) {


	$( ".success" ).hide();
	$scope.recipes = true;
	$scope.IFTutorial = true;
  $scope.fiftyDayChallenge = true;
  
  $scope.submit = function(){
      $http.post('http://sara-solomon-lite.herokuapp.com/subscribers', {
        first_name: $scope.first,
        last_name: $scope.last,
        email: $scope.email,
        recipes: $scope.recipes,
        if_tutorial: $scope.IFTutorial,
        fifty_day_challenge: $scope.fiftyDayChallenge

      }); 
    $( ".success" ).show();
    $( ".newsletter" ).hide();
  };
  
});
