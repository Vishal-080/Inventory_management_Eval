import { useState } from "react";

export const Inventory = () => {
  const [inputText, setInputText] = useState("");
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  // Array of both the list
  const [currentList] = useState([]);
  const [orderList] = useState([]);

  const addCurrent = () => {
    currentList.push(inputText);
    //   console.log(currentList);
    setInputText("");
  };
  const addOrder = () => {
    orderList.push(inputText);
    //    console.log("Order List", orderList);
    setInputText("");
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter Items from Store"
          value={inputText}
          onChange={handleChange}
        />
        <button onClick={addCurrent}>Add to Current List</button>
        <button onClick={addOrder}>Add to Order List</button>
      </div>
    </div>
  );
};
