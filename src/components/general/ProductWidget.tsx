// import { useCart } from '../context/CartContext';

type ProductProps = {
    id: number;
    name: string;
    price: number;
};

const ProductWidget = ({ id, name, price }: ProductProps) => {
    // const { addItemToCart, removeItemFromCart } = useCart();

    return (
        <div className="border rounded-lg p-4 shadow-lg text-center">
            <h2 className="font-bold text-lg mb-2">{name}</h2>
            <p className="text-gray-500">${price.toFixed(2)}</p>
            <button
                // onClick={() => addItemToCart({ id, name, price })}
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Add
            </button>

            <button
                // onClick={() => removeItemFromCart(id)}
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Remove
            </button>
        </div>
    );
};

export default ProductWidget;
