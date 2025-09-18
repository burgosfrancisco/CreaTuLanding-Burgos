import { Link } from "react-router-dom";

function Item({ producto }) {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={producto.image}
        className="card-img-top"
        alt={producto.title}
        style={{ height: "180px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{producto.title}</h5>
        <p className="card-text fw-bold mb-3">${producto.price}</p>
        <Link to={`/item/${producto.id}`} className="btn btn-primary mt-auto">
          Ver detalle
        </Link>
      </div>
    </div>
  );
}

export default Item;
