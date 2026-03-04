import { useContext } from "react";
import { ProductContext } from "../context/ProductProvider";

function Cart() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(ProductContext);
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">No items in cart</p>
      ) : (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-lg p-5 hover:shadow-xl transition"  >
                <div className="flex justify-center mb-4">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="h-40 object-contain" />
                </div>
                <h2 className="text-lg font-semibold mb-3">{item.title}</h2>
                <p className="text-gray-700 mb-3">Price: ${item.price}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
                      -
                    </button>
                    <span className="font-medium">{item.quantity}</span>
                      <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                  <p className="font-semibold text-blue-600">
                    ${item.price * item.quantity}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-white p-6 rounded-xl shadow-md max-w-md mx-auto text-center">
            <h2 className="text-xl font-bold">Total: ${total}</h2>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
