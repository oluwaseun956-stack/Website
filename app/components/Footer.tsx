import { Link } from "react-router";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/analyst-launchpad", label: "Analyst Launchpad" },
  { to: "/consultancy", label: "Consultancy" },
  { to: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://youtube.com", label: "YouTube" },
];

const legalLinks = [
  { label: "Privacy Policy" },
  { label: "Terms & Conditions" },
  { label: "Refund Policy" },
];

export function Footer() {
  return (
    <footer className="bg-navy px-6 pb-12 pt-[100px] text-white lg:px-20">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-20">
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-start">
          <div className="max-w-[400px] space-y-5">
            <p className="font-serif text-[28px] font-black">SEUN EDEMA</p>
            <p className="text-base leading-relaxed text-white/80">
              Business Analyst | Educator | Consultant
            </p>
          </div>

          <div className="flex flex-wrap gap-12 lg:gap-20">
            <div className="w-40 space-y-6">
              <p className="text-sm font-bold uppercase">Navigation</p>
              <div className="flex flex-col gap-3.5 text-[15px] text-white/80">
                {navLinks.map((link) => (
                  <Link key={link.to} to={link.to} className="hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="w-40 space-y-6">
              <p className="text-sm font-bold uppercase">Social</p>
              <div className="flex flex-col gap-3.5 text-[15px] text-white/80">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="w-40 space-y-6">
              <p className="text-sm font-bold uppercase">Legal</p>
              <div className="flex flex-col gap-3.5 text-[15px] text-white/80">
                {legalLinks.map((link) => (
                  <span key={link.label}>{link.label}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="h-px w-full bg-white/10" />
          <p className="text-center text-sm text-white/60">
            © 2026 Seun Edema. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
