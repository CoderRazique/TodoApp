import TodoItem from "../components/TodoItem";
import PropTypes from "prop-types";

function TodoItems({ todoItems, onDeleteClick }) {
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
}

TodoItems.propTypes = {
  todoItems: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.string.isRequired,
  // count: PropTypes.string.isRequired,
};

export default TodoItems;
