import { useState } from "react";
import "./inventory.css";
import { BottomSection } from "./bottomSection";

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
      <br />
      <div className="topSection">
        <h4>Our Top Section</h4>
        <input
          type="text"
          placeholder="Enter Items from Store"
          value={inputText}
          onChange={handleChange}
        />
        <button onClick={addCurrent}>Add to Current List</button>
        <button onClick={addOrder}>Add to Order List</button>
      </div>
      <br />
      <div className="bottomSection">
        <h4>Our Bottom Section</h4>
        <BottomSection currentList={currentList} orderList={orderList} />
      </div>
      <br />
    </div>
  );
};
