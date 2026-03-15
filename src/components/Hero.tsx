"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section className="hero-gradient relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Dot grid overlay */}
      <div className="hero-dots absolute inset-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
        {/* Pill badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="mb-8 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 px-5 py-2 text-sm text-[var(--color-accent)] shadow-[0_0_15px_rgba(0,212,255,0.1)]"
        >
          AI-Native Lead Generation
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-5xl font-bold leading-tight tracking-tight md:text-7xl"
        >
          <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            The Future of
            <br />
            Customer Acquisition
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl"
        >
          We deploy autonomous AI systems that create content, capture
          attention, and convert leads&nbsp;&mdash; at scale, 24/7.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#about"
            className="rounded-full bg-[var(--color-accent)] px-8 py-3 text-base font-semibold text-[var(--color-bg-primary)] transition-all duration-200 hover:scale-105 hover:bg-[var(--color-accent-hover)] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="rounded-full border border-[var(--color-accent)] px-8 py-3 text-base font-semibold text-[var(--color-accent)] transition-all duration-200 hover:bg-[var(--color-accent)] hover:text-[var(--color-bg-primary)] hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-[var(--color-text-secondary)]/50">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown size={20} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
