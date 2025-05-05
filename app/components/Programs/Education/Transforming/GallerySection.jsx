import { motion } from "framer-motion";
import Image from "next/image";

export default function GallerySection() {
  const t = [
    "/transforming/t1.JPG",
    "/transforming/t2.JPG",
    "/transforming/t3.JPG",
    "/transforming/t4.JPG",
    "/transforming/t5.JPG",
    "/transforming/t6.JPG",
  ];

  const a = [
    "/transforming/a1.JPG",
    "/transforming/a2.JPG",
    "/transforming/a3.JPG",
    "/transforming/a4.JPG",
    "/transforming/a5.JPG",
    "/transforming/a6.JPG",
  ];

  return (
    <motion.section
      className="py-16 md:py-24 bg-gray-50 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Background decoration elements */}
      <div className="absolute left-0 top-1/4 w-1/3 h-1/3 bg-blue-500/3 blur-[150px] rounded-full" />
      <div className="absolute right-0 bottom-1/4 w-1/3 h-1/3 bg-purple-500/3 blur-[150px] rounded-full" />

      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Summit Gallery
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-blue-600 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          />

          {/* 2024 Summit Section */}
          <motion.h3
            className="text-2xl font-semibold text-center text-blue-700 mb-8 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Transforming Education Summit Abuja 2024
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {t.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border-b-4 border-blue-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              >
                <div className="h-64 relative bg-blue-100 flex items-center justify-center">
                  <Image 
                    src={item}
                    alt={`Transforming Education Summit 2024 image ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* 2023 Summit Section */}
          <motion.h3
            className="text-2xl font-semibold text-center text-purple-700 mb-8 mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Transforming Education Summit Abuja 2023
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {a.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border-b-4 border-purple-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              >
                <div className="h-64 relative bg-purple-100 flex items-center justify-center">
                  <Image 
                    src={item}
                    alt={`Transforming Education Summit 2023 image ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* <motion.div
                        className="text-center mt-16"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        <button className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-lg font-medium">
                            Register for the Next Summit
                        </button>
                    </motion.div> */}
        </motion.div>
      </div>
    </motion.section>
  );
}
