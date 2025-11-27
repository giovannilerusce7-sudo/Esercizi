import ProductDisplay from "../ProductDisplay/ProductDisplay";

function ShowCase({ prodotti, onAddItem, items, setItems }) {
  // Logica per aggiungere prodotti
  const addItem = (product) => {
    const existingItem = items.find((item) => item.id === product.id);
    if (existingItem) {
      setItems(
        items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setItems([...items, { ...product, quantity: 1 }]);
    }
  };
  return (
    <div>
      <h2>Prodotti</h2>
      {prodotti.map((p) => (
        <ProductDisplay key={p.id} product={p} onAddItem={addItem} />
      ))}
    </div>
  );
}

export default ShowCase;
