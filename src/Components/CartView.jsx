import React from "react";
import { toast } from "react-toastify";

const CartView = ({ cart, handleRemove, totalPrice, handleClearCart }) => {
    const handleCheckOut = () => { handleClearCart(); }
    return (
        <div className="max-w-4xl mx-auto px-6 pb-10">
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Your Cart</h2>
                
                <div className="space-y-4 mb-8 ">
                    {cart.length > 0 ? cart.map((item, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-100 p-4 rounded-2xl border border-gray-50">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center overflow-hidden shrink-0">
                                    <img 
                                        src={`/products/${item.imageName}`} 
                                        alt={item.name} 
                                        className="w-10 h-10 object-contain" 
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">{item.name}</h4>
                                    <p className="text-sm text-gray-500">${item.price}</p>
                                </div>
                            </div>
                            <button 
                                onClick={() => {
                                    handleRemove(item.id); 
                                    toast.error(`${item.name} removed from cart!`, {
                                        position: "top-right", 
                                        autoClose: 1500
                                    });
                                }} 
                                className="text-pink-500 text-sm font-bold hover:text-pink-600 transition-colors cursor-pointer"
                            >
                                Remove
                            </button>
                        </div>
                    )) : (
                        <p className="text-center text-gray-400 py-10">Your cart is empty.</p>
                    )}
                </div>

                <div className="flex justify-between items-center pt-6 border-t border-gray-100 mb-8">
                    <span className="text-gray-400 font-medium">Total:</span>
                    <span className="text-2xl font-bold text-gray-900">${totalPrice}</span>
                </div>

                <button onClick={handleCheckOut} className="w-full py-4 bg-violet-600 text-white rounded-2xl font-bold hover:bg-violet-700 transition-all shadow-lg shadow-violet-100">
                    Proceed To Checkout
                </button>
            </div>
        </div>
    );
};

export default CartView;