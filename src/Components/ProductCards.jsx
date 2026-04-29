import React from 'react';
import products from '../data/products.json';
import { toast } from 'react-toastify';

const ProductCards = ({ handleAddToCart }) => {
    return (
        <div className="max-w-6xl mx-auto px-6 pb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => {
                    const { id, name, imageName, badge, badgeColor, description, price, type, features } = product;

                    return (
                        <div key={id} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:scale-105 duration-500 transition-all relative flex flex-col h-full">
                            <div className={`absolute top-4 right-4 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${badgeColor}`}>
                                {badge}
                            </div>

                            <div className="w-12 h-12 mb-4 shrink-0">
                                <img
                                    src={`/products/${imageName}`}
                                    alt={name}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <h3 className="text-lg font-bold text-gray-950 mb-2">{name}</h3>

                            <p className="text-xs text-gray-500 leading-relaxed mb-4">
                                {description}
                            </p>

                            <div className="mb-4 shrink-0">
                                <span className="text-xl font-bold text-gray-950">${price}</span>
                                <span className="text-gray-400 text-[11px] font-medium ml-1">{type}</span>
                            </div>

                            <ul className="space-y-2 mb-6 grow">
                                {features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-[13px] text-gray-600">
                                        <img className='w-4 h-auto' src="/check-mark.png" alt="" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => { handleAddToCart(product); toast.success(`${product.name} added!`); }}
                                className="w-full py-3 rounded-xl cursor-pointer bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold text-xs hover:opacity-90 transition-all shadow-lg shadow-violet-100 mt-auto">
                                Buy Now
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductCards;