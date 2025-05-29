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