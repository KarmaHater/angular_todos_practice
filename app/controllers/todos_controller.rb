class TodosController < ApplicationController
  def index
    todos = Todo.all
    render json: todos
  end

  def create
    todo = Todo.create(title: params[:todo][:title])
    render json: todo
  end

  def destroy
    todo = Todo.find(params[:id])
    todo.destroy
  end
end
