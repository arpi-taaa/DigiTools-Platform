import React from 'react';

const NavBar = ({ cartCount }) => {
    return (
        <div className="bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    <div className="shrink-0">
                        <h1 className="text-2xl font-bold text-violet-600 tracking-tight cursor-pointer">
                            DigiTools
                        </h1>
                    </div>

                    <div className="hidden md:flex items-center space-x-8 text-gray-600 font-medium text-sm">
                        <a href="#" className="hover:text-violet-600 transition-colors">Products</a>
                        <a href="#" className="hover:text-violet-600 transition-colors">Features</a>
                        <a href="#" className="hover:text-violet-600 transition-colors">Pricing</a>
                        <a href="#" className="hover:text-violet-600 transition-colors">Testimonials</a>
                        <a href="#" className="hover:text-violet-600 transition-colors">FAQ</a>
                    </div>

                    <div className="flex items-center space-x-5">
                        <div className="relative cursor-pointer text-gray-600 hover:text-violet-600 p-1">
                            <img className='w-6' src="/shopping-cart.png" alt="" />
                            <div className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-md">
                                {cartCount}
                            </div>
                        </div>

                        <button className="text-gray-700 font-semibold hover:text-violet-600 hidden sm:block text-sm">
                            Login
                        </button>

                        <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-violet-700 transition-all shadow-md">
                            Get Started
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NavBar;