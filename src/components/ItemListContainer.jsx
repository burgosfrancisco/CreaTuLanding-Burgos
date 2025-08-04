import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../mockProducts';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const obtenerProductos = categoryId ? getProductsByCategory : getProducts;

    obtenerProductos(categoryId)
      .then((res) => setProductos(res))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <div className="container mt-4">
      <h2>{categoryId ? `Categoría: ${categoryId}` : 'Todos los productos'}</h2>
      {loading ? <p>Cargando productos...</p> : <ItemList productos={productos} />}
    </div>
  );
};

export default ItemListContainer;
