import { motion } from "framer-motion";

export function RoundedHexagon({
  size = 140,
  color = "from-violet-500 to-indigo-500",
  children,
  delay = 0,
}) {
  const cornerRadius = 6;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      style={{ width: size, height: size }}
      className="relative flex items-center justify-center"
    >
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full drop-shadow-lg"
      >
        <path
          d="M30 5
             h40
             a23 6 0 0 1 5 3
             l20 32
             a6 6 0 0 1 0 6
             l-20 32
             a6 6 0 0 1 -5 3
             h-40
             a6 6 0 0 1 -5 -3
             l-20 -32
             a6 6 0 0 1 0 -6
             l20 -32
             a6 6 0 0 1 5 -3
             z"
          className={`fill-[url(#grad-${color})]`}
          stroke="white"
          strokeWidth="2"
        />
        <defs>
          <linearGradient
            id={`grad-${color}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="var(--tw-gradient-from)" />
            <stop offset="100%" stopColor="var(--tw-gradient-to)" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative flex flex-col items-center text-white">
        {children}
      </div>
    </motion.div>
  );
}
