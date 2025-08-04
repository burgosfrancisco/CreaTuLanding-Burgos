import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../mockProducts';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    getProductById(itemId)
      .then((res) => setProducto(res))
      .finally(() => setLoading(false));
  }, [itemId]);

  return (
    <div className="container mt-4">
      {loading ? <p>Cargando detalle del producto...</p> : <ItemDetail producto={producto} />}
    </div>
  );
};

export default ItemDetailContainer;
