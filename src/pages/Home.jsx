import { motion, useScroll, useTransform } from "framer-motion";
import { isMobile } from "../utility/helper";
import {
  FileUser,
  Pill,
  Beaker,
  Users,
  MoreHorizontal,
  IndianRupee,
  Wallet,
} from "lucide-react";

const Home = () => {
  const { scrollYProgress } = useScroll();

  const width = useTransform(scrollYProgress, [0, 0.6], ["100%", "90%"]);
  const y = useTransform(scrollYProgress, [0, 0.6], [0, -80]);
  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.6],
    ["0rem", "2rem"]
  );

  return (
    <>
      <motion.section
        style={{ width, y, borderRadius }}
        className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-[120px] bg-gradient-to-br from-blue-50 to-cyan-100 overflow-hidden mx-auto shadow-2xl pb-12 sm:pb-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000"></div>
          <div className="absolute top-32 left-32 w-80 h-80 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, scale: 2.5, y: -120 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight"
          >
            Empowering Smarter Hospital Management
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: isMobile ? 0.2 : 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            A complete ERP platform for hospitals — streamline patient care,
            billing, and staff coordination with automation and real-time
            insights.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: isMobile ? 0.2 : 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="pt-6 flex flex-wrap gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#1677FF] text-white font-semibold text-lg rounded-xl shadow-lg hover:bg-[#1e7ed6] transition-all duration-300"
            >
              Request Demo
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-[#1677FF] text-[#1677FF] font-semibold text-lg rounded-xl hover:bg-[#1677FF]/10 transition-all duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      <FeaturesSection />
    </>
  );
};

export default Home;

// =================SCREEN ONE==============
const FeaturesSection = () => {
  return (
    <section className="py-20 px-6 overflow-hidden w-screen flex items-center flex-col justify-center">
      <div className="flex items-center justify-center flex-col">
        <motion.h1
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ amount: isMobile ? 0.2 : 0.4, once: false }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-6xl font-bold text-gray-900 leading- w-full text-center"
        >
          Velocare is the complete hospital ERP
        </motion.h1>
        <motion.p
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ amount: isMobile ? 0.2 : 0.4, once: false }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 text-xl md:text-2xl text-gray-700 text-center"
        >
          connecting Hospitals, Doctors, and Patients anywhere.
        </motion.p>
      </div>
      <div className="flex items-center justify-center my-8">
        <div className="container">
          <Hex className="pos0 before:bg-red-600" color="#e11d48">
            <Wallet className="w-5 h-5 sm:w-8 sm:h-8" />
            <h6 className="mt-1 text-[10px] sm:text-sm font-medium text-white">
              Billing
            </h6>
          </Hex>
          <Hex className="pos1 before:bg-blue-600" color="#7c3aed">
            <FileUser className="w-5 h-5 sm:w-8 sm:h-8" />
            <h6 className="mt-1 text-[10px] sm:text-sm font-medium text-white">
              Patient Records
            </h6>
          </Hex>
          <Hex className="pos2 before:bg-green-600" color="#7c3aed">
            <Pill className="w-5 h-5 sm:w-8 sm:h-8" />
            <h6 className="mt-1 text-[10px] sm:text-sm font-medium text-white">
              Medicines
            </h6>
          </Hex>
          <Hex className="pos3 before:bg-gray-200" color="#7c3aed">
            <img src="/icon.png" className="p-7" />
          </Hex>
          <Hex className="pos4 before:bg-pink-600" color="#7c3aed">
            <Beaker className="w-5 h-5 sm:w-8 sm:h-8" />
            <h6 className="mt-1 text-[10px] sm:text-sm font-medium text-white">
              Lab Test
            </h6>
          </Hex>
          <Hex className="pos5 before:bg-yellow-600" color="#7c3aed">
            <Users className="w-5 h-5 sm:w-8 sm:h-8" />
            <h6 className="mt-1 text-[10px] sm:text-sm font-medium text-white">
              Staff Records
            </h6>
          </Hex>
          <Hex className="pos6 before:bg-orange-600" color="#7c3aed">
            <IndianRupee className="w-5 h-5 sm:w-8 sm:h-8" />
            <h6 className="mt-1 text-[10px] sm:text-sm font-medium text-white">
              Salary
            </h6>
          </Hex>
        </div>
      </div>
    </section>
  );
};

function Hex({ className = "", children }) {
  return (
    <motion.div
      {...(isMobile
        ? { whileTap: { scale: 1.1 } }
        : { whileHover: { scale: 1.1 } })}
      transition={{ type: "spring", stiffness: 300 }}
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, amount: isMobile ? 0.2 : 0.4 }}
      className={`hex ${className}`}
    >
      <div className="hex-inner">{children}</div>
    </motion.div>
  );
}
