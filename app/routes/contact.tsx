import type { Route } from "./+types/contact";
import { SiteLayout } from "../components/SiteLayout";
import { Button } from "../components/Button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact | Seun Edema" },
    {
      name: "description",
      content:
        "Get in touch about Analyst Launchpad or Business Analysis consultancy.",
    },
  ];
}

export default function Contact() {
  return (
    <SiteLayout>
      <section className="flex flex-col items-center gap-6 px-6 pb-20 pt-[100px] text-center lg:px-20">
        <h1 className="font-serif text-5xl font-black leading-[1.1] text-navy-deep md:text-[64px]">
          Let&apos;s work together
        </h1>
        <p className="max-w-[700px] text-xl leading-relaxed text-ink">
          Whether you are interested in Analyst Launchpad, Business Analysis
          consultancy or another professional enquiry, get in touch.
        </p>
      </section>

      <section className="grid gap-8 px-6 pb-[100px] lg:grid-cols-2 lg:px-20">
        <article className="flex flex-col gap-8 rounded-2xl border border-line bg-soft p-12">
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase text-navy">Academy</p>
            <h2 className="font-serif text-3xl font-bold text-navy-deep">
              Ready to start building your skills?
            </h2>
            <p className="text-[15px] leading-relaxed text-ink">
              Enrol today to join our next cohort and gain standard tools
              mastery.
            </p>
          </div>
          <Button to="/analyst-launchpad" className="self-start">
            View Analyst Launchpad
          </Button>
        </article>

        <article className="flex flex-col gap-8 rounded-2xl border border-line bg-white p-12 shadow-[0_4px_12px_rgba(10,10,11,0.06)]">
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase text-navy">Advisory</p>
            <h2 className="font-serif text-3xl font-bold text-navy-deep">
              Have a business challenge you&apos;d like to discuss?
            </h2>
            <p className="text-[15px] leading-relaxed text-ink">
              Send over details of your project and we can arrange an alignment
              call.
            </p>
          </div>
          <Button
            variant="secondary"
            href="mailto:hello@seunedema.com"
            className="self-start"
          >
            Email Me
          </Button>
        </article>
      </section>

      <section className="flex flex-col items-center gap-10 border-t border-line bg-soft px-6 py-20 text-center lg:px-20">
        <div className="space-y-3">
          <p className="text-sm font-bold uppercase text-navy">
            General Enquiries
          </p>
          <p className="font-serif text-4xl font-bold text-navy-deep">
            hello@seunedema.com
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 text-base font-bold text-navy-deep">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-80"
          >
            LinkedIn
          </a>
          <span className="size-1 rounded-sm bg-navy" />
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-80"
          >
            Instagram
          </a>
          <span className="size-1 rounded-sm bg-navy" />
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-80"
          >
            YouTube
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
