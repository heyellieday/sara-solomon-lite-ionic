'use strict';
angular.module('SaraSolomonLiteIonic.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Recipes', function($http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var Recipes = function() {
    this.recipes = [];
    this.busy = false;
    this.currentPage = 1;
  };

  Recipes.prototype.all = function() {
    return this.recipes;
  },
  Recipes.prototype.get = function(recipeId) {
    var result = $.grep(this.recipes, function(e){ return e.id == recipeId; });
    console.log(result);
    return result;
  };

  Recipes.prototype.loadRecipes = function(callback) {
    if (this.busy) return;
    this.busy = true;

    var url = "recipes.json";
    console.log(this.currentPage);
    $http.get(url).success(function(data) {
      for (var i = 0; i < data.posts.length; i++) {
        this.recipes.push(data.posts[i]);
      }
      console.log(this.recipes);
      this.busy = false;
      if (typeof callback === "function") {
    // Call it, since we have confirmed it is callable
       callback();
    }
    }.bind(this));
    this.currentPage++;
  };

  return Recipes;
})
.factory('Shop', function($http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var Shop = function() {
    this.items = [];
    this.busy = false;
    this.currentPage = 1;
  };

  Shop.prototype.all = function() {
    return this.recipes;
  },
  Shop.prototype.get = function(itemId) {
    var result = $.grep(this.items, function(e){ return e.id == itemId; });
    console.log(result);
    return result;
  };

  Shop.prototype.loadItems = function(callback) {
    if (this.busy) return;
    this.busy = true;

    var url = "items.json";
    console.log(this.currentPage);
    $http.get(url).success(function(data) {
      for (var i = 0; i < data.posts.length; i++) {
        this.items.push(data.posts[i]);
      }
      console.log(this.recipes);
      this.busy = false;
      if (typeof callback === "function") {
    // Call it, since we have confirmed it is callable
       callback();
    }
    }.bind(this));
    this.currentPage++;
  };

  return Shop;
})
.factory('Videos', function($http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var Videos = function() {
    this.videos = [];
    this.busy = false;
    this.currentPage = 1;
  };

  Videos.prototype.all = function() {
    return this.recipes;
  },
  Videos.prototype.get = function(videoId, trimId) {
    var result = jQuery.grep(this.videos, function(e){ return trimId(e.id.$t, false) == videoId; });
    console.log(result);
    return result;
  };

  Videos.prototype.loadVideos = function(callback) {
    if (this.busy) return;
    this.busy = true;

    var url = "http://gdata.youtube.com/feeds/users/ssolom9/uploads?alt=json";
    console.log(this.currentPage);
    $http.get(url).success(function(data) {
      for (var i = 0; i < data.feed.entry.length; i++) {
        this.videos.push(data.feed.entry[i]);
      }
      console.log(this.videos);
      this.busy = false;
      if (typeof callback === "function") {
    // Call it, since we have confirmed it is callable
       callback();
    }
    }.bind(this));
    this.currentPage++;
  };

  return Videos;
});
