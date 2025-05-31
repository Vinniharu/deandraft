"use client";

import { useEffect, useState } from 'react';
import Head from 'next/head';
import PageTransition from '@/app/components/PageTransition';
import ErrorBoundary from '@/app/components/ErrorBoundary';
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