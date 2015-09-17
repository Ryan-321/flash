(function(){

  var subjectsControllers = angular.module('subjectsControllers', ['ngRoute'])

 // index controller
  subjectsControllers.controller('subjectsController', ['Subject', function(Subject) {
      this.subjects = Subject.query(function(data){
        console.log(data) // checking to see what returning in Subject.query();
      });
    }]);

  // new controller (will create the subjects)
  subjectsControllers.controller('newSubjectsController',['$location','Subject', function($location, Subject){
    this.create = function() {
      console.log("new fired")
      console.log(this.subject)
      Subject.save(this.subject, function(subject){ // only need subject if I want to pass in ID to URL
        $location.path("/subjects/")
      })
    }
  }]); // closes newSubjectsController



  // show controller
  subjectsControllers.controller('showSubjectsController', ['$routeParams','$location','$http', 'Subject', function($routeParams, $location, $http, Subject){
    this.subject = Subject.get({id: $routeParams.id} // function(subject){
      // subject.cards = Card.query({subjectId: $routeParams.id}); -  where cards will go
    // }
  );

    this.delete = function(id){
        Subject.delete({id: id}, function(){
	      $location.path("/subjects")
      });
    }
  }]); // closes showSubjectsController



  // edit controller
  subjectsControllers.controller('editSubjectsController', ['$location', '$routeParams', 'Subject', function($location, $routeParams, Subject){
    this.subject = Subject.get({id: $routeParams.id}); // identifies the subject using routeParams to grab id from URL
    this.update = function(){
    this.subject.$update({id: this.subject.id});
    $location.path("/subjects/" + this.subject.id)
    }
  }]); // closes editSubjectsController



})()
