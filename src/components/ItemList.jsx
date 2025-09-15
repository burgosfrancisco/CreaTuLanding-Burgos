import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <div className="row">
      {productos.map((prod) => (
        <Item key={prod.id} producto={prod} />
      ))}
    </div>
  );
};

export default ItemList;
