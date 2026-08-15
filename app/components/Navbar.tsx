import { NavLink } from "react-router";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/group-classes", label: "Group Classes" },
  { to: "/coaching", label: "1:1 Coaching" },
  { to: "/consulting", label: "Consulting" },
  { to: "/book", label: "Book" },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-transparent bg-white/80 shadow-[0_20px_25px_-5px_rgba(15,23,42,0.05)] backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-8">
        <NavLink
          to="/"
          className="font-serif text-2xl italic text-teal-800"
        >
          The Executive Editorial
        </NavLink>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={"end" in link ? link.end : false}
              className={({ isActive }) =>
                [
                  "font-serif text-lg tracking-tight transition-colors",
                  isActive
                    ? "border-b-2 border-teal-600 pb-1.5 font-bold text-teal-700"
                    : "text-slate hover:text-teal-700",
                ].join(" ")
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/payment"
            className={({ isActive }) =>
              [
                "rounded-md bg-teal-950 px-6 py-2 text-sm uppercase tracking-wide text-white transition-opacity hover:opacity-90",
                isActive ? "ring-2 ring-teal-600 ring-offset-2" : "",
              ].join(" ")
            }
          >
            Payment
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
