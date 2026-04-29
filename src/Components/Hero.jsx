import React from 'react';

const Hero = () => {
    return (
        <div className="bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 py-12 md:py-10 relative flex flex-col md:flex-row items-center justify-between gap-8 min-h-125 md:min-h-0">
                
                <div className="md:hidden absolute inset-0 z-0 flex justify-center items-center opacity-20">
                    <img 
                        src="/banner.png" 
                        alt="" 
                        className="w-full h-auto max-w-87.5 object-contain"
                    />
                </div>

                <div className="relative z-10 flex-1 space-y-6 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 px-3 py-1.5 rounded-full font-medium text-xs">
                        <span className="w-2 h-2 bg-violet-500 rounded-full animate-pulse"></span>
                        New: AI-Powered Tools Available
                    </div>
                    
                    <h1 className="text-3xl md:text-5xl font-extrabold text-gray-950 leading-tight">
                        Supercharge Your<br /> Digital Workflow
                    </h1>
                    
                    <p className="text-sm text-gray-500 max-w-md mx-auto md:mx-0 leading-relaxed font-medium">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
                        <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-7 py-3 rounded-full font-bold hover:opacity-90 transition-all shadow-md text-sm">
                            Explore Products
                        </button>
                        <button className="flex items-center gap-2 bg-white border border-violet-200 text-violet-600 px-7 py-3 rounded-full font-bold hover:bg-violet-50 transition-all text-sm">
                            <img className='w-4' src="/play-button.png" alt="" />
                            Watch Demo
                        </button>
                    </div>
                </div>

                <div className="hidden md:flex flex-1 w-full justify-end z-10">
                    <img 
                        src="/banner.png" 
                        alt="Digital Tools Banner" 
                        className="w-90 h-auto max-w-105 rounded-2xl shadow-xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;