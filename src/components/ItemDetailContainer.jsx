import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    const refDoc = doc(db, "productos", itemId);

    getDoc(refDoc)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProducto({ id: snapshot.id, ...snapshot.data() });
        } else {
          console.log("El producto no existe");
        }
      })
      .catch((error) => {
        console.error("Error al traer detalle:", error);
      })
      .finally(() => setLoading(false));
  }, [itemId]);

  if (loading) return <p>Cargando detalle...</p>;

  return (
    <div>
      {producto ? (
        <ItemDetail producto={producto} />
      ) : (
        <p>No se encontró el producto.</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;
