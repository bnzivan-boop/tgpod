"use client";

import { motion } from "framer-motion";
import { staggerChildren, wordReveal, viewportOnce } from "@/lib/motion";

/** Reveals a heading word-by-word with a clip-path wipe. */
export function RevealText({
  text,
  as: Tag = "h2",
  className = "",
}: {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "strong";
  className?: string;
}) {
  const words = text.split(" ");
  const MotionTag = motion[Tag];
  return (
    <MotionTag
      className={className}
      variants={staggerChildren(0.04)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      aria-label={text}
    >
      {words.map((word, i) => (
        <motion.span key={i} aria-hidden variants={wordReveal} className="inline-block whitespace-pre">
          {word}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </MotionTag>
  );
}
