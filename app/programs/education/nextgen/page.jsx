import PageTransition from "@/app/components/PageTransition";
import ErrorBoundary from "@/app/components/ErrorBoundary";
import NextGenHero from "@/app/components/Programs/Education/NextGen/NextGenHero";
import NextGenMain from "@/app/components/Programs/Education/NextGen/NextGenMain";
import NextGenObjectives from "@/app/components/Programs/Education/NextGen/NextGenObjectives";
import NextGenImpact from "@/app/components/Programs/Education/NextGen/NextGenImpact";
import NextGenGallery from "@/app/components/Programs/Education/NextGen/NextGenGallery";
import JoinUs from "@/app/components/JoinUs";

export default function NextGenTeachers() {
    return (
        <ErrorBoundary>
            <PageTransition>
                <main className="min-h-screen">
                    <NextGenHero />
                    <NextGenMain />
                    <NextGenObjectives />
                    <NextGenImpact />
                    <NextGenGallery />
                    <JoinUs />
                </main>
            </PageTransition>
        </ErrorBoundary>
    )
}
