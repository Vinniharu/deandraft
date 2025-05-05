"use client";

import { motion } from "framer-motion";
import ProgramCard from "./ProgramCard";

export default function ProgramsSection() {
    const programs = [
        {
            id: 1,
            title: "Hygiene Education Quest",
            description: "The Hygiene Quest Project engaged 200 trained volunteers to deliver a specialized hygiene education curriculum to 85,888 children across Lagos State. This two-week campaign reshaped hygiene practices, teaching methods, and community behaviors.",
            impacts: [
                "Implemented in 200 schools",
                "Sparked multi-stakeholder collaboration (parents, teachers, youth, government)",
                "Created long-term behavior change and teaching innovation"
            ],
            galleryLink: "#"
        },
        {
            id: 2,
            title: "Climate Education in Schools",
            description: "To close the climate literacy gap among young students, DEAN delivered a contextualized climate curriculum in primary and secondary schools. Students learned to turn waste into reusable tools and embraced eco-conscious behaviors.",
            impacts: [
                "12 interactive classes held in 2 schools",
                "Reached 200+ students",
                "Triggered a shift in sanitation practices and creative environmental thinking"
            ],
            galleryLink: "#"
        },
        {
            id: 3,
            title: "EP-Girls (Equal Potential – Girls)",
            description: "The EP-Girls initiative addresses life skill gaps and political education among girls in Nigerian schools. In collaboration with key partners, the project fosters leadership and confidence while promoting gender equity in education.",
            impacts: [
                "Over 200 girls reached through monthly mentoring",
                "Equal Potential learning packs developed",
                "Expanded into a national campaign aligned with SDG 5"
            ],
            galleryLink: "#"
        },
        {
            id: 4,
            title: "Global Children Designathon (GCD)",
            description: "In April 2023, 20 Nigerian children participated in the Global Children Designathon to tackle biodiversity loss. Through creativity, collaboration, and environmental advocacy, they designed innovative eco-solutions.",
            impacts: [
                "3 youth-led biodiversity projects showcased",
                "Collaborated with JengaHub for global exposure",
                "Sparked environmental consciousness at home and in schools"
            ],
            galleryLink: "#"
        }
    ];

    return (
        <motion.section
            className="py-20 md:py-28 bg-gray-50 relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            {/* Background decoration - updated to red and blue theme */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
                <div className="absolute -right-24 top-24 w-96 h-96 border-2 border-blue-500 rounded-full"></div>
                <div className="absolute left-1/4 top-1/3 w-64 h-64 border-2 border-red-500 rounded-full"></div>
                <div className="absolute right-1/3 bottom-1/4 w-80 h-80 border-2 border-blue-500 rounded-full"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Flagship Programs</h2>
                    {/* Alternate between red and blue accents */}
                    <div className="flex justify-center gap-1 items-center mb-6">
                        <div className="w-10 h-1 bg-blue-600"></div>
                        <div className="w-4 h-4 rounded-full bg-red-600"></div>
                        <div className="w-10 h-1 bg-blue-600"></div>
                    </div>
                    <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                        Our educational initiatives that have created meaningful impact across Nigerian communities
                    </p>
                </motion.div>

                <div className="max-w-6xl mx-auto space-y-16">
                    {programs.map((program, index) => (
                        <ProgramCard 
                            key={program.id} 
                            program={program} 
                            index={index} 
                        />
                    ))}
                </div>
            </div>
        </motion.section>
    );
} 