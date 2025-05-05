import { motion } from "framer-motion";
import Image from "next/image";

export default function MainContent() {
  return (
    <motion.section
      className="py-16 md:py-24 bg-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Background decoration elements */}
      <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-500/10 to-transparent blur-[120px] rounded-full" />
      <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-tr from-purple-500/10 to-transparent blur-[120px] rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section heading */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Transforming Education</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side: Description */}
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border-l-4 border-blue-600 relative backdrop-blur-sm bg-white/90">
                <div className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full border-2 border-blue-500 opacity-20" />
                <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full border-2 border-purple-500 opacity-20" />
                
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Driving Sustainable Change</h3>
                
                <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6">
                  The Transforming Education Summit showcases the power of
                  education to drive sustainable change and to foster dialogue
                  among key stakeholders to reinforce commitment to delivering
                  Core and Competent skills in classrooms through the SDGs.
                </p>
                
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Fostering dialogue among educational stakeholders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Reinforcing commitment to SDG implementation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Developing core and competent classroom skills</span>
                  </li>
                </ul>
                
                <motion.button 
                  className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 flex items-center"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>

            {/* Right side: Images */}
            <motion.div
              className="order-1 lg:order-2 relative h-[350px] sm:h-[400px] md:h-[450px]"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {/* First image (behind) */}
              <motion.div 
                className="absolute top-0 right-0 w-4/5 h-4/5 rounded-xl shadow-lg overflow-hidden border-4 border-white"
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                <div className="relative w-full h-full">
                  <Image 
                    src="/transforming/img1.JPG" 
                    alt="Transforming Education Summit" 
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </motion.div>

              {/* Second image (front, overlapping) */}
              <motion.div 
                className="absolute bottom-0 left-0 w-4/5 h-4/5 rounded-xl shadow-lg overflow-hidden border-4 border-white z-10"
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                <div className="relative w-full h-full">
                  <Image 
                    src="/transforming/img2.JPG" 
                    alt="Education Summit Participants" 
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats section */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">2+</div>
              <div className="text-gray-600">Annual Summits</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-500">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600">Participants</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-600">Speakers</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-500">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-gray-600">Partners</div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
