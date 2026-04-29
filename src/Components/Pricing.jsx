import React from 'react';

const Pricing = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
                    <p className="text-gray-500 text-sm">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

                    <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm flex flex-col h-full">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Starter</h3>
                        <p className="text-gray-400 text-xs mb-8">Perfect for getting started</p>

                        <div className="mb-8">
                            <span className="text-4xl font-bold text-gray-900">$0</span>
                            <span className="text-gray-400 text-sm">/Month</span>
                        </div>

                        <ul className="space-y-4 mb-10 grow">
                            <li className="flex items-center gap-3 text-xs text-gray-600">
                                <img className='w-4 h-auto' src="/check-mark.png" alt="" />
                                Access to 10 free tools
                            </li>
                            <li className="flex items-center gap-3 text-xs text-gray-600">
                                <img className='w-4 h-auto' src="/check-mark.png" alt="" />
                                Basic templates
                            </li>
                            <li className="flex items-center gap-3 text-xs text-gray-600">
                                <img className='w-4 h-auto' src="/check-mark.png" alt="" />
                                Community support
                            </li>
                            <li className="flex items-center gap-3 text-xs text-gray-600">
                                <img className='w-4 h-auto' src="/check-mark.png" alt="" />
                                1 project per month
                            </li>
                        </ul>

                        <button className="w-full py-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-2xl font-bold text-xs hover:opacity-90 transition-all mt-auto">
                            Get Started Free
                        </button>
                    </div>

                    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-3xl p-8 shadow-xl relative md:scale-100 z-10 flex flex-col h-full text-left">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C7] text-[#92400E] px-4 py-1 rounded-full text-[10px] font-bold shadow-sm whitespace-nowrap">
                            Most Popular
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-white mb-2">Pro</h3>
                            <p className="text-white/70 text-xs">Best for professionals</p>
                        </div>

                        <div className="mb-8">
                            <span className="text-4xl font-bold text-white">$29</span>
                            <span className="text-white/70 text-sm">/Month</span>
                        </div>

                        <ul className="space-y-4 mb-10 grow">
                            <li className="flex items-center gap-3 text-xs text-white">
                                <img className='w-4 h-auto' src="/check-mark.png" alt="" />
                                Access to all premium tools
                            </li>
                            <li className="flex items-center gap-3 text-xs text-white">
                                <img className='w-4 h-auto' src="/check-mark.png" alt="" />
                                Unlimited templates
                            </li>
                            <li className="flex items-center gap-3 text-xs text-white">
                                <img className='w-4 h-auto' src="/check-mark.png" alt="" />
                                Priority support
                            </li>
                            <li className="flex items-center gap-3 text-xs text-white">
                                <img className='w-4 h-auto' src="/check-mark.png" alt="" />
                                Unlimited projects
                            </li>
                            <li className="flex items-center gap-3 text-xs text-white">
                                <img className='w-4 h-auto' src="/check-mark.png" alt="" />
                                Cloud sync
                            </li>
                            <li className="flex items-center gap-3 text-xs text-white">
                                <img className='w-4 h-auto' src="/check-mark.png" alt="" />
                                Advanced analytics
                            </li>
                        </ul>

                        <button className="w-full py-3 bg-white text-[#7C3AED] rounded-2xl font-bold text-xs hover:bg-gray-50 transition-all mt-auto shadow-md active:scale-95">
                            Start Pro Trial
                        </button>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm flex flex-col h-full text-left">
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
                            <p className="text-gray-400 text-xs">For teams and businesses</p>
                        </div>

                        <div className="mb-8">
                            <span className="text-4xl font-bold text-gray-900">$99</span>
                            <span className="text-gray-400 text-sm">/Month</span>
                        </div>

                        <ul className="space-y-4 mb-10 grow">
                            <li className="flex items-center gap-3 text-xs text-gray-600">
                                <img className='w-4 h-auto' src="/check-mark.png" alt="" />
                                Everything in Pro
                            </li>
                            <li className="flex items-center gap-3 text-xs text-gray-600">
                                <img className='w-4 h-auto' src="/check-mark.png" alt="" />
                                Team collaboration
                            </li>
                            <li className="flex items-center gap-3 text-xs text-gray-600">
                                <img className='w-4 h-auto' src="/check-mark.png" alt="" />
                                Custom integrations
                            </li>
                            <li className="flex items-center gap-3 text-xs text-gray-600">
                                <img className='w-4 h-auto' src="/check-mark.png" alt="" />
                                Dedicated support
                            </li>
                            <li className="flex items-center gap-3 text-xs text-gray-600">
                                <img className='w-4 h-auto' src="/check-mark.png" alt="" />
                                SLA guarantee
                            </li>
                            <li className="flex items-center gap-3 text-xs text-gray-600">
                                <img className='w-4 h-auto' src="/check-mark.png" alt="" />
                                Custom branding
                            </li>
                        </ul>

                        <button className="w-full py-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-2xl font-bold text-xs hover:opacity-90 transition-all mt-auto shadow-md active:scale-95">
                            Contact Sales
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Pricing;