"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function GirlsBackImpact() {
    const [sectionRef, sectionInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // Animation variants
    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.2,
            },
        },
    };

    const headerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    const statsData = [
        { value: "1,500+", label: "Girls returned to school through our direct intervention" },
        { value: "85%", label: "Retention rate for girls supported by our program" },
        { value: "30+", label: "Communities engaged in supporting girls' education" }
    ];

    const testimonialData = [
        {
            quote: "The Girls Back to School Program changed my life. I had given up on education after the pandemic, but now I'm back in school and dreaming of becoming a doctor.",
            name: "Amina, 14",
            role: "Program Beneficiary"
        },
        {
            quote: "Seeing the transformation in these girls is incredible. Their confidence grows, their academic performance improves, and they become ambassadors for education in their communities.",
            name: "Sarah Johnson",
            role: "Project Coordinator"
        },
        {
            quote: "The program has helped our community recognize the value of girls' education. We're now actively working to ensure every girl has the opportunity to learn.",
            name: "Chief Ibrahim",
            role: "Community Leader"
        }
    ];

    const impactAreas = [
        {
            icon: "🎓",
            title: "Academic Achievement",
            description: "Girls in our program have shown marked improvement in academic performance, with 72% showing significant gains in core subjects."
        },
        {
            icon: "👩‍👧",
            title: "Family Support",
            description: "We've seen a 65% increase in family support for girls' education across communities where we work."
        },
        {
            icon: "🚸",
            title: "Child Marriage Reduction",
            description: "Communities participating in our program have reported a 40% decrease in early marriages among school-aged girls."
        },
        {
            icon: "🌍",
            title: "Community Change",
            description: "30+ communities have adopted policies and practices that actively support girls' education and well-being."
        }
    ];

    return (
        <motion.section
            ref={sectionRef}
            className="py-20 relative overflow-hidden bg-gradient-to-b from-[var(--dean-blue)] to-[#003366]"
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={sectionVariants}
        >
            {/* Background decorations */}
            <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat opacity-5"></div>
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div 
                    className="text-center mb-16 text-white"
                    variants={headerVariants}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Impact</h2>
                    <div className="h-1 w-24 bg-[var(--dean-red)] mx-auto mb-6"></div>
                    <p className="text-lg text-gray-200 max-w-3xl mx-auto">
                        Through dedicated efforts and collaborative partnerships, we've made significant strides 
                        in ensuring girls return to school and stay in school.
                    </p>
                </motion.div>

                {/* Impact Statistics */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
                    variants={sectionVariants}
                >
                    {statsData.map((stat, index) => (
                        <motion.div 
                            key={index}
                            className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center"
                            variants={cardVariants}
                        >
                            <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                            <p className="text-gray-200">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Impact Areas */}
                <motion.div
                    className="mb-16"
                    variants={sectionVariants}
                >
                    <motion.h3 
                        className="text-2xl font-semibold text-white mb-8 text-center"
                        variants={headerVariants}
                    >
                        Key Areas of Impact
                    </motion.h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {impactAreas.map((area, index) => (
                            <motion.div 
                                key={index}
                                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
                                variants={cardVariants}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            >
                                <div className="text-4xl mb-4">{area.icon}</div>
                                <h4 className="text-xl font-semibold text-white mb-2">{area.title}</h4>
                                <p className="text-gray-200 text-sm">{area.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Testimonials */}
                <motion.div variants={sectionVariants}>
                    <motion.h3 
                        className="text-2xl font-semibold text-white mb-8 text-center"
                        variants={headerVariants}
                    >
                        Voices from the Program
                    </motion.h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonialData.map((testimonial, index) => (
                            <motion.div 
                                key={index}
                                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
                                variants={cardVariants}
                            >
                                <svg className="w-10 h-10 text-[var(--dean-red)]/80 mb-4" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z"></path>
                                </svg>
                                <p className="text-gray-200 italic mb-4">{testimonial.quote}</p>
                                <div className="mt-auto">
                                    <p className="text-white font-semibold">{testimonial.name}</p>
                                    <p className="text-gray-300 text-sm">{testimonial.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
                
                {/* Call to Action */}
                <motion.div 
                    className="mt-16 text-center"
                    variants={headerVariants}
                >
                    <h3 className="text-2xl font-semibold text-white mb-4">Join Us in Making a Difference</h3>
                    <p className="text-gray-200 mb-6 max-w-3xl mx-auto">
                        Together, we can ensure that every girl has the opportunity to receive an education, 
                        fulfilling their potential and contributing to the development of their communities and country.
                    </p>
                    <a href="/donate" className="inline-block bg-[var(--dean-red)] hover:bg-[var(--dean-red)]/90 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300">
                        Support Our Work
                    </a>
                </motion.div>
            </div>
        </motion.section>
    );
} 