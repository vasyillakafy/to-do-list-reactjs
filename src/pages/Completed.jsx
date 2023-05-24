import { useSelector } from "react-redux"
import TodoCard from "../components/TodoCard";

const Completed = () =>{
  const todos = useSelector(state => state.todos.todos);
  const completedTodos = todos.filter(todo => todo.completed);

  return(
  <div>
    {
      completedTodos.map((todo, index) => (
        <TodoCard
          key={index}
          todo={todo}
        />
      ))
    }
  </div>
  );
}

export default Completed