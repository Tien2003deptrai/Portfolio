import { motion } from "framer-motion";

const AnimatedText = ({ text }) => {
  const letters = Array.from(text);

  return (
    <div className="flex space-x-1">
      {letters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          className="text-emerald-400 text-5xl font-extrabold"
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedText;
