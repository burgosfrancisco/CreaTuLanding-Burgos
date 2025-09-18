import Item from "./Item";

function ItemList({ productos }) {
  return (
    <div className="container mt-4">
      <div className="row g-4">
        {productos.map((prod) => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={prod.id}>
            <Item producto={prod} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;
