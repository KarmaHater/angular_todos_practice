var app = angular.module('todo', []);
    app.controller('todoController', ['$http', '$scope', function($http, $scope) {
          $http.get('/todos')
          .success(function(data){
            $scope.todos = data
          })
          .error(function(){
            alert(" shit's weak")
          })
          $scope.addTodo = function(){
            $http.post('/todos', {todo: {title: $scope.formText}})
            .success(function(data){
              $scope.todos.push(data)
              $scope.formText = "";
            })
          };
        }]);
