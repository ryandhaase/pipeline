var app = angular.module('dashboardFactory', ['firebase']);

app.factory('startupsTableFactory', [
  '$q',
  '$firebaseArray',
  function($q, $firebaseArray) {

    // instantiate new firebase object
    var startupRef = new Firebase('https://pipeline8.firebaseio.com/startup');

    var startups = [];

    return {
      getStartups: function() {

        var defer = $q.defer();

        // when the startup object changes or updates
        startupRef.on('value', function(data) {

          // firebase snapshot of our startup database
          startups = $firebaseArray(startupRef);

          // on resolve, pass the startups array to our controller
          defer.resolve(startups);
        });

        // return the deferred object's promise property
        return defer.promise;
      },
    };
  },
]);

app.factory('foundersTableFactory', [
  '$q',
  '$firebaseArray',
  function($q, $firebaseArray) {

    // instantiate new firebase object
    var founderRef = new Firebase('https://pipeline8.firebaseio.com/founder');

    var founders = [];

    return {

      getFounders: function() {

        var defer = $q.defer();

        // when the founder object changes or updates
        founderRef.on('value', function(data) {

          // firebase snapshot of our founder database
          founders = $firebaseArray(founderRef);

          // on resolve, pass the founders array to our controller
          defer.resolve(founders);
        });

        // return the deferred object's promise property
        return defer.promise;
      },
    };
  },
]);

app.factory('notesTableFactory', [
  '$q',
  '$firebaseArray',
  function($q, $firebaseArray) {

    // instantiate new firebase object
    var noteRef = new Firebase('https://pipeline8.firebaseio.com/notes');

    var notes = [];

    return {
      getNotes: function() {

        var defer = $q.defer();

        // when the startup object changes or updates
        noteRef.on('value', function(data) {

          // firebase snapshot of our startup database
          notes = $firebaseArray(noteRef);

          // on resolve, pass the startups array to our controller
          defer.resolve(notes);
        });

        // return the deferred object's promise property
        return defer.promise;
      },
    };
  },
]);
