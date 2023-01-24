
import * as React from "react";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList1";
import { TodoInterface } from "./interface";
import "./style.css";
import { BASE_URL, POST_TODOS, PUT_TODOS, DEL_TODOS } from './contants';
import axios from 'axios';

const App: React.FC = () => {
  
  axios.defaults.baseURL = BASE_URL;

  const [todos, setTodos] = React.useState<TodoInterface[]>([]);

  // Creating new todo item
  function handleTodoCreate(todo: TodoInterface) {
    // POST /todos
    axios.post(POST_TODOS, todo)
      .then(response => {
        setTodos([...todos, response.data]);
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  // Update existing todo item
  function handleTodoUpdate(
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) {
      axios.put(`${PUT_TODOS}${id}`, { name: event.target.value })
        .then(response => {
          setTodos(prevTodos => prevTodos.map(todo => todo.id === id ? response.data : todo));
        })
        .catch(error => {
          console.log(error);
        });
  }

  // Remove existing todo item
  function handleTodoRemove(id: number) {
    axios.delete(`${DEL_TODOS}${id}`)
      .then(() => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
      })
      .catch(error => {
        console.log(error);
      });
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
