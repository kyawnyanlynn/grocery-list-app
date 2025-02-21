import { useState } from "react";
import { useTranslation } from "react-i18next";

export function Form({ onAddItems }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(1);
  const { t } = useTranslation();

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
          placeholder={t("placeholder")}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>{t("add")}</button>
      </form>
    </>
  );
}
