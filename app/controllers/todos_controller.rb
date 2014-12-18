class TodosController < ApplicationController
  def index

    todos = ActiveModel::ArraySerializer.new(Todo.all)
    render json: todos
  end

  def create
    todo = Todo.new(title: params[:todo][:title])
    if todo.save
      render json: todo
    else
      render json: {errors: todo.errors.full_messages}
    end
  end

  def destroy
    p params
    todo = Todo.find(params[:id])
    puts "this is your todod"
    puts todo
    if todo.present?
      todo.destroy
      render json: {id: todo.id}
    else
      render json: {error: "No todo found with that id"}
    end
  end
end
