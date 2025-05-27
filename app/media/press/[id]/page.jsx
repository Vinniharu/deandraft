import pressReleases from "@/pressReleases";
import Link from "next/link";

const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

export default function PressReleasePage({ params }) {
    const pressRelease = pressReleases.find(pr => pr.id.toString() === params.id);

    if (!pressRelease) {
        return (
            <div className="max-w-4xl mx-auto px-4 py-12">
                <h1 className="text-2xl font-bold text-red-600">Press Release not found</h1>
                <Link href="/media/press" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
                    ← Back to Press Releases
                </Link>
            </div>
        );
    }

    return (
        <>
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 via-blue-800 to-red-600 text-white">
                <div className="max-w-4xl mx-auto px-4 py-20">
                    <Link href="/media/press" className="text-blue-100 hover:text-white mb-8 inline-flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Press Releases
                    </Link>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {pressRelease.categories.map((category) => (
                            <span
                                key={category}
                                className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full"
                            >
                                {category}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-4xl font-bold mb-6">{pressRelease.title}</h1>
                    
                    <div className="text-blue-100">
                        <time>{formatDate(pressRelease.date)}</time>
                        {pressRelease.author && (
                            <span> • By {pressRelease.author}</span>
                        )}
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose lg:prose-xl max-w-none">
                    <div className="text-gray-600 text-xl mb-8 font-medium">
                        {pressRelease.summary}
                    </div>

                    <div className="text-gray-700">
                        {pressRelease.content}
                    </div>
                </article>
            </div>
        </>
    );
} 