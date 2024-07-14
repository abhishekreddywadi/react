import "./App.css";
function App() {
  return (
    <>
      <Todo title="todo1" description="tododescription" />
    </>
  );
}
interface Todoprop {
  title: string;
  description: string;
}

const Todo = ({ title, description }: Todoprop) => {
  return (
    <div>
      <h1>
        {title} {description}
      </h1>
    </div>
  );
};

export default App;
