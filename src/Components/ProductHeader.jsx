import React from 'react';

const ProductHeader = ({ cartCount, activeTab, setActiveTab }) => {
    return (
        <div className="bg-white pt-16 pb-10 px-6">
            <div className="max-w-3xl mx-auto text-center space-y-4">

                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                    Premium Digital Tools
                </h2>

                <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
                    Choose from our curated collection of premium digital products designed
                    to boost your productivity and creativity.
                </p>

                <div className="flex justify-center pt-4">
                    <div className="inline-flex items-center bg-white border border-gray-100 shadow-sm rounded-full p-1.5 gap-1">
                        <button onClick={() => setActiveTab("products")} className={`${activeTab === "products" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "text-gray-500"} cursor-pointer px-8 py-2.5 rounded-full text-sm font-bold transition-all`}>
                            Products
                        </button>
                        <button onClick={() => setActiveTab("cart")} className={`${activeTab === "cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "text-gray-500"} cursor-pointer px-8 py-2.5 rounded-full text-sm font-bold transition-all`}>
                            Cart ({cartCount})
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductHeader;