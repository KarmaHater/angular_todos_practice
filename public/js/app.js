var app = angular.module('todo', []);
    app.controller('todoController', ['$http', '$scope', function($http, $scope) {
          $scope.errors = []
          $http.get('/todos')
          .success(function(data){
            $scope.todos = data
          })
          .error(function(xrh){

          })
          $scope.addTodo = function(){
            $scope.errors = []
            $http.post('/todos', {todo: {title: $scope.formText}})
            .success(function(data){
              if (data.errors) {
                for (var i = 0; i < data.errors.length; i++){
                  $scope.errors.push(data.errors[i])
                 };
              } else {
                $scope.todos.push(data)
              };
              $scope.formText = "";
            })
            .error(function(xrh){
              $scope.errors = xrh.responseJSON.errors
            })
          };
          $scope.deleteTodo = function(id){
            $http.delete('/todos/' + id, {todo: {id: id}})
            .success(function(data){
              for (var i = 0; i < $scope.todos.length; i++) {
                if ($scope.todos[i].id === data.id){
                  $scope.todos.splice(i, 1)
                }
              };
            })
            .error(function(xrh){
              $scope.errors = xrh.responseJSON.errors
            })
          };
        }]);
