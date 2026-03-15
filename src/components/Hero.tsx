"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.15, duration: 0.7, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section className="hero-gradient relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Dot grid overlay */}
      <div className="hero-dots absolute inset-0 pointer-events-none" />

      {/* Glow orb behind headline */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(0,212,255,0.15) 0%, rgba(124,58,237,0.08) 50%, transparent 70%)",
          animation: "glow-pulse 6s ease-in-out infinite",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
        {/* Pill badge with rotating gradient border */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="hero-pill mb-8 rounded-full bg-[var(--color-bg-primary)] px-5 py-2 text-sm text-[var(--color-accent)] shadow-[0_0_20px_rgba(0,212,255,0.08)]"
        >
          AI-Native Lead Generation
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="font-heading text-6xl font-bold leading-[1.05] tracking-tight md:text-8xl"
        >
          <span className="bg-gradient-to-r from-white via-cyan-200 to-violet-300 bg-clip-text text-transparent">
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
            className="rounded-lg bg-[var(--color-accent)] px-10 py-4 text-lg font-semibold text-[var(--color-bg-primary)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-accent-hover)] hover:shadow-[0_8px_30px_rgba(0,212,255,0.35)]"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-white/15 px-10 py-4 text-lg font-semibold text-[var(--color-text-secondary)] transition-all duration-200 hover:border-white/30 hover:bg-white/5 hover:text-white"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll line indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="block">
          <div
            className="h-10 w-[2px] origin-top bg-gradient-to-b from-[var(--color-accent)]/60 to-transparent"
            style={{ animation: "scroll-line 2s ease-in-out infinite" }}
          />
        </a>
      </motion.div>
    </section>
  );
}
