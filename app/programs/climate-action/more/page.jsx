"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import PageTransition from '@/app/components/PageTransition';
import ErrorBoundary from '@/app/components/ErrorBoundary';
import ExternalLink from '@/app/components/ExternalLink';
import JoinUs from "@/app/components/JoinUs";
import { 
  MoreHero, 
  CAAVS, 
  PBP, 
  CallToAction 
} from "@/app/components/Programs/Democracy/More";

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

    
    const stats = [
        { number: "300+", label: "Students Reached" },
        { number: "100+", label: "Stakeholders Engaged" },
        { number: "20", label: "Young Climate Activists Trained" },
        { number: "5", label: "Climate Champions" }
    ];

    // Preload images
    useEffect(() => {
        const imageList = [
            "/more/hero.jpg",
            "/more/abaji.jpg",
            "/more/kwali.jpg",
            "/more/dobi.jpg",
            "/more/pbp.jpg"
        ];
        
        imageList.forEach((src) => {
            const img = document.createElement('img');
            img.src = src;
        });
    }, []);

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
                <main className="min-h-screen">
                    <MoreHero />
                    <CAAVS />
                    <PBP />
                    <CallToAction />
                    <JoinUs />
                </main>
            </PageTransition>
        </ErrorBoundary>
    );
} 