import { useState } from "react";

function ShoppingCart({ items }) {
  // State per gestire il carrello

  const [isOpen, setIsOpen] = useState(false);

  // Calcolo del totale
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <div className="shopping-cart">
      <button className="cart-toggle" onClick={() => setIsOpen(!isOpen)}>
        🛒 Carrello ({items.length})
      </button>
      {isOpen && (
        <div className="cart-dropdown">
          {items.length === 0 ? (
            <p>Il carrello è vuoto</p>
          ) : (
            <>
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQuantity={updateQuantity}
                />
              ))}
              <div className="cart-total">Totale: €{total.toFixed(2)}</div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
export default ShoppingCart;
