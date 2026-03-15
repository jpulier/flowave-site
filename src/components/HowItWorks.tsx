"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    number: "01",
    title: "Create",
    description:
      "Our AI engines generate high-performing content — videos, landing pages, ad creatives — tailored to each vertical and audience.",
  },
  {
    number: "02",
    title: "Distribute",
    description:
      "Content is deployed across viral channels, embedded in high-traffic media, and placed directly in front of your ideal prospects.",
  },
  {
    number: "03",
    title: "Convert",
    description:
      "Leads are captured through optimized funnels — phone, web, SMS — qualified in real-time, and delivered ready to close.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-32 px-6">
      {/* Section divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-[var(--color-accent)]/50 to-transparent" />

      <div className="mx-auto max-w-6xl">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mb-4 border-l-2 border-[var(--color-accent)] pl-3 text-sm uppercase tracking-widest text-[var(--color-accent)]"
        >
          How It Works
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20 text-4xl font-bold leading-tight md:text-5xl"
        >
          From Content to Conversion in Three Steps
        </motion.h2>

        {/* Steps — desktop: 3 columns with connecting lines */}
        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {/* Horizontal connecting line (desktop only) */}
          <div className="pointer-events-none absolute top-10 left-[16.67%] right-[16.67%] hidden h-px bg-gradient-to-r from-[var(--color-accent)]/30 via-[var(--color-accent)]/20 to-[var(--color-accent)]/30 md:block" />

          {/* Vertical connecting line (mobile only) */}
          <div className="pointer-events-none absolute top-0 bottom-0 left-6 w-px bg-gradient-to-b from-[var(--color-accent)]/30 via-[var(--color-accent)]/20 to-[var(--color-accent)]/30 md:hidden" />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
              className="relative pl-14 md:pl-0 md:text-center"
            >
              {/* Big faded number */}
              <span className="absolute -top-2 left-14 text-7xl font-bold leading-none text-[var(--color-accent)]/15 select-none md:static md:mb-2 md:block md:text-8xl">
                {step.number}
              </span>

              {/* Step dot on mobile vertical line */}
              <div className="absolute left-[18px] top-3 h-3 w-3 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-bg-primary)] md:hidden" />

              <h3 className="relative mb-3 text-2xl font-semibold md:-mt-6">
                {step.title}
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
