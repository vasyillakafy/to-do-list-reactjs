import { useState } from "react";
import { FaTrashAlt, FaPencilAlt, FaCheckCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { actions } from "../features/todoSlice";

const TodoCard = ({todo}) => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [updatedContent, setUpdatedContent] = useState(todo.content);

  const handleToggle = (id) => {
    dispatch(actions.toggleTodo({id}));
  };

  const handleRemove = (id) => {
    dispatch(actions.deleteTodo({id}));
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = (id) => {
    dispatch(actions.editTodo({id, content: updatedContent}));
    setEditing(false);
  };

  return(
    <div className="d-flex bd-highlight bg-light p-2 m-2">
      <input 
        type="checkbox" 
        className="p-2 bd-highlight mx-2" 
        name="completed"
        checked={todo.completed}
        onChange={()=> handleToggle(todo.id)}/>
      {
        editing ? (
          <input 
            type="text" 
            value={updatedContent}
            className="p-2 flex-grow-1 bd-highlight rounded" 
            onChange={(e)=> setUpdatedContent(e.target.value)}/>
        ) : (
          <p className="p-2 flex-grow-1 bd-highlight"
              style={{textDecoration: todo.completed ? "line-through" : "none"}}>
            {todo.content}
          </p>
        )
      }
      {editing ? (
        <button className="p-2 bd-highlight mx-2 rounded btn-cs"
                onClick={() => handleSave(todo.id)}>
          <FaCheckCircle/>
        </button> 
      ) : (
        <button onClick={handleEdit} 
                className="p-2 bd-highlight mx-2 rounded btn-cs">
          <FaPencilAlt/>
        </button>
      )}
      <button onClick={() => handleRemove(todo.id)}
              className="p-2 bd-highlight mx-2 rounded btn-cs">
        <FaTrashAlt/>
      </button>
    </div>
  );
};

export default TodoCard