function ItemDetail({ producto }) {
  if (!producto) return <p>Producto no encontrado</p>;

  return (
    <div className="container mt-5">
      <div className="card mx-auto shadow" style={{ maxWidth: "600px" }}>
        <img
          src={producto.image}
          className="card-img-top"
          alt={producto.title}
          style={{ height: "300px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h2 className="card-title">{producto.title}</h2>
          <p className="card-text">{producto.description}</p>
          <p className="card-text fw-bold">Precio: ${producto.price}</p>
          <p className="card-text">Stock disponible: {producto.stock}</p>
          <button className="btn btn-success">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
