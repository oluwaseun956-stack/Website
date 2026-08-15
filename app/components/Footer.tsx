import { Link } from "react-router";
import { iconLinkedin } from "../assets";

type FooterProps = {
  variant?: "default" | "minimal" | "legal";
};

export function Footer({ variant = "default" }: FooterProps) {
  if (variant === "minimal") {
    return (
      <footer className="mx-auto w-full max-w-[1280px] border-t border-line/20 px-6 pb-12 pt-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] uppercase tracking-widest text-muted">
            © 2024 The Executive Editorial. Precision in Synthesis.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-muted">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <span>Privacy Policy</span>
            <Link to="/book">Contact</Link>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-footer px-8 py-16">
      <div className="mx-auto grid max-w-[1280px] gap-12 md:grid-cols-3">
        <div className="space-y-4">
          <p className="font-serif text-xl text-teal-800">
            The Executive Editorial
          </p>
          <p className="max-w-xs text-sm leading-relaxed text-slate-soft">
            Synthesizing complex data into actionable strategies for
            high-performance organizations and professionals.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-bold uppercase tracking-wide text-teal-800">
            Navigation
          </p>
          <div className="flex flex-col gap-3 text-sm uppercase tracking-wide text-slate-soft">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <Link to="/book" className="hover:text-teal-700">
              Contact
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-start gap-6 md:items-end">
          <p className="text-right text-sm uppercase tracking-wide text-slate-soft">
            © 2024 The Executive Editorial. Precision in Synthesis.
          </p>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex size-6 overflow-hidden"
            aria-label="LinkedIn"
          >
            <img src={iconLinkedin} alt="" className="size-full" />
          </a>
        </div>
      </div>
    </footer>
  );
}
