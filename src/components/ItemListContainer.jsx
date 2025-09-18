import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";
import ItemList from "./ItemList";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const productosRef = collection(db, "productos");

    const q = categoryId
      ? query(productosRef, where("category", "==", categoryId))
      : productosRef;

    getDocs(q)
      .then((snapshot) => {
        console.log("Docs encontrados:", snapshot.size);
        snapshot.docs.forEach((d) =>
          console.log("Doc:", d.id, d.data())
        );

        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductos(items);
      })
      .catch((error) => {
        console.error("Error al traer productos:", error);
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  );
}

export default ItemListContainer;

