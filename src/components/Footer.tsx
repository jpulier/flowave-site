import { Linkedin } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-6 py-12">
      <div className="mx-auto max-w-6xl">
        {/* Top row */}
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <a href="#" className="text-lg font-bold tracking-[0.25em] text-white">
            FLOWAVE
          </a>

          <div className="flex flex-wrap justify-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--color-text-secondary)] transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-[var(--color-border)]" />

        {/* Bottom row */}
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="text-sm text-[var(--color-text-secondary)]">
            &copy; 2026 Flowave Media Inc. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/jake-pulier-bb0152150/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-secondary)] transition-colors duration-200 hover:text-[var(--color-accent)]"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
