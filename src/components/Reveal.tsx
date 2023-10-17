import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  delay: number;
  xPos?: number;
  yPos?: boolean;
}

export default function Reveal({
  children,
  width = "fit-content",
  xPos = -75,
  delay,
  yPos = false,
}: Props) {
  console.log(delay);
  const ref = useRef(null);
  const mainControls = useAnimation();
  const inView = useInView(ref, { once: false });

  useEffect(() => {
    if (inView) {
      mainControls.start("visible");
    } else mainControls.set("hidden");
  }, [inView]);
  return (
    <div ref={ref} style={{ position: "relative", width }}>
      {!yPos ? (
        <motion.div
          variants={{
            hidden: { opacity: 0, x: xPos, filter: "blur(2px)" },
            visible: { opacity: 1, x: 0, filter: "blur(0)" },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: delay, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      ) : (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -50, filter: "blur(2px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0)" },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.3, delay: delay, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}
