import { motion } from "framer-motion";

const AnimatedText = ({ text }) => {
  const letters = Array.from(text);

  return (
    <div className="flex flex-wrap gap-x-1 sm:gap-x-1.5 md:gap-x-2 gap-y-1 leading-none">
      {letters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          className="text-emerald-400 font-semibold text-3xl xs:text-4xl sm:text-5xl md:text-5xl"
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedText;
