import { motion } from "framer-motion";

function AnimatedText({text, className}) {

  return (
    <div className={className}>
      {text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 10
          }}
          key={i}
        >
          {el}
        </motion.span>
      ))}
    </div>
  );
}

export default AnimatedText;