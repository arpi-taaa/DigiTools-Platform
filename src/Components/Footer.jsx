import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#101727] text-white pt-16 pb-8">
            <div className="max-w-6xl mx-auto px-6">
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                    
                    <div className="md:col-span-4 space-y-6">
                        <h2 className="text-3xl font-black tracking-tight">DigiTools</h2>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Premium digital tools for creators, professionals, and businesses. 
                            Work smarter with our suite of powerful tools.
                        </p>
                    </div>

                    <div className="md:col-span-2 space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider">Product</h4>
                        <ul className="space-y-3 text-xs text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2 space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider">Company</h4>
                        <ul className="space-y-3 text-xs text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2 space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider">Resources</h4>
                        <ul className="space-y-3 text-xs text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2 space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider">Social Links</h4>
                        <div className="flex gap-4">
                            <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#0A0F1C] hover:bg-gray-200 transition-all">
                                <img src="/facebook.png" className='w-5' alt="" />
                            </a>
                            <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#0A0F1C] hover:bg-gray-200 transition-all">
                                <img src="/instagram.png" className='w-5' alt="" />
                            </a>
                            <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#0A0F1C] hover:bg-gray-200 transition-all">
                                <img src="/twitter.png" className='w-5' alt="" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 flex row items-center justify-between gap-4 text-[11px] text-gray-500">
                    <p>© 2026 Digitools. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;