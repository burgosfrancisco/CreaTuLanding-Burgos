const ItemDetail = ({ producto }) => {
  if (!producto) return <p>Producto no encontrado</p>;

  return (
    <div className="card mx-auto" style={{ maxWidth: "600px" }}>
      <img
        src={producto.image}
        className="card-img-top"
        alt={producto.title}
      />
      <div className="card-body">
        <h2 className="card-title">{producto.title}</h2>
        <p className="card-text">{producto.description}</p>
        <p className="card-text">Precio: ${producto.price}</p>
        <p className="card-text">Stock disponible: {producto.stock}</p>
        {/* acá podés sumar ItemCount si querés agregar al carrito */}
      </div>
    </div>
  );
};

export default ItemDetail;
