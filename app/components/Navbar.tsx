import { NavLink } from "react-router";
import { Button } from "./Button";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/analyst-launchpad", label: "Analyst Launchpad" },
  { to: "/consultancy", label: "Consultancy" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <div className="mx-auto flex h-[90px] w-full max-w-[1440px] items-center justify-between px-6 lg:px-20">
        <NavLink
          to="/"
          className="font-serif text-[22px] font-black text-navy"
        >
          SEUN EDEMA
        </NavLink>

        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={"end" in link ? link.end : false}
              className={({ isActive }) =>
                [
                  "relative flex flex-col items-start gap-1 text-[15px] transition-colors",
                  isActive
                    ? "font-bold text-navy"
                    : "font-medium text-ink hover:text-navy",
                ].join(" ")
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive ? (
                    <span className="absolute -bottom-1 h-0.5 w-3 rounded-[1px] bg-navy" />
                  ) : null}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <Button to="/analyst-launchpad" className="hidden sm:inline-flex">
          Enrol in Analyst Launchpad
        </Button>
      </div>
    </header>
  );
}
