import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.div
      className="text-white"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage: "url('/transforming/mainbg.JPG')",
      }}
    >
      <div className="w-full mx-auto px-4 h-[50vh] flex items-center justify-center bg-gradient-to-r from-[var(--dean-blue)]/70 to-[var(--dean-red)]/70">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
          >
            Transforming Education Summit
          </motion.h1>

          <motion.p
            className="text-lg text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
          >
            Fostering dialogue among key stakeholders to reinforce commitment to
            delivering Core and Competent skills in classrooms through the SDGs
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
