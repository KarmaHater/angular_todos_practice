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
            $http.post('/todos', {todo: {title: $scope.formText}})
            .success(function(data){
              if (data.errors) {
                console.log(data.errors)
              }else{
                $scope.todos.push(data)
              };
              $scope.formText = "";
            })
            .error(function(xrh){
              $scope.errors = xrh.responseJSON.errors
            })
          };
        }]);
