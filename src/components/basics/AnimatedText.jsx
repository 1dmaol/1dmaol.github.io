import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function AnimatedText({text, className}) {

    const { i18n } = useTranslation()
    const [delay, setDelay] = useState(10)

    useEffect(() => {
        setDelay(1000)
    }, [i18n.language])

  return (
    <div className={className}>
      {text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i/delay
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