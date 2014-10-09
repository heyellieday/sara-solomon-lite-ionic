'use strict';
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('SaraSolomonLiteIonic', ['ionic', 'config', 'SaraSolomonLiteIonic.controllers', 'SaraSolomonLiteIonic.services', 'firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dash.html',
          controller: 'DashCtrl'
        }
      }
    })

    .state('tab.recipes', {
      url: '/recipes',
      views: {
        'tab-recipes': {
          templateUrl: 'templates/tab-recipes.html',
          controller: 'RecipesCtrl'
        }
      }
    })
    .state('tab.workouts', {
      url: '/workouts',
      views: {
        'tab-workouts': {
          templateUrl: 'templates/tab-workouts.html',
          controller: 'WorkoutsCtrl'
        }
      }
    })
    .state('tab.workout-detail', {
      url: '/workouts/:workoutId',
      views: {
        'tab-workouts': {
          templateUrl: 'templates/workout-detail.html',
          controller: 'WorkoutDetailCtrl'
        }
      }
    })
    .state('tab.recipe-detail', {
      url: '/recipes/:recipeId',
      views: {
        'tab-recipes': {
          templateUrl: 'templates/recipe-detail.html',
          controller: 'RecipeDetailCtrl'
        }
      }
    })

    .state('tab.newsletter', {
      url: '/newsletter',
      views: {
        'tab-newsletter': {
          templateUrl: 'templates/tab-newsletter.html',
          controller: 'NewsletterCtrl'
        }
      }
    })
    .state('tab.shop', {
      url: '/shop',
      views: {
        'tab-shop': {
          templateUrl: 'templates/tab-shop.html',
          controller: 'ShopCtrl'
        }
      }
    })
     .state('tab.item-detail', {
      url: '/shop/:itemId',
      views: {
        'tab-shop': {
          templateUrl: 'templates/item-detail.html',
          controller: 'ItemDetailCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});


