import { useState } from "react";

const AddTransactionForm = ({ onSubmit }) => {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTransaction = {
      id: Date.now(),
      date,
      amount: parseFloat(amount) || 0,
      description,
      category,
    };
    onSubmit(newTransaction);
    setDate("");
    setAmount("");
    setDescription("");
    setCategory("");
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div id="form-inputs">
          <label
            style={{ display: "flex", marginTop: "10px", fontWeight: "bold" }}
          >
            Date:
          </label>
          <input
            className="text-input"
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />

          <input
            className="text-input"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />

          <input
            className="text-input"
            type="text"
            placeholder="Category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />

          <input
            className="text-input"
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>
        <button type="submit">Add Transaction</button>
      </form>
    </>
  );
};

export default AddTransactionForm;
