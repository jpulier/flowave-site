"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TrendingUp, Phone, DollarSign, BarChart3 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const sectionFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function PersonalInjuryPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="hero-gradient relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6 pt-24">
        <div className="hero-dots absolute inset-0 pointer-events-none" />
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(0,212,255,0.15) 0%, rgba(124,58,237,0.08) 50%, transparent 70%)",
          }}
        />
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 border-l-2 border-[var(--color-accent)] pl-3 text-sm uppercase tracking-widest text-[var(--color-accent)]"
          >
            Vertical Deep Dive
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-heading text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl"
          >
            <span className="bg-gradient-to-r from-white via-cyan-200 to-violet-300 bg-clip-text text-transparent">
              Qualified Personal Injury Leads at Scale
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl"
          >
            Autonomous content distribution that turns organic attention into
            qualified personal injury leads&nbsp;&mdash; delivered to attorneys
            at fixed CPA.
          </motion.p>
        </div>
      </section>

      {/* Why Personal Injury */}
      <section className="relative py-24 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-[var(--color-accent)]/50 to-transparent" />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-1/2 h-[600px] w-[600px] -translate-x-1/3 -translate-y-1/2 rounded-full bg-[var(--color-accent)]/[0.03] blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-4xl">
          <motion.p
            variants={sectionFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-4 border-l-2 border-[var(--color-accent)] pl-3 text-sm uppercase tracking-widest text-[var(--color-accent)]"
          >
            Why Personal Injury
          </motion.p>
          <motion.h2
            variants={sectionFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-heading text-3xl font-bold leading-tight md:text-4xl"
          >
            The Highest-Leverage Vertical for Organic Distribution
          </motion.h2>
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8 space-y-5 text-lg leading-relaxed text-[var(--color-text-secondary)]"
          >
            <p>
              Personal injury is the single best vertical for performance lead
              generation. Qualified calls command $150&ndash;$800 each, and
              every lead carries urgent intent&nbsp;&mdash; people who have been
              in an accident need an attorney now, not next quarter.
            </p>
            <p>
              The CTA is dead simple: one phone call or text message. No
              complex sign-up flows, no product demos, no 14-day trials. A
              viewer sees content, recognizes their situation, and calls. That
              simplicity is what makes organic distribution work at scale.
            </p>
            <p>
              Law firms are already budgeted for lead acquisition. They spend
              billions annually on TV, radio, and paid search. We offer them a
              new channel&nbsp;&mdash; organic social distribution&nbsp;&mdash;
              at a fraction of the cost per qualified lead, with full
              attribution and zero upfront commitment.
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4"
          >
            {[
              { icon: DollarSign, stat: "$150–$800", label: "Per Qualified Call" },
              { icon: TrendingUp, stat: "Urgent", label: "Buyer Intent" },
              { icon: Phone, stat: "1-Step", label: "CTA Simplicity" },
              { icon: BarChart3, stat: "$B+", label: "Annual Market Spend" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-5 text-center"
              >
                <item.icon className="mx-auto mb-2 h-6 w-6 text-[var(--color-accent)]" />
                <p className="font-heading text-xl font-bold text-white">
                  {item.stat}
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-[var(--color-text-secondary)]">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative bg-[var(--color-bg-secondary)] py-24 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-[var(--color-accent)]/50 to-transparent" />
        <div className="mx-auto max-w-4xl">
          <motion.p
            variants={sectionFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-4 border-l-2 border-[var(--color-accent)] pl-3 text-sm uppercase tracking-widest text-[var(--color-accent)]"
          >
            How It Works
          </motion.p>
          <motion.h2
            variants={sectionFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-heading text-3xl font-bold leading-tight md:text-4xl"
          >
            From Viral Content to Signed Retainer
          </motion.h2>
          <div className="mt-12 space-y-10">
            {[
              {
                step: "01",
                title: "Viral Content Distribution",
                text: "Our AI generates and distributes personal injury awareness content across high-traffic social channels. Each piece is optimized for engagement and embedded with trackable CTAs — phone numbers and text-in keywords unique to each campaign.",
              },
              {
                step: "02",
                title: "CTA Capture",
                text: "When a viewer calls or texts, they enter our qualification flow. We collect accident details, injury type, timeline, and location — everything an intake team needs to evaluate the case. No forms, no friction, just a conversation.",
              },
              {
                step: "03",
                title: "Qualified Lead Delivery",
                text: "Leads that meet your criteria are routed directly to your intake team in real time. Full attribution tracks which creator, which piece of content, and which CTA generated the lead — so you know exactly what's working.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="flex gap-6"
              >
                <span className="font-heading text-4xl font-bold text-[var(--color-accent)]/20 shrink-0">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[var(--color-text-secondary)] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Model */}
      <section className="relative py-24 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-[var(--color-accent)]/50 to-transparent" />
        <div className="mx-auto max-w-4xl">
          <motion.p
            variants={sectionFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-4 border-l-2 border-[var(--color-accent)] pl-3 text-sm uppercase tracking-widest text-[var(--color-accent)]"
          >
            Performance Model
          </motion.p>
          <motion.h2
            variants={sectionFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-heading text-3xl font-bold leading-tight md:text-4xl"
          >
            You Pay for Results, Not Impressions
          </motion.h2>
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8 space-y-5 text-lg leading-relaxed text-[var(--color-text-secondary)]"
          >
            <p>
              We operate on a fixed-CPA or revenue-share basis. You define what
              a qualified lead looks like&nbsp;&mdash; accident type, geography,
              injury severity&nbsp;&mdash; and you only pay when we deliver one
              that meets your criteria.
            </p>
            <p>
              Every lead carries full attribution: which creator produced the
              content, which platform it ran on, and which CTA the prospect
              responded to. This isn&rsquo;t a black box. You see exactly where
              your leads come from and what each channel costs.
            </p>
            <p>
              There is no upfront fee, no monthly retainer, and no minimum
              commitment. If we don&rsquo;t deliver qualified leads, you
              don&rsquo;t pay. The risk sits entirely on our side&nbsp;&mdash;
              which is how we think performance marketing should work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Distribution Capacity */}
      <section className="relative bg-[var(--color-bg-secondary)] py-24 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-[var(--color-accent)]/50 to-transparent" />
        <div className="mx-auto max-w-4xl">
          <motion.p
            variants={sectionFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-4 border-l-2 border-[var(--color-accent)] pl-3 text-sm uppercase tracking-widest text-[var(--color-accent)]"
          >
            Distribution Capacity
          </motion.p>
          <motion.h2
            variants={sectionFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-heading text-3xl font-bold leading-tight md:text-4xl"
          >
            100M+ Monthly Views via Partner Network
          </motion.h2>
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8 space-y-5 text-lg leading-relaxed text-[var(--color-text-secondary)]"
          >
            <p>
              Flowave operates a network of content creators and viral
              distribution channels with a combined reach exceeding 100 million
              monthly views. This is organic inventory&nbsp;&mdash; real
              audiences watching real content&nbsp;&mdash; not programmatic ad
              placements.
            </p>
            <p>
              Organic distribution runs at roughly $0.25 CPM, a fraction of
              what paid social or search costs for the same audience. Because
              the content is native to each platform, engagement rates are
              significantly higher than interruptive ad formats.
            </p>
            <p>
              Capacity scales with budget. As you increase spend, we activate
              more creators and more channels. There is no ceiling on
              volume&nbsp;&mdash; only on how many qualified leads your intake
              team can process.
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {[
              { stat: "100M+", label: "Monthly Views" },
              { stat: "$0.25", label: "Organic CPM" },
              { stat: "Unlimited", label: "Scale with Budget" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 text-center"
              >
                <p className="font-heading text-3xl font-bold text-[var(--color-accent)]">
                  {item.stat}
                </p>
                <p className="mt-2 text-sm uppercase tracking-widest text-[var(--color-text-secondary)]">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-[var(--color-accent)]/50 to-transparent" />
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            variants={sectionFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-heading text-3xl font-bold leading-tight md:text-4xl"
          >
            Ready to Scale Your PI Intake?
          </motion.h2>
          <motion.p
            variants={sectionFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-4 text-lg text-[var(--color-text-secondary)]"
          >
            Tell us about your firm and your lead criteria. We&rsquo;ll show
            you what Flowave can deliver in your market.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="mt-8"
          >
            <Link
              href="/#contact"
              className="inline-block rounded-lg bg-[var(--color-accent)] px-10 py-4 text-lg font-semibold text-[var(--color-bg-primary)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-accent-hover)] hover:shadow-[0_8px_30px_rgba(0,212,255,0.35)]"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
