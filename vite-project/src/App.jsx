import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

// custom hook

const useTodos = () => {
  const [todo, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos").then((response) => {
      setTodos(response.data.todos);
      // console.log(todo);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return todo;
};
function App() {
  const todo = useTodos();

  return (
    <>
      {todo.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </>
  );
}

export default App;
