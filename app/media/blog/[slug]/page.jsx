"use client";

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { use } from 'react';

const blogPosts = [
  {
    date: "March 26, 2025",
    title: "DEAN Initiative Selected as One of Four Global Recipients of the Climate Justice Resilience Fund (CJRF) 2024 Grant",
    author: "Doreen Mennom Oho",
    categories: ["Climate ACTION", "News", "Press Release"],
    postedBy: "Dorcas Mokikan",
    slug: "dean-initiative-cjrf-grant-2024",
    content: `Development of Educational Action Network (DEAN Initiative) is proud to announce its selection as one of the 4 recipients of the Climate Justice Resilience Fund (CJRF) 2024 Global Open Call grant. DEAN Initiative joins a group of 4 prestigious organisations worldwide as the only Nigerian organization and West African entity to be shortlisted as a winner. The three other organisations are from Bangladesh, Indonesia, and Kenya. The Climate Justice Resilience Fund (CJRF) received 513 expressions of interest, which led to 274 groups submitting applications. DEAN Initiative received the highest number of votes, emerging as one of the 4 winners.

The CJRF grant aligns with DEAN Initiative's mission to promote climate justice and resilience reforms through capacity building and youth leadership. The funded project, The Lake Chad Climate Justice Fellowship, will empower 20 young climate activists from the Lake Chad region with the knowledge, skills, and opportunities required to advocate for climate justice, address gender-based violence, and mitigate the insecurity caused by climate change in their communities. Participants will gain the skills and knowledge to advocate through advocacy, capacity building, and network development. DEAN Initiative will work closely with local, regional and global partners to implement the project.

"We are thrilled to be selected for this grant and excited about the possibilities it brings for young people in the Lake Chad region," said Doreen Oho, Technical Programs Lead. "This funding will allow us to provide marginalised youth in the Lake Chad Region with the knowledge and skills they need to become agents of change."

Ngozi Edum, DEAN's Partnership and Innovation Manager, stated that the fellowship will challenge colonial narratives and promote social justice by centring indigenous knowledge systems and prioritising locally led solutions. "True climate justice cannot be achieved without addressing the structural inequities that have historically excluded marginalised communities," she said.

DEAN Initiative remains committed to supporting youth empowerment and advancing the rights of marginalised communities through sustainable development and climate action.`
  },
  {
    date: "March 4, 2025",
    title: "DEAN INITIATIVE JOINS THE ELITE 2024-2025 CLIMATE DEMOCRACY ACCELERATOR PROGRAM",
    author: "Dorcas Mokikan",
    categories: ["News", "Press Release"],
    postedBy: "Dorcas Mokikan",
    slug: "dean-initiative-climate-democracy-accelerator-2024",
    content: "DEAN Initiative is excited to announce that our Technical Programs Lead Doreen Mennom Oho has been selected for the 2024/2025 Climate Democracy Accelerator Program. Following an extremely competitive application process with hundreds of applications from across the globe, only 15 participants were selected, representing 12 countries.\n\nThe Climate Democracy Accelerator program is a six-month practice-oriented training by People Powered, a global hub for participatory democracy. It equips young people to plan and execute inclusive and participatory processes that expand public participation and bring marginalized voices into decision-making, in order to create equitable and community-responsive climate policies.\n\nThe program also builds the capacity of organizations and leaders to shape climate policies through participatory budgeting, planning, and policymaking. Participants will develop an action plan, engage government stakeholders, and receive one-on-one mentorship and access to resources including the Participation Playbook and live training sessions.\n\nDoreen, through DEAN Initiative, will receive a $10,000 grant to implement a participatory program after the six-month training. This will enable DEAN Initiative to engage grassroots communities, advocating for a climate resilience economy and building on our ongoing work in inclusive governance."
  },
  {
    date: "January 24, 2025",
    title: "Reclaiming the Future: Education's Power in the Age of AI",
    author: "Dorcas Mokikan",
    categories: ["News"],
    postedBy: "Dorcas Mokikan",
    slug: "reclaiming-future-education-ai",
    content: "As we commemorate the International Day of Education 2025 under the theme 'AI and Education: Preserving Human Agency in a World of Automation,' we reflect on the transformative power of education in equipping individuals and communities to understand and influence the trajectory of technological advancement.\n\nEducation fosters innovation, reduces inequalities, and empowers individuals to contribute meaningfully. It provides the foundation for AI to thrive, cultivating a generation capable of ethically applying AI to address global challenges.\n\nWhile AI offers benefits such as personalized learning and administrative automation, it also raises ethical concerns, especially when data used lacks representation. In Africa, this often leads to underperformance of AI tools for underserved populations.\n\nEducation can solve this by promoting digital literacy and critical thinking, ensuring diverse representation in AI systems. It also plays a key role in:\n- Preparing students for the future of work\n- Fostering ethical AI development\n- Empowering marginalized communities\n\nWe call on stakeholders to invest in digital infrastructure, promote data sovereignty, and support lifelong learning. Let us commit to an inclusive, equitable, and human-centred approach to education in a technology-driven world."
  },
  {
    date: "December 30, 2024",
    title: "Official Report from the Open Government Partnership (OGP) Peer Learning Session",
    author: "Dorcas Mokikan",
    categories: ["Governance", "News", "OGP local"],
    postedBy: "Dorcas Mokikan",
    slug: "ogp-peer-learning-session-report-2024",
    content: "CenterLSD, in collaboration with DEAN Initiative, organized a Peer Learning Session to promote collaboration, knowledge exchange, and capacity-building among the six FCT Area Councils—Abaji, AMAC, Bwari, Gwagwalada, Kuje, and Kwali.\n\nHeld on December 20–21, 2024 in Keffi, Nasarawa, the session aimed to advance Open Government Partnership (OGP) principles by sharing best practices, enhancing transparency and public participation, and fostering reform-minded leadership.\n\nParticipants included council officials and civil society representatives. The session concluded with resolutions to institutionalize OGP locally, encourage unsigned councils to submit letters of intent by January 31, 2025, build reformer networks, and strengthen citizen-CSO engagement."
  },
  {
    date: "December 21, 2024",
    title: "Advancing Local Governance Reforms: OGP-Local's Impact in Abuja FCT",
    author: "Doreen Mennom Oho",
    categories: ["News", "OGP local", "Uncategorized"],
    postedBy: "Dorcas Mokikan",
    slug: "advancing-local-governance-reforms-ogp-local",
    content: "To deepen governance reforms at the grassroots, the Open Government Partnership-Local (OGP-Local) hosted a two-day Scorecard and Peer Learning Session in Keffi. Leaders from Abuja's six Area Councils and citizen representatives evaluated progress and exchanged ideas to strengthen transparency and accountability.\n\nAchievements include public participation in budgeting, improved access to budget documents, official online presence, and town hall meetings. Challenges persist, such as limited political will, low administrative capacity, and funding shortages.\n\nSupport from Centre LSD and the MacArthur Foundation was vital. Moving forward, the session encouraged bridging political and financial gaps to sustain reforms and strengthen inclusive governance."
  }
];

const pageVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3, ease: "easeInOut" }
  }
};

export default function BlogPost({ params }) {
  const pathname = usePathname();
  const resolvedParams = use(params);
  const post = blogPosts.find(post => post.slug === resolvedParams.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Post Not Found</h1>
          <Link
            href="/blog"
            className="text-[var(--dean-blue)] hover:underline"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.main
      key={pathname}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="min-h-screen bg-gray-50"
    >
      {/* Hero Section */}
      <section className="relative py-24 bg-white overflow-hidden bg-gradient-to-r from-blue-600 via-blue-800 to-red-600 text-white h-1/2">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/blog/hero.jpg')] bg-cover bg-center bg-no-repeat" />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Background Decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[var(--dean-blue)]/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[var(--dean-red)]/20 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat opacity-5" />
        </div>
        
        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/media/blog"
              className="inline-flex items-center text-sm text-white/80 hover:text-white mb-8 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>

            <div className="flex flex-wrap gap-2 justify-center mb-6">
              {post.categories.map(category => (
                <span
                  key={category}
                  className="px-3 py-1 text-xs font-medium bg-white/10 text-white rounded-full backdrop-blur-sm"
                >
                  {category}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <span>By {post.author}</span>
                <span>•</span>
                <span>Posted by {post.postedBy}</span>
              </div>
              <time>{post.date}</time>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto prose prose-lg">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </article>
        </div>
      </section>
    </motion.main>
  );
} 