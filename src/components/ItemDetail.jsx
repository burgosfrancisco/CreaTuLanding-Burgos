const ItemDetail = ({ producto }) => {
  if (!producto) return <p>Producto no encontrado</p>;

  return (
    <div className="card mx-auto" style={{ maxWidth: '600px' }}>
      <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
      <div className="card-body">
        <h2 className="card-title">{producto.nombre}</h2>
        <p className="card-text">{producto.descripcion}</p>
        <p className="card-text">Precio: ${producto.precio}</p>
        {/* Acá más adelante podés agregar el contador de unidades */}
      </div>
    </div>
  );
};

export default ItemDetail;
