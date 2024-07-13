import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

// custom hook
// adding isOnline hook
const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
};

const useTodos = () => {
  const [todo, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // adding auto refresh here
    const setIntervalId = setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos").then((response) => {
        setTodos(response.data.todos);
        setLoading(false);
        // console.log(todo);
      });
    }, 2000);
    return () => {
      clearInterval(setIntervalId);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { todo, loading };
};
function App() {
  const isOnline = useOnline();
  const { todo, loading } = useTodos();
  if (loading) {
    return <h1>Loading...</h1>; // display a loading message while data is being fetched
  }
  return (
    <>
      {isOnline ? <h1>You are online</h1> : <h1>You are offline</h1>}
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
