"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function GirlsBackApproach() {
    const [sectionRef, sectionInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [contentRef, contentInView] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    // Animation variants
    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    };

    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    const approaches = [
        {
            title: "Education Scholarships",
            description: "We provide financial aid to cover tuition, books, uniforms, and other essential educational materials, ensuring that economic barriers don't prevent girls from attending school.",
            icon: "M12 6v12m-8-6h16"
        },
        {
            title: "Community Sensitization",
            description: "We work with community leaders, parents, and local influencers to address cultural and social barriers to girls' education through awareness campaigns and dialogue.",
            icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        },
        {
            title: "Teacher Training",
            description: "We enhance teachers' capacity to create girl-friendly learning environments and employ gender-responsive teaching methods that encourage girls' participation and achievement.",
            icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        },
        {
            title: "Mentorship Programs",
            description: "We connect girls with successful female role models who provide guidance, support, and inspiration, helping them navigate challenges and pursue their educational goals.",
            icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        },
        {
            title: "Advocacy for Policy Reform",
            description: "We advocate for policies that promote girls' education, working with government officials and stakeholders to create and enforce supportive legal frameworks.",
            icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
        },
        {
            title: "Safe School Initiative",
            description: "We implement measures to ensure schools are safe spaces for girls, addressing issues of harassment, violence, and inadequate facilities that can deter attendance.",
            icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        }
    ];

    return (
        <motion.section
            ref={sectionRef}
            className="py-20 bg-gray-50 relative overflow-hidden"
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={sectionVariants}
        >
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[var(--dean-red)]/5 blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[var(--dean-blue)]/5 blur-[100px]"></div>
            <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat opacity-5"></div>

            <div className="container mx-auto px-4 lg:px-8">
                <motion.div 
                    className="max-w-4xl mx-auto text-center mb-12"
                    variants={titleVariants}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Approach</h2>
                    <div className="h-1 w-24 bg-[var(--dean-red)] mx-auto mb-6"></div>
                    <p className="text-gray-700 text-lg">
                        We employ a multi-faceted approach to ensure every girl has access to quality education 
                        and the support needed to succeed.
                    </p>
                </motion.div>

                <motion.div 
                    ref={contentRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={sectionVariants}
                >
                    {approaches.map((approach, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow"
                            variants={itemVariants}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        >
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-[var(--dean-red)] text-white rounded-full flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={approach.icon}></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">{approach.title}</h3>
                            </div>
                            <p className="text-gray-600">{approach.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div 
                    className="mt-16 bg-[var(--dean-blue)]/10 p-6 rounded-lg border border-[var(--dean-blue)]/20 max-w-4xl mx-auto"
                    variants={itemVariants}
                >
                    <h3 className="text-xl font-semibold text-[var(--dean-blue)] mb-4">A Holistic Approach</h3>
                    <p className="text-gray-700">
                        Our program recognizes that girls' education challenges require interventions at multiple levels – 
                        from individual support to systemic change. By addressing financial, social, cultural, and structural 
                        barriers simultaneously, we create an ecosystem where girls can thrive educationally and reach their 
                        full potential.
                    </p>
                </motion.div>
            </div>
        </motion.section>
    );
} 