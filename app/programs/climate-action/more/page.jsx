"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import PageTransition from '@/app/components/PageTransition';
import ErrorBoundary from '@/app/components/ErrorBoundary';
import ExternalLink from '@/app/components/ExternalLink';

export default function ClimateEducationPage() {
    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Track image errors by initiative ID
    const [imageErrors, setImageErrors] = useState({});

    // Handle image error for a specific initiative
    const handleImageError = (initiativeId) => {
        setImageErrors(prev => ({
            ...prev,
            [initiativeId]: true
        }));
    };

    const initiatives = [
        {
            id: "climate-education-drive",
            title: "Climate Education Drive",
            description: `In its relentless pursuit of cultivating a climate-conscious society, DEAN Initiative executed a
            comprehensive strategy, encompassing diverse activities. This included hosting a pivotal Climate
            Conversation Workshop, where key stakeholders engaged in meaningful dialogue, contributing
            essential insights towards the integration of climate education into the school curriculum.
            Complementing this, the initiative conducted strategic courtesy visits, strategically reaching out to
            relevant entities. These deliberate efforts underscore DEAN Initiative's commitment to fostering
            inclusivity and actively driving the incorporation of climate education at the core of educational
            frameworks.`,
            imageSrc: "/images/programs/climate-education-drive.jpg",
            imageAlt: "Climate Education Drive Workshop",
            fallbackText: "Climate Education Drive"
        },
        {
            id: "climate-education-workshop",
            title: "Climate Education Workshop in Schools",
            description: `Recognizing the vital role of education in shaping environmentally conscious individuals, the Climate
            Education in Schools project sought to address the gap in climate education for young students. The
            project operated under the theory that delivering a contextualized climate curriculum could empower
            students with knowledge and skills, fostering creative thinking, and ultimately leading to positive
            behavioral changes in environmental practices.
            
            Over a duration of three months, the project engaged with two schools (primary and secondary),
            reaching over 200 students through 12 classes. The project team, comprising five members,
            implemented a curriculum that included interactive classes and hands-on activities, aiming to instill
            climate knowledge and promote environmental stewardship. Training sessions were organized for
            both the project team and 10 volunteers, emphasizing the importance of effective climate education.
            
            The impact of the Climate Education in Schools project was evident in the acquisition of waste
            recycling and design skills by students, enabling them to transform waste into decorations and
            improvised equipment. Positive behavioral changes were observed in students' environmental
            sanitation practices, marking a significant shift in their approach to sustainability.`,
            imageSrc: "/images/programs/climate-education-workshop.jpg",
            imageAlt: "Students participating in climate education workshop",
            galleryLink: "https://drive.google.com/drive/folders/1tM_f356kz4zqmyJymKzwOxdLarAUFmmC?usp=sharing",
            fallbackText: "School Workshop"
        },
        {
            id: "climate-education-conversation",
            title: "Climate Education Conversation",
            description: `Catalyzing Change in Climate Education
            
            In response to the challenges in climate education, an initiative was launched to foster a collaborative
            approach. Recognizing the pivotal role of teachers, the theory of change emphasized engaging key
            stakeholders to strengthen climate education. The initiative conducted inclusive dialogues in Abuja
            and Lagos, bringing together over 100 participants, including representatives from government
            organizations, private sectors, and citizen advocacy groups. This collaborative effort aimed to
            comprehensively understand the current landscape and pave the way for effective solutions.
            
            The action taken involved conducting a two-state conversation that engaged participants in providing
            feedback on challenges in climate education. Essential insights were gathered from key contributors in
            the climate education arena, fostering collaboration among diverse stakeholders to address identified
            challenges. The outcomes were impactful, establishing connections with key government institutions
            in Abuja and Lagos, including NCCC, Ministry of Environment, and Ministry of Education.`,
            imageSrc: "/images/programs/climate-education-conversation.jpg",
            imageAlt: "Stakeholders at Climate Education Conversation",
            galleryLink: "https://drive.google.com/drive/folders/12Y5hdwoP2BH5dd2lNSQy7CgiFnIlcza0?usp=sharing",
            fallbackText: "Education Conversation"
        },
        {
            id: "young-climate-activist",
            title: "Young Climate Activist Summer Camp",
            description: `Empowering the Future through the Young Climate Activist Summer Camp
            
            Amidst the pressing concern of inadequate climate awareness and skills among the youth, the DEAN
            Initiative took proactive steps to bridge this gap. The organization orchestrated the Young Climate
            Activist Summer Camp, a transformative initiative designed to empower 20 participants with essential
            climate education and skill-based training. The camp strategically addressed the deficit in climate
            knowledge and prepared the participants to actively contribute to climate action. By organizing
            diverse activities such as Climate Reality classes, debates, and hands-on projects like crafting hanging
            gardens, the camp provided a comprehensive learning experience.
            
            The camp's success is underscored by the remarkable outcomes achieved during and after the
            initiative. The participants, comprising an inclusive group with a 50% male and 50% female
            representation, fell within the age range of 10 and above. The engaging and hands-on approach
            facilitated by five young climate champions ensured a practical understanding of climate issues. The
            participants, transformed into climate activists, showcased newfound skills in problem-solving,
            critical thinking, communication, and collaboration.`,
            imageSrc: "/images/programs/young-climate-activist.jpg",
            imageAlt: "Young participants at the Climate Activist Summer Camp",
            galleryLink: "https://drive.google.com/drive/folders/2023-summer-camp",
            fallbackText: "Youth Climate Camp"
        }
    ];

    const stats = [
        { number: "300+", label: "Students Reached" },
        { number: "100+", label: "Stakeholders Engaged" },
        { number: "20", label: "Young Climate Activists Trained" },
        { number: "5", label: "Climate Champions" }
    ];

    return (
        <ErrorBoundary>
            <Head>
                <title>Climate Education Initiatives | DEAN Initiative</title>
                <meta 
                    name="description" 
                    content="Explore DEAN Initiative's comprehensive climate education programs including workshops, conversations, and youth activism camps." 
                />
                <meta 
                    name="keywords" 
                    content="climate education, workshop, youth activism, environmental education, climate change, DEAN Initiative" 
                />
            </Head>
            <PageTransition>
                <main className="overflow-hidden">
                    {/* Hero Section */}
                    <section className="relative py-20 md:py-28 bg-gradient-to-r from-blue-900 to-red-800 text-white overflow-hidden">
                        <div className="absolute inset-0 z-0 opacity-20">
                            <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
                            <div className="absolute top-[20%] right-[10%] w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
                            <div className="absolute bottom-[10%] left-[20%] w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
                        </div>
                        
                        <div className="container mx-auto px-4 relative z-10">
                            <div className="max-w-5xl mx-auto text-center">
                                <motion.h1 
                                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    Climate Education Initiatives
                                </motion.h1>
                                <motion.div 
                                    className="w-24 h-1 bg-red-400 mx-auto mb-8"
                                    initial={{ width: 0 }}
                                    animate={{ width: 96 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                />
                                <motion.p 
                                    className="text-xl text-white/90 max-w-3xl mx-auto"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                >
                                    Empowering communities through climate education, awareness, and action
                                </motion.p>
                            </div>
                        </div>
                    </section>

                    {/* Stats Section */}
                    <section className="py-16 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                {stats.map((stat, index) => (
                                    <motion.div 
                                        key={index}
                                        className="text-center"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                                    >
                                        <div className="text-4xl md:text-5xl font-bold text-red-700 mb-2">{stat.number}</div>
                                        <div className="text-gray-600 font-medium">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Add this section after the Stats Section */}
                    <section className="py-10 bg-gray-50">
                        <div className="container mx-auto px-4">
                            <div className="max-w-5xl mx-auto">
                                <motion.div
                                    className="text-center mb-8"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h2 className="text-2xl font-bold text-gray-800">Quick Navigation</h2>
                                    <p className="text-gray-600 mt-2">Jump to an initiative</p>
                                </motion.div>
                                
                                <div className="flex flex-wrap justify-center gap-4">
                                    {initiatives.map((initiative, index) => (
                                        <motion.a
                                            key={initiative.id}
                                            href={`#${initiative.id}`}
                                            className={`px-4 py-2 bg-white shadow-md rounded-full hover:shadow-lg transition-shadow duration-300 ${index % 2 === 0 ? 'text-blue-700 hover:text-blue-900' : 'text-red-700 hover:text-red-900'} font-medium`}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                                        >
                                            {initiative.title}
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Initiatives Sections */}
                    {initiatives.map((initiative, index) => (
                        <section 
                            key={initiative.id} 
                            id={initiative.id}
                            className={`py-20 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                        >
                            <div className="container mx-auto px-4">
                                <div className="max-w-6xl mx-auto">
                                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                        <motion.div
                                            className="relative"
                                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <div className="relative rounded-xl overflow-hidden shadow-xl">
                                                <div style={{ height: '350px' }} className="relative">
                                                    <Image
                                                        src={initiative.imageSrc}
                                                        alt={initiative.imageAlt}
                                                        fill
                                                        style={{ objectFit: 'cover' }}
                                                        className="transition-transform duration-500 hover:scale-105"
                                                        onError={() => handleImageError(initiative.id)}
                                                        onLoad={() => {
                                                            // Clear error state if image loads successfully
                                                            if (imageErrors[initiative.id]) {
                                                                setImageErrors(prev => ({
                                                                    ...prev,
                                                                    [initiative.id]: false
                                                                }));
                                                            }
                                                        }}
                                                    />
                                                    
                                                    {/* Show fallback content if there's an error */}
                                                    {imageErrors[initiative.id] && (
                                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-red-700 flex items-center justify-center">
                                                            <p className="text-white text-xl font-bold px-4 text-center">
                                                                {initiative.fallbackText || initiative.title}
                                                            </p>
                                                        </div>
                                                    )}
                                                </div>
                                                {initiative.galleryLink && (
                                                    <div className="absolute bottom-0 right-0 left-0 bg-black/50 p-3 text-center">
                                                        <ExternalLink
                                                            href={initiative.galleryLink}
                                                            className="text-white hover:text-red-300 transition-colors text-sm flex items-center justify-center"
                                                            ariaLabel={`View ${initiative.title} gallery`}
                                                        >
                                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                                            View Gallery
                                                        </ExternalLink>
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                        
                                        <motion.div
                                            initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: 0.2 }}
                                        >
                                            <h2 className="text-3xl font-bold text-gray-800 mb-4">{initiative.title}</h2>
                                            <div className={`w-20 h-1 ${index % 2 === 0 ? 'bg-blue-600' : 'bg-red-600'} mb-6`}></div>
                                            <div className="text-gray-600 space-y-4 whitespace-pre-line">
                                                {initiative.description.split('\n\n').map((paragraph, idx) => (
                                                    <p key={idx}>{paragraph}</p>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    ))}

                    {/* Call to Action Section */}
                    <section className="py-16 bg-gradient-to-r from-blue-900 to-red-800 text-white">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto text-center">
                                <motion.h2
                                    className="text-3xl md:text-4xl font-bold mb-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                >
                                    Join the Climate Education Movement
                                </motion.h2>
                                <motion.p
                                    className="text-xl mb-8"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    Help us empower more communities with climate knowledge and action
                                </motion.p>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                >
                                    <ExternalLink
                                        href="mailto:info@dean.com.ng"
                                        className="inline-block px-8 py-4 bg-white text-blue-900 font-semibold rounded-full hover:bg-gray-100 transition-colors"
                                        ariaLabel="Contact us to get involved"
                                    >
                                        Get Involved
                                    </ExternalLink>
                                </motion.div>
                            </div>
                        </div>
                    </section>
                </main>
            </PageTransition>
        </ErrorBoundary>
    );
} 