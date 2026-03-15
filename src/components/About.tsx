"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, Target } from "lucide-react";

const CARDS = [
  {
    icon: Sparkles,
    title: "AI Content Engine",
    description:
      "Our AI generates high-performing content tailored to each vertical — from viral social media to targeted landing pages — all optimized for conversion.",
  },
  {
    icon: Zap,
    title: "Autonomous Distribution",
    description:
      "Content is automatically distributed across platforms, embedded in viral media, and placed where your target audience already lives.",
  },
  {
    icon: Target,
    title: "Qualified Lead Delivery",
    description:
      "Every interaction funnels into our lead capture system. You get pre-qualified prospects delivered directly — ready to convert.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6">
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
          What We Do
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-bold leading-tight md:text-5xl"
        >
          AI-Powered Lead Generation at Scale
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 max-w-3xl text-lg leading-relaxed text-[var(--color-text-secondary)]"
        >
          Flowave deploys autonomous AI systems across high-value verticals. We
          create the content, capture the attention, and deliver qualified
          leads&nbsp;&mdash; without human bottlenecks.
        </motion.p>

        {/* Feature cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
              className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]/40 hover:shadow-[0_0_30px_rgba(0,212,255,0.06)]"
            >
              <card.icon className="mb-5 h-8 w-8 text-[var(--color-accent)]" />
              <h3 className="mb-3 text-xl font-semibold">{card.title}</h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
