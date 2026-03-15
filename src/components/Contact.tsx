"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-32 px-6">
      {/* Section divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-[var(--color-accent)]/50 to-transparent" />

      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[var(--color-accent)]/[0.04] blur-[100px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[300px] w-[300px] translate-x-1/2 rounded-full bg-[var(--color-accent)]/[0.03] blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Label */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          custom={0}
          className="mx-auto mb-4 w-fit border-l-2 border-[var(--color-accent)] pl-3 text-sm uppercase tracking-widest text-[var(--color-accent)]"
        >
          Get in Touch
        </motion.p>

        {/* Headline */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          custom={1}
          className="text-4xl font-bold leading-tight md:text-5xl"
        >
          Ready to Scale Your Pipeline?
        </motion.h2>

        {/* Subtext */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          custom={2}
          className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--color-text-secondary)]"
        >
          Whether you&apos;re looking to partner, invest, or learn more about
          what we&apos;re building&nbsp;&mdash; we&apos;d love to hear from you.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          custom={3}
          className="mt-10"
        >
          <a
            href="mailto:jpulier@gmail.com"
            className="inline-block rounded-full bg-[var(--color-accent)] px-10 py-4 text-lg font-semibold text-[var(--color-bg-primary)] transition-all duration-200 hover:scale-105 hover:bg-[var(--color-accent-hover)] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]"
          >
            Contact Us
          </a>
        </motion.div>

        {/* Email line */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          custom={4}
          className="mt-6 text-sm text-[var(--color-text-secondary)]"
        >
          or reach out directly at{" "}
          <a
            href="mailto:jpulier@gmail.com"
            className="text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-hover)]"
          >
            jpulier@gmail.com
          </a>
        </motion.p>
      </div>
    </section>
  );
}
