import { motion, useMotionTemplate, type MotionValue } from "framer-motion";

type SpotlightProps = {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
};

export default function Spotlight({ mouseX, mouseY }: SpotlightProps) {
  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 min-h-screen transition duration-300 lg:absolute"
      style={{
        background: useMotionTemplate`
          radial-gradient(
            600px at ${mouseX}px ${mouseY}px,
            rgba(29, 78, 216, 0.15),
            transparent 80%
          )
        `,
      }}
    />
  );
}
