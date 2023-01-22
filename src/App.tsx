
import * as React from "react";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList1";
import { TodoInterface } from "./interface";
import "./style.css";
import { BASE_URL } from './constants';
import axios from 'axios';

const App: React.FC = () => {
  
  axios.defaults.baseURL = BASE_URL;

  const [todos, setTodos] = React.useState<TodoInterface[]>([]);

  // Creating new todo item
  function handleTodoCreate(todo: TodoInterface) {
    const newTodosState: TodoInterface[] = Array.from(todos);
    newTodosState.push(todo);
    setTodos(newTodosState);
  }
  
  // Update existing todo item
  function handleTodoUpdate(
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) {
    const newTodosState: TodoInterface[] = Array.from(todos);

    newTodosState.find((todo: TodoInterface) => todo.id === id)!.name =
      event.target.value;

    setTodos(newTodosState);
  }

  // Remove existing todo item
  function handleTodoRemove(id: number) {
    const newTodosState: TodoInterface[] = todos.filter(
      (todo: TodoInterface) => todo.id !== id
    );

    setTodos(newTodosState);
  }

  // Check existing todo item as completed
  function handleTodoComplete(id: number) {
    const newTodosState: TodoInterface[] = Array.from(todos);
    // Find the correct todo item and update its 'isCompleted' key
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted =
      !newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted;
    setTodos(newTodosState);
  }

  return (
    <div className="App">
      <React.Fragment>
        <h2>My ToDo APP</h2>
        <ToDoForm todos={todos} handleTodoCreate={handleTodoCreate} />
        <ToDoList
          handleTodoUpdate={handleTodoUpdate}
          handleTodoRemove={handleTodoRemove}
          handleTodoComplete={handleTodoComplete}
          todos={todos}
        />
      </React.Fragment>
    </div>
  );
};
export default App;
