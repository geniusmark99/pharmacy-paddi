import { useCart } from "../context/CartContext";

const Cart = () => {
    const { cart, getTotalPrice } = useCart();

    return (
        <div>
            <h2 className="text-xl font-bold">Cart</h2>
            {Object.keys(cart).length > 0 ? (
                <ul>
                    {Object.values(cart).map(({ product, count }) => (
                        <li key={product.id}>
                            {product.name} x {count} = ${product.price * count}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Cart is empty.</p>
            )}
            <p>Total: ${getTotalPrice().toFixed(2)}</p>
        </div>
    );
};

export default Cart;
