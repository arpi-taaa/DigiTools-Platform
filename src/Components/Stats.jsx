import React from 'react';

const Stats = () => {
    return (
        <section className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            <div className="max-w-6xl mx-auto px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 items-center">
                    
                    <div className="flex items-center">
                        <div className="flex-1 text-center space-y-1">
                            <p className="text-4xl md:text-5xl font-black text-white leading-none">
                                50K+
                            </p>
                            <p className="text-sm text-white opacity-80 font-medium tracking-wide">
                                Active Users
                            </p>
                        </div>
                        <div className="hidden md:block h-12 w-px bg-white/20" />
                    </div>

                    <div className="flex items-center">
                        <div className="flex-1 text-center space-y-1">
                            <p className="text-4xl md:text-5xl font-black text-white leading-none">
                                200+
                            </p>
                            <p className="text-sm text-white opacity-80 font-medium tracking-wide">
                                Premium Tools
                            </p>
                        </div>
                        <div className="hidden md:block h-12 w-px bg-white/20" />
                    </div>

                    <div className="flex items-center">
                        <div className="flex-1 text-center space-y-1">
                            <p className="text-4xl md:text-5xl font-black text-white leading-none">
                                4.9
                            </p>
                            <p className="text-sm text-white opacity-80 font-medium tracking-wide">
                                Rating
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Stats;