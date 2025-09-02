import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const productosRef = collection(db, 'productos');
    const consulta = categoryId
      ? query(productosRef, where('categoria', '==', categoryId))
      : productosRef;

    getDocs(consulta)
      .then((res) => {
        const productosFirebase = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductos(productosFirebase);
      })
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
