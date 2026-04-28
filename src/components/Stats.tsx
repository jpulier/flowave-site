"use client";

import { motion } from "framer-motion";

const STATS = [
  { display: "1+", label: "Active Vertical" },
  { display: "24/7", label: "Autonomous Operation" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function Stats() {
  return (
    <section className="relative bg-[var(--color-bg-secondary)] py-20 px-6">
      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-[var(--color-accent)]/50 to-transparent" />
      {/* Bottom divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-[var(--color-accent)]/50 to-transparent" />

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 text-center md:grid-cols-2 md:gap-8">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={i}
            className="relative"
          >
            {/* Glow behind number */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[var(--color-accent)]/10 to-[var(--color-accent-secondary)]/5 blur-2xl" />
            <span className="relative inline-block text-5xl font-bold font-heading text-[var(--color-accent)] md:text-6xl">
              {stat.display}
            </span>
            <p className="mt-3 text-sm uppercase tracking-widest text-[var(--color-text-secondary)]">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
