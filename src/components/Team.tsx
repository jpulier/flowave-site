"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin } from "lucide-react";

const MEMBERS = [
  {
    name: "Jake Pulier",
    title: "CEO & Co-Founder",
    photo: "/team/jake.jpg",
    bio: "Entrepreneur and builder at the intersection of AI, media, and growth. Jake leads Flowave\u2019s vision, strategy, and go-to-market.",
    linkedin: "https://www.linkedin.com/in/jake-pulier-bb0152150/",
  },
  {
    name: "Shane Hackett",
    title: "Co-Founder & Chairman",
    photo: "/team/shane.jpg",
    bio: "Seasoned operator and dealmaker with deep experience in scaling businesses. Shane drives Flowave\u2019s partnerships, governance, and strategic direction.",
    linkedin: "https://www.linkedin.com/in/shanehackettus/",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function Team() {
  return (
    <section id="team" className="relative py-32 px-6">
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
          The Team
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl font-bold leading-tight md:text-5xl"
        >
          Built by Operators
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 max-w-3xl text-lg leading-relaxed text-[var(--color-text-secondary)]"
        >
          Flowave was founded by people who&apos;ve been in the
          trenches&nbsp;&mdash; building companies, shipping products, and
          closing deals.
        </motion.p>

        {/* Team cards */}
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-12 md:grid-cols-2">
          {MEMBERS.map((member, i) => (
            <motion.div
              key={member.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
              className="group flex flex-col items-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]/40 hover:shadow-[0_0_30px_rgba(0,212,255,0.06)]"
            >
              {/* Photo with gradient ring */}
              <div className="relative mb-6 h-[200px] w-[200px]">
                {/* Gradient ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-secondary)] opacity-20 transition-opacity duration-300 group-hover:opacity-50" />
                <div className="absolute inset-[3px] overflow-hidden rounded-full bg-[var(--color-bg-secondary)]">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>
              </div>

              <h3 className="font-heading text-xl font-bold">{member.name}</h3>
              <p className="mt-1 text-sm font-medium text-[var(--color-accent)]">
                {member.title}
              </p>
              <p className="mt-3 text-[var(--color-text-secondary)] leading-relaxed">
                {member.bio}
              </p>

              {/* LinkedIn — visible on hover */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-[var(--color-text-secondary)] opacity-0 transition-all duration-300 hover:text-[var(--color-accent)] group-hover:opacity-100"
                aria-label={`${member.name} on LinkedIn`}
              >
                <Linkedin size={20} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
