import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function SiteLayout({
  children,
  footer = "default",
}: {
  children: React.ReactNode;
  footer?: "default" | "minimal" | "none";
}) {
  return (
    <div className="flex min-h-screen flex-col bg-canvas">
      <Navbar />
      <main className="flex-1">{children}</main>
      {footer !== "none" ? <Footer variant={footer} /> : null}
    </div>
  );
}
