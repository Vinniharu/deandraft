"use client";

import { motion } from 'framer-motion';

export default function WorkshopDetailsSection() {
    return (
        <motion.section
            id="workshop-details"
            className="py-20 bg-gray-50 relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            {/* Background decorations */}
            <div className="absolute right-0 bottom-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
                <div className="absolute -right-24 top-24 w-96 h-96 border-2 border-blue-500 rounded-full"></div>
                <div className="absolute left-1/4 top-1/3 w-64 h-64 border-2 border-red-500 rounded-full"></div>
                <div className="absolute right-1/3 bottom-1/4 w-80 h-80 border-2 border-blue-500 rounded-full"></div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">What We Did</h2>
                        <div className="flex justify-center gap-2 items-center mb-6">
                            <div className="w-12 h-1 bg-red-600"></div>
                            <div className="w-4 h-4 rounded-full bg-blue-600"></div>
                            <div className="w-12 h-1 bg-red-600"></div>
                        </div>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <motion.div
                            className="rounded-xl overflow-hidden shadow-lg"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <img 
                                src="https://placehold.co/600x400/blue/white?text=Climate+Finance+Conversation" 
                                alt="Climate Finance Workshop" 
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6 bg-white">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Climate Finance Conversation</h3>
                                <p className="text-gray-700">
                                    On August 20, 2024, DEAN Initiative hosted two climate finance experts from MicroSave
                                    Consulting, Kenya. The event centered around a climate finance conversation to educate young
                                    people, climate activists, local government stakeholders, and students on accessing climate finance.
                                </p>
                                <div className="mt-4 flex items-center text-sm text-gray-500">
                                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full mr-2">100+ Participants</span>
                                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full">August 2024</span>
                                </div>
                            </div>
                        </motion.div>
                        
                        <motion.div
                            className="rounded-xl overflow-hidden shadow-lg"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            <img 
                                src="https://placehold.co/600x400/red/white?text=Focus+Group+Discussions" 
                                alt="Focus Group Discussions with Farmers" 
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6 bg-white">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Farmer Focus Groups</h3>
                                <p className="text-gray-700">
                                    The experts conducted focus group discussions coordinated by our state
                                    coordinators with farmers in Abuja, Nasarawa, and Kaduna States to understand post-harvest loss
                                    challenges across different crops and regions.
                                </p>
                                <div className="mt-4 flex flex-wrap gap-2 items-center text-sm">
                                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">Abuja</span>
                                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">Nasarawa</span>
                                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">Kaduna</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    
                    <motion.div
                        className="bg-white p-8 rounded-xl shadow-md"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Key Workshop Components</h3>
                        <ul className="space-y-4">
                            <motion.li 
                                className="flex items-start"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            >
                                <div className="mr-3 mt-1 text-blue-600">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <strong className="text-gray-800">Expert Knowledge Sharing</strong>
                                    <p className="text-gray-600 mt-1">
                                        Insights on global climate risks and grassroots-led adaptation strategies
                                    </p>
                                </div>
                            </motion.li>
                            
                            <motion.li 
                                className="flex items-start"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                            >
                                <div className="mr-3 mt-1 text-red-600">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <strong className="text-gray-800">Targeted Focus Groups</strong>
                                    <p className="text-gray-600 mt-1">
                                        In-depth discussions with farmers to identify specific challenges and potential solutions
                                    </p>
                                </div>
                            </motion.li>
                            
                            <motion.li 
                                className="flex items-start"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7, duration: 0.5 }}
                            >
                                <div className="mr-3 mt-1 text-blue-600">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <strong className="text-gray-800">Educational Sessions</strong>
                                    <p className="text-gray-600 mt-1">
                                        Training on accessing climate finance, proposal writing, and resource mobilization
                                    </p>
                                </div>
                            </motion.li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
} 