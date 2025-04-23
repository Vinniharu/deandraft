"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import RevealOnScroll from '../RevealOnScroll';

export default function TeamPartnersSection() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

    const teamMembers = [
        {
            name: "John Doe",
            role: "Executive Director",
            image: "/team/member1.jpg",
            bio: "John leads our strategic initiatives with over 15 years of experience in international development.",
            linkedin: "#"
        },
        {
            name: "Jane Smith",
            role: "Program Director",
            image: "/team/member2.jpg",
            bio: "Jane oversees our key programs and ensures they align with our mission and goals.",
            linkedin: "#"
        },
        {
            name: "Michael Johnson",
            role: "Partnerships Lead",
            image: "/team/member3.jpg",
            bio: "Michael builds and maintains relationships with our valued partners and stakeholders.",
            linkedin: "#"
        },
        {
            name: "Sarah Williams",
            role: "Community Engagement",
            image: "/team/member4.jpg",
            bio: "Sarah works directly with communities to ensure our programs meet real needs.",
            linkedin: "#"
        }
    ];

    const partners = [
        {
            name: "United Nations Development Programme",
            logo: "/deanlogo.png",
            type: "International Organization"
        },
        {
            name: "World Bank",
            logo: "/deanlogo.png",
            type: "International Organization"
        },
        {
            name: "GIZ",
            logo: "/deanlogo.png",
            type: "Development Agency"
        },
        {
            name: "Microsoft",
            logo: "/deanlogo.png",
            type: "Corporate Partner"
        },
        {
            name: "Ford Foundation",
            logo: "/deanlogo.png",
            type: "Foundation"
        },
        {
            name: "USAID",
            logo: "/deanlogo.png",
            type: "Government Agency"
        }
    ];

    return (
        <section 
            ref={sectionRef}
            id="team-partners" 
            className="relative py-20 overflow-hidden bg-gray-50"
        >
            {/* Subtle background pattern */}
            <motion.div 
                className="absolute inset-0 z-0 opacity-10"
                style={{ y: backgroundY }}
            >
                <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat" />
            </motion.div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                {/* Team Section */}
                <RevealOnScroll animation="fadeUp">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
                        <div className="h-1 w-24 bg-[var(--dean-blue)] mx-auto mb-6"></div>
                        <p className="max-w-2xl mx-auto text-lg text-gray-700">
                            Our dedicated team brings diverse expertise and passion to drive our mission forward.
                        </p>
                    </div>
                </RevealOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {teamMembers.map((member, index) => (
                        <RevealOnScroll key={index} animation="fadeUp" delay={0.1 * index}>
                            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all">
                                <div className="aspect-w-1 aspect-h-1 relative">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={300}
                                        height={300}
                                        className="object-cover w-full h-72"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                                        <div>
                                            <h3 className="text-xl font-bold text-white">{member.name}</h3>
                                            <p className="text-[var(--dean-blue)] font-medium">{member.role}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-600 mb-4">{member.bio}</p>
                                    <a 
                                        href={member.linkedin} 
                                        className="inline-flex items-center text-[var(--dean-blue)] font-medium"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                                        </svg>
                                        Connect on LinkedIn
                                    </a>
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>

                {/* Partners Section */}
                <RevealOnScroll animation="fadeUp">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
                        <div className="h-1 w-24 bg-[var(--dean-red)] mx-auto mb-6"></div>
                        <p className="max-w-2xl mx-auto text-lg text-gray-700">
                            We collaborate with organizations that share our vision for sustainable development and social impact.
                        </p>
                    </div>
                </RevealOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {partners.map((partner, index) => (
                        <RevealOnScroll key={index} animation="fadeUp" delay={0.1 * index}>
                            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                                <div className="h-20 flex items-center justify-center mb-4">
                                    <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        width={160}
                                        height={80}
                                        className="max-h-16 w-auto object-contain"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{partner.name}</h3>
                                <p className="text-[var(--dean-blue)] font-medium">{partner.type}</p>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>

                <RevealOnScroll animation="fadeUp">
                    <div className="mt-16 text-center">
                        <a 
                            href="/partners" 
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[var(--dean-blue)] hover:bg-[var(--dean-blue)]/90 transition-colors"
                        >
                            View All Partners
                        </a>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
} 