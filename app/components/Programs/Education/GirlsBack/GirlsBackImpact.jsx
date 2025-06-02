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

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
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

    const feedbackData = [
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
            id="impact"
            ref={sectionRef}
            className="py-20 bg-white relative overflow-hidden"
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={sectionVariants}
        >
            {/* Background decorations */}
            <div className="absolute -right-32 top-20 w-64 h-64 rounded-full bg-[var(--dean-blue)]/5 blur-[100px]"></div>
            <div className="absolute -left-32 bottom-20 w-64 h-64 rounded-full bg-[var(--dean-red)]/5 blur-[100px]"></div>
            <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat opacity-5" />

            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        className="text-center mb-16"
                        variants={headerVariants}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent inline-block">
                            Impact & Achievements
                        </h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mt-4"></div>
                        <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
                            Our program has made significant strides in ensuring girls return to school and stay in school
                        </p>
                    </motion.div>

                    {/* Impact Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        {/* Left side - Key Achievements */}
                        <motion.div
                            className="space-y-6"
                            variants={cardVariants}
                        >
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 inline-flex items-center">
                                <span className="bg-[var(--dean-blue)]/10 w-10 h-10 flex items-center justify-center rounded-full mr-3">
                                    🏆
                                </span>
                                Key Achievements
                            </h3>
                            
                            <div className="space-y-4">
                                <motion.div 
                                    className="flex items-start" 
                                    variants={itemVariants}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--dean-blue)] mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p className="text-gray-700">
                                        Successfully reintegrated over 1,500 girls back into the education system across multiple communities.
                                    </p>
                                </motion.div>
                                
                                <motion.div 
                                    className="flex items-start" 
                                    variants={itemVariants}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--dean-blue)] mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p className="text-gray-700">
                                        Achieved an 85% retention rate through comprehensive support and community engagement.
                                    </p>
                                </motion.div>
                                
                                <motion.div 
                                    className="flex items-start" 
                                    variants={itemVariants}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--dean-blue)] mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p className="text-gray-700">
                                        Established partnerships with over 30 communities to create sustainable support systems.
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Right side - Impact Statistics */}
                        <motion.div 
                            className="grid grid-cols-1 gap-6"
                            variants={sectionVariants}
                        >
                            {feedbackData.map((stat, index) => (
                                <motion.div 
                                    key={index}
                                    className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-gray-200 shadow-md"
                                    variants={cardVariants}
                                >
                                    <h3 className="text-4xl font-bold text-[var(--dean-blue)] mb-2">{stat.value}</h3>
                                    <p className="text-gray-600">{stat.label}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Get Involved Section */}
                    <motion.div 
                        variants={cardVariants}
                        className="bg-gradient-to-r from-[#1a2747] to-[#2a3a5d] rounded-xl shadow-xl p-8 md:p-10 text-white mt-12"
                    >
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold mb-3">How to Get Involved</h3>
                            <p className="text-gray-300 max-w-2xl mx-auto">
                                Join our mission to ensure every girl has access to quality education
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {[
                                { title: "Volunteer", icon: "🙋‍♀️", description: "Share your expertise as a mentor or tutor" },
                                { title: "Donate", icon: "❤️", description: "Support a girl's education through financial contributions" },
                                { title: "Partner", icon: "🤝", description: "Collaborate with us as an organization or institution" },
                                { title: "Advocate", icon: "📢", description: "Spread awareness about girls' education in your community" }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="text-center p-4 rounded-lg bg-white/5"
                                    variants={cardVariants}
                                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                >
                                    <div className="text-3xl mb-3">{item.icon}</div>
                                    <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                                    <p className="text-sm text-gray-300">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
} 