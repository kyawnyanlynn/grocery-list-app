import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.bought}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.bought ? { textDecoration: "line-through" } : {}}>
        {item.amount} {item.name}
      </span>{" "}
      <button className="deleteBtn" onClick={() => onDeleteItem(item.id)}>
        {" "}
        <FontAwesomeIcon icon={faTrashCan} className="trash-can" />{" "}
      </button>
    </li>
  );
}
