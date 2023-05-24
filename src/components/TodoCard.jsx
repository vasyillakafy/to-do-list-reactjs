import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";

const TodoCard = () => {
  return(
    <div className="d-flex bd-highlight bg-light p-2 m-2">
      <h6 className="p-2 flex-grow-1 bd-highlight">Halo</h6>
      <input 
        type="checkbox" 
        className="p-2 bd-highlight mx-2" 
        name="completed"
        checked={""}
        onChange={""}/>
      <button onClick={""} className="p-2 bd-highlight mx-2 rounded btn-cs">
        <FaPencilAlt/>
      </button>
      <button onClick={""} className="p-2 bd-highlight mx-2 rounded btn-cs">
        <FaTrashAlt/>
      </button>
    </div>
  )
}

export default TodoCard