const ItemListContainer = ({ greeting }) => {
  return (
    <section className="d-flex justify-content-center align-items-center" style={{ height: 'calc(100vh - 100px)' }}>
      <h3 className="fw-bold">{greeting}</h3>
    </section>
  );
};

export default ItemListContainer;
