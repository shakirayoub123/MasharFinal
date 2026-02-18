import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Keep track of all circle positions globally
let activePositions = [];

const getRandomPosition = (maxX, maxY, size, minDistance = 150) => {
  const padding = 40;
  let position;
  let tries = 0;

  do {
    const xRaw = Math.random() * (maxX - size - padding * 2);
    const yRaw = Math.random() * (maxY - size - padding * 2);

    position = {
      x: xRaw - (maxX - size - padding * 2) / 2,
      y: yRaw - (maxY - size - padding * 2) / 2,
    };

    tries++;
    const tooClose = activePositions.some(
      (p) => Math.hypot(p.x - position.x, p.y - position.y) < minDistance
    );

    if (!tooClose || tries > 20) break;
  } while (true);

  return position;
};

const FloatingCircle = ({
  children,
  size,
  gradient,
  duration = 5,

  containerWidth = 600,
  containerHeight = 600,
}) => {
  const [position, setPosition] = useState(
    getRandomPosition(containerWidth, containerHeight, parseInt(size))
  );

  useEffect(() => {
    activePositions.push(position);

    const interval = setInterval(() => {
      const newPos = getRandomPosition(
        containerWidth,
        containerHeight,
        parseInt(size)
      );
      setPosition(newPos);
      activePositions = activePositions.map((p) =>
        p === position ? newPos : p
      );
    }, duration * 1000);

    return () => {
      activePositions = activePositions.filter((p) => p !== position);
      clearInterval(interval);
    };
  }, [duration, containerWidth, containerHeight, size, position]);

  return (
    <motion.div
      className="absolute text-white font-semibold flex items-center justify-center rounded-full shadow-lg text-center"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: gradient,
      }}
      animate={position}
      transition={{
        duration,
        ease: "linear",
      }}
    >
      {children}
    </motion.div>
  );
};

export default FloatingCircle;
