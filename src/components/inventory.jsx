import { useState } from "react";

export const Inventory = () => {
  const [inputText, setInputText] = useState("");

  return (
    <div>
      <div>
        <input type="text" placeholder="Enter Items from Store" />
        <button>Add to Current List</button>
        <button>Add to Order List</button>
      </div>
    </div>
  );
};
