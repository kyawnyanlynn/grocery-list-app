import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faCartShopping } from "@fortawesome/free-solid-svg-icons"; // let initialItems = [
//   { amount: 1, name: "Onion", bought: false },
//   { amount: 2, name: "Milk", bought: false },
//   { amount: 3, name: "Tomatoes", bought: true },
// ];
export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleClearList() {
    setItems([]);
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, bought: !item.bought } : item
      )
    );
  }
  return (
    <div className="wrapper">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <ItemList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Clear onClearList={handleClearList} />
      <Footer items={items} />
    </div>
  );
}
function Logo() {
  return <h1>စျေးဝယ်စာရင်း</h1>;
}

function Form({ onAddItems }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return;
    const newItem = { name, amount, bought: false, id: Date.now() };

    onAddItems(newItem);

    setName("");
    setAmount(1);
  }

  return (
    <>
      <form className="itemForm" onSubmit={handleSubmit}>
        <select
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="ပစ္စည်းနာမည်"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>ADD</button>
      </form>
    </>
  );
}

function ItemList({ items, onDeleteItem, onToggleItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
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

function Clear({ onClearList }) {
  return (
    <div className="clearBtn">
      <button onClick={onClearList}>Clear List</button>;
    </div>
  );
}

function Footer({ items }) {
  const itemNumber = items.length;
  const itemBought = items.filter((item) => item.bought).length;
  const percentage = Math.round((itemBought / itemNumber) * 100);
  return (
    <footer className="footer">
      {itemNumber === 0 ? (
        <p>စျေးဝယ်စာရင်းမရှိသေးပါ။</p>
      ) : (
        <p>
          စျေးဝယ်စာရင်း {percentage}% ကိုဝယ်ပီးပါပီ။{" "}
          <FontAwesomeIcon icon={faCartShopping} />{" "}
        </p>
      )}
      <small>Copyright © Lynn. All Rights Reserved. </small>
    </footer>
  );
}
