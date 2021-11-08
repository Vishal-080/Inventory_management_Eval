import { useState } from "react";
import { v4 as uuid } from "uuid";

export const BottomSection = ({ currentList, orderList }) => {
  const [bottomButton, setBottomButton] = useState(1);

  if (bottomButton === 1) {
    return (
      <>
        <button onClick={() => setBottomButton(2)}> Show Current List </button>
        {currentList.map((el) => {
          return <itemList key={uuid()}></itemList>;
        })}
      </>
    );
  }

  if (bottomButton === 2) {
    return (
      <>
        <button onClick={() => setBottomButton(1)}> Show Order List </button>
        {orderList.map((el) => {
          return <itemList key={uuid()}></itemList>;
        })}
      </>
    );
  }
};
