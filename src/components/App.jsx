import { useState, useTransition } from "react";
import "../i18n.jsx";
import { Analytics } from "@vercel/analytics/react"; // let initialItems = [
import { Language } from "./Language";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { ItemList } from "./ItemList";
import { Clear } from "./Clear";
import { Footer } from "./Footer";
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
      <Language />
      <Logo />
      <Form onAddItems={handleAddItems} />
      <ItemList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Clear onClearList={handleClearList} />
      <Footer items={items} />
      <Analytics />
    </div>
  );
}
