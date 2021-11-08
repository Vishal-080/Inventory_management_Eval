export const ItemList = ({ el }) => {
  const handleOTS = (e) => {
    e.target.innerHTML = "OUT OF STOCKED";
    e.target.setAttribute("id", "OTS");
  };

  return (
    <div>
      <h3>{el}</h3>
      <button onClick={handleOTS}>OUT Of STOCK</button>
    </div>
  );
};
