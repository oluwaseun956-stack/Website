import type { Route } from "./+types/thank-you";
import { SiteLayout } from "../components/SiteLayout";
import { Button } from "../components/Button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Thank You | Seun Edema" },
    {
      name: "description",
      content: "Thanks for getting in touch with Seun Edema.",
    },
  ];
}

export default function ThankYou() {
  return (
    <SiteLayout>
      <section className="flex flex-col items-center gap-8 px-6 py-[120px] text-center lg:px-20">
        <p className="text-[13px] font-bold uppercase text-navy">Confirmation</p>
        <h1 className="max-w-3xl font-serif text-5xl font-black text-navy-deep md:text-[56px]">
          Thank you for reaching out
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-ink">
          Your message or payment verification has been received. I&apos;ll get
          back to you shortly with next steps.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button to="/">Back to Home</Button>
          <Button variant="secondary" to="/analyst-launchpad">
            View Analyst Launchpad
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
