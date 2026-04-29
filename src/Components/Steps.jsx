import React from 'react';

const Steps = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                
                <div className="text-center mb-10">
                    <h2 className="text-4xl md:text-4xl font-black text-gray-900 mb-6">
                        Get Started In 3 Steps
                    </h2>
                    <p className="text-gray-500 text-base">
                        Start using premium digital tools in minutes, not hours.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    <div className="bg-white border border-gray-100 rounded-3xl p-10 relative shadow-sm hover:shadow-md transition-all">
                        <div className="absolute top-6 right-6 w-8 h-8 bg-[#7C3AED] text-white rounded-full flex items-center justify-center text-xs font-bold">
                            01
                        </div>
                        <div className="w-20 h-20 bg-[#F5F3FF] rounded-full flex items-center justify-center mx-auto mb-8">
                            <img src="/user.png" alt="" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 text-center mb-4">Create Account</h3>
                        <p className="text-sm text-gray-500 text-center leading-relaxed">
                            Sign up for free in seconds. No credit card required to get started.
                        </p>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-3xl p-10 relative shadow-sm hover:shadow-md transition-all">
                        <div className="absolute top-6 right-6 w-8 h-8 bg-[#7C3AED] text-white rounded-full flex items-center justify-center text-xs font-bold">
                            02
                        </div>
                        <div className="w-20 h-20 bg-[#F5F3FF] rounded-full flex items-center justify-center mx-auto mb-8">
                            <img src="/package.png" alt="" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 text-center mb-4">Choose Products</h3>
                        <p className="text-sm text-gray-500 text-center leading-relaxed">
                            Browse our catalog and select the tools that fit your needs.
                        </p>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-3xl p-10 relative shadow-sm hover:shadow-md transition-all">
                        <div className="absolute top-6 right-6 w-8 h-8 bg-[#7C3AED] text-white rounded-full flex items-center justify-center text-xs font-bold">
                            03
                        </div>
                        <div className="w-20 h-20 bg-[#F5F3FF] rounded-full flex items-center justify-center mx-auto mb-8">
                            <img src="/rocket.png" alt="" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 text-center mb-4">Start Creating</h3>
                        <p className="text-sm text-gray-500 text-center leading-relaxed">
                            Download and start using your premium tools immediately.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Steps;