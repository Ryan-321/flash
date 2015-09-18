(function() {
  var subjectServices = angular.module('subjectServices', ['ngResource']);

  subjectServices.factory('Subject', ['$resource', function($resource) {
    return $resource('http://localhost:3000/subjects/:id.json', {}, {
      update: {method:'PUT'} // Medthod that needs to be added b/c $resouce doesn't support PUT, which we need for Editing
    });
  }]);
  subjectServices.factory('Card', ['$resource', function($resource) {
    return $resource('http://localhost:3000/subjects/:subjectId/cards/:id', {}, {
      update: {method:'PUT'}
    });
  }]);
})()
