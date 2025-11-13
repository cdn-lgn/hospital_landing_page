import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { isMobile } from "../utility/helper";
import {
  FileUser,
  Pill,
  Beaker,
  Users,
  MoreHorizontal,
  IndianRupee,
  Wallet,
  BarChart3,
  Wrench,
  Globe,
  Bed,
  FlaskConical,
  FileText,
  Boxes,
  Stethoscope,
} from "lucide-react";
import { useRef, useState } from "react";

const Home = () => {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const width = useTransform(scrollYProgress, [0, 0.6], ["100%", "90%"]);
  const y = useTransform(scrollYProgress, [0, 0.6], [0, -80]);
  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.6],
    ["0rem", "2rem"]
  );

  return (
    <div id="home" className="flex flex-col items-center justify-center">
      <motion.section
        ref={heroRef}
        style={{ width, y, borderRadius }}
        className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-[120px]
               bg-linear-to-br from-blue-50 to-cyan-100
               dark:bg-linear-to-br dark:from-gray-900 dark:to-gray-950
               overflow-hidden mx-auto shadow-2xl pb-12 sm:pb-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-300 dark:bg-cyan-800 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000"></div>
          <div className="absolute top-32 left-32 w-80 h-80 bg-teal-300 dark:bg-teal-800 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, scale: 2.5, y: -120 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-3xl sm:text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight"
          >
            Empowering Smarter Hospital Management
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: isMobile ? 0.2 : 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
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
              className="px-8 py-4 bg-[#1677FF] dark:bg-blue-600
                     text-white font-semibold text-lg rounded-xl shadow-lg
                     hover:bg-[#1e7ed6] dark:hover:bg-blue-500
                     transition-all duration-300"
            >
              Request Demo
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-[#1677FF] dark:border-blue-400
                     text-[#1677FF] dark:text-blue-300 font-semibold text-lg rounded-xl
                     hover:bg-[#1677FF]/10 dark:hover:bg-blue-500/10
                     transition-all duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      <FeaturesSection />
      <Improve />
      <ChooseWhichYouWant />
    </div>
  );
};

export default Home;

// =================SCREEN ONE==============
const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    amount: isMobile ? 0.2 : 0.4,
    once: false,
  });
  return (
    <section
      id="about"
      ref={sectionRef}
      className="my-20 px-6 overflow-hidden w-screen flex items-center flex-col justify-center transition-colors duration-300"
    >
      <motion.div
        className="flex items-center justify-center flex-col"
        initial={{ y: 60, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.h1
          // initial={{ y: 60, opacity: 0 }}
          // whileInView={{ y: 0, opacity: 1 }}
          // viewport={{ amount: isMobile ? 0.2 : 0.4, once: false }}
          // transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight w-full text-center"
        >
          Velocare is the complete hospital ERP
        </motion.h1>

        <motion.p
          // initial={{ y: 60, opacity: 0 }}
          // whileInView={{ y: 0, opacity: 1 }}
          // viewport={{ amount: isMobile ? 0.2 : 0.4, once: false }}
          // transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 text-xl md:text-2xl text-gray-700 dark:text-gray-300 text-center"
        >
          connecting Hospitals, Doctors, and Patients anywhere.
        </motion.p>
      </motion.div>

      <div className="flex items-center justify-center my-8">
        <div className="container">
          <Hex
            isInView={isInView}
            className="pos0 before:bg-red-600 dark:before:bg-red-700"
            color="#e11d48"
          >
            <Wallet className="w-5 h-5 sm:w-8 sm:h-8" />
            <h6 className="mt-1 text-[10px] sm:text-sm font-medium text-white">
              Billing
            </h6>
          </Hex>

          <Hex
            isInView={isInView}
            className="pos1 before:bg-blue-600 dark:before:bg-blue-700"
            color="#7c3aed"
          >
            <FileUser className="w-5 h-5 sm:w-8 sm:h-8" />
            <h6 className="mt-1 text-[10px] sm:text-sm font-medium text-white">
              Patient Records
            </h6>
          </Hex>

          <Hex
            isInView={isInView}
            className="pos2 before:bg-green-600 dark:before:bg-green-700"
            color="#7c3aed"
          >
            <Pill className="w-5 h-5 sm:w-8 sm:h-8" />
            <h6 className="mt-1 text-[10px] sm:text-sm font-medium text-white">
              Medicines
            </h6>
          </Hex>

          <Hex
            isInView={isInView}
            className="pos3 before:bg-gray-200 dark:before:bg-gray-800"
            color="#7c3aed"
          >
            <img src="/icon.png" className="p-7" />
          </Hex>

          <Hex
            isInView={isInView}
            className="pos4 before:bg-pink-600 dark:before:bg-pink-700"
            color="#7c3aed"
          >
            <Beaker className="w-5 h-5 sm:w-8 sm:h-8" />
            <h6 className="mt-1 text-[10px] sm:text-sm font-medium text-white">
              Lab Test
            </h6>
          </Hex>

          <Hex
            isInView={isInView}
            className="pos5 before:bg-yellow-600 dark:before:bg-yellow-700"
            color="#7c3aed"
          >
            <Users className="w-5 h-5 sm:w-8 sm:h-8" />
            <h6 className="mt-1 text-[10px] sm:text-sm font-medium text-white">
              Staff Records
            </h6>
          </Hex>

          <Hex
            isInView={isInView}
            className="pos6 before:bg-orange-600 dark:before:bg-orange-700"
            color="#7c3aed"
          >
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

function Hex({ className = "", children, isInView }) {
  return (
    <motion.div
      {...(isMobile
        ? { whileTap: { scale: 1.1, transition: { duration: 0.2 } } }
        : { whileHover: { scale: 1.1, transition: { duration: 0.2 } } })}
      initial={{ y: 40, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`hex ${className}`}
    >
      <div className="hex-inner">{children}</div>
    </motion.div>
  );
}

function Improve() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const opacityText = useTransform(
    scrollYProgress,
    [0, 0.2, 0.7, 1],
    [0, 1, 1, 0]
  );

  const features = [
    {
      icon: Globe,
      title: "Access Anywhere with Any Device",
      desc: "Your hospital operations are no longer tied to a single system. With secure cloud access, administrators, doctors, and staff can manage data from desktops, tablets, or smartphones in real time.",
    },
    {
      icon: Wrench,
      title: "Effortless Maintenance",
      desc: "Updates, backups, and configurations happen seamlessly in the background. You focus on patients and management while the system keeps itself optimized.",
    },
    {
      icon: BarChart3,
      title: "Streamlined Management",
      desc: "Centralize billing, records, and scheduling into one dashboard. Gain instant insights into hospital performance with clean, visual analytics and reduce manual workload.",
    },
    {
      icon: Users,
      title: "Enhanced Collaboration",
      desc: "Bridge communication gaps between departments, doctors, and patients. Share updates instantly and keep every team aligned for faster, smarter decisions.",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative flex flex-col md:flex-row w-full min-h-screen"
    >
      <div className="md:w-1/2 p-10">
        <div className="md:sticky md:top-24">
          <motion.h2
            style={{ y: yText, opacity: opacityText }}
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            How{" "}
            <span className="text-blue-600 dark:text-blue-400">Velocare</span>{" "}
            Improves Your Hospital
          </motion.h2>
          <motion.p
            style={{ y: yText, opacity: opacityText }}
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-md"
          >
            Experience a next-generation ERP designed to reduce admin workload,
            connect departments, and enable real-time decision making — all in
            one platform.
          </motion.p>
        </div>
      </div>

      <div className="md:w-1/2 flex flex-col space-y-20 p-4 md:p-6 lg:p-20">
        {features.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: isMobile ? 0.3 : 0.8 }}
              className="flex items-start gap-5 p-6 rounded-2xl bg-white/60 dark:bg-black shadow-lg flex-col"
            >
              <div className="flex items-center justify-start gap-4 ">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/40 rounded-xl">
                  <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function ChooseWhichYouWant() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const modules = [
    { key: "pharmacy", label: "Pharmacy", icon: Pill },
    { key: "ipd", label: "IPD", icon: Bed },
    { key: "opd", label: "OPD", icon: Stethoscope },
    { key: "pathology", label: "Pathology", icon: FlaskConical },
    { key: "billing", label: "Billing", icon: FileText },
    { key: "inventory", label: "Inventory", icon: Boxes },
  ];

  return (
    <section
      id="modules"
      ref={ref}
      className="relative flex flex-col items-center justify-center min-h-screen text-gray-900 dark:text-white overflow-hidden my-20"
    >
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Choose Modules You Want
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Select the modules your hospital needs. Velocare is modular — you only
          pay for what you use.
        </p>
      </motion.div>

      <div className="flex flex-wrap items-center justify-center max-w-lg md:max-w-xl lg:max-w-3xl">
        {modules.map((m, i) => {
          const Icon = m.icon;
          return (
            <motion.div
              initial={{ y: 40 }}
              whileInView={{ y: 0 }}
              viewport={{ once: false, amount: 0.8 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileTap={
                isMobile
                  ? {
                      scale: 1.05,
                      backgroundColor: "#ffffff",
                      boxShadow:
                        "0 10px 15px -3px rgba(107, 114, 128, 0.3), 0 4px 6px -4px rgba(107, 114, 128, 0.2)",
                    }
                  : {}
              }
              key={i}
              className="h-40 w-40 md:h-40 md:w-40 lg:h-50 lg:w-50
               hover:bg-white dark:hover:bg-black transition-all duration-400 flex items-center justify-center flex-col cursor-pointer
              hover:shadow-lg group"
            >
              <Icon size={40} className="text-blue-500" />
              <h1 className="text-xl my-4 group-hover:text-blue-500">
                {m.label}
              </h1>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
