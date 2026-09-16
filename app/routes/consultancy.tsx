import type { Route } from "./+types/consultancy";
import { SiteLayout } from "../components/SiteLayout";
import { Button } from "../components/Button";
import {
  iconCheck,
  iconCheckSquare,
  iconFileText,
  iconMonitor,
  iconRefreshCw,
  iconTrendingUp,
} from "../assets/brand";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Business Analysis Consultancy | Seun Edema" },
    {
      name: "description",
      content:
        "Practical Business Analysis support for businesses that need clarity, structure and better decisions.",
    },
  ];
}

const services = [
  {
    title: "Business Analysis",
    description:
      "Support with understanding complex business problems, identifying operational needs, and defining clear, practical next steps to execute.",
    icon: iconFileText,
  },
  {
    title: "Data Analysis & Reporting",
    description:
      "Turn raw operational spreadsheets and information into clear analytical reports, key insights, and actionable metrics.",
    icon: iconTrendingUp,
  },
  {
    title: "Process Improvement",
    description:
      "Map and review existing operational pipelines, locate structural inefficiencies, and build easy-to-follow flow improvement plans.",
    icon: iconRefreshCw,
  },
  {
    title: "Business Requirements",
    description:
      "Capture, organise, and communicate precise requirements clearly to ensure alignment between key business units and development teams.",
    icon: iconCheckSquare,
  },
  {
    title: "Reporting & Presentations",
    description:
      "Translate technical or heavy business information into pristine corporate reports and pitch decks tailored for directors and stakeholders.",
    icon: iconMonitor,
  },
];

const useCases = [
  "You have a critical business problem that needs to be clearly defined and structured.",
  "Your current team operations or processes feel inefficient and lack written guides.",
  "You hold valuable transaction data but need help converting it to dashboard insights.",
  "You are preparing to draft technical specs and need clear business requirements.",
  "Your operational units need support with routine reporting processes.",
  "You need high-quality decks for a critical upcoming stakeholder milestone.",
];

const process = [
  {
    step: "01",
    title: "Tell me about your business",
    description:
      "Send an email explaining your business, project, or primary challenge. What are the key bottlenecks you are trying to resolve?",
  },
  {
    step: "02",
    title: "Let’s discuss your needs",
    description:
      "We will arrange a call to discuss your exact requirements and determine whether my specific analysis model is a match for your needs.",
  },
  {
    step: "03",
    title: "Agree the scope",
    description:
      "If we are aligned, we will map out and agree upon the scope, timelines, clear deliverables, and next practical steps.",
  },
];

export default function Consultancy() {
  return (
    <SiteLayout>
      <section className="flex flex-col items-center gap-8 px-6 py-[120px] text-center lg:px-20">
        <div className="max-w-[800px] space-y-6">
          <span className="inline-flex rounded-[20px] bg-soft px-3.5 py-1.5 text-[13px] font-bold uppercase text-navy">
            Business Analysis & Advisory
          </span>
          <h1 className="font-serif text-5xl font-black leading-[1.1] text-navy-deep md:text-[56px]">
            Business Analysis Consultancy
          </h1>
          <p className="text-xl leading-relaxed text-ink">
            Practical Business Analysis support for businesses that need
            clarity, structure and better decisions. Align your requirements,
            reports, and team processes with confidence.
          </p>
        </div>
        <Button href="mailto:hello@seunedema.com" className="px-9 text-base">
          Discuss Your Business Needs
        </Button>
      </section>

      <section className="bg-mist px-6 py-[100px] lg:px-20">
        <div className="mb-14 space-y-4">
          <p className="text-[13px] font-bold uppercase text-navy">
            Areas of Practice
          </p>
          <h2 className="font-serif text-4xl font-bold text-navy-deep">
            Consultancy Services
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex flex-col gap-5 rounded-2xl border border-line bg-white p-9 shadow-[0_4px_12px_rgba(10,10,11,0.06)]"
            >
              <div className="flex size-12 items-center justify-center rounded-3xl bg-soft">
                <img
                  src={service.icon}
                  alt=""
                  className="size-6"
                  width={24}
                  height={24}
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-[22px] font-bold text-navy-deep">
                  {service.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-ink">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-[100px] lg:px-20">
        <div className="mb-14 space-y-4">
          <p className="text-[13px] font-bold uppercase text-navy">Use Cases</p>
          <h2 className="max-w-3xl font-serif text-4xl font-bold text-navy-deep">
            When you might need Business Analysis support
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {useCases.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <div className="flex size-6 shrink-0 items-center justify-center rounded-xl bg-soft">
                <img
                  src={iconCheck}
                  alt=""
                  className="size-3"
                  width={12}
                  height={12}
                />
              </div>
              <p className="text-base leading-relaxed text-ink">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-mist px-6 py-[100px] lg:px-20">
        <div className="mb-16 space-y-4 text-center">
          <p className="text-[13px] font-bold uppercase text-navy">
            Methodology
          </p>
          <h2 className="font-serif text-4xl font-bold text-navy-deep">
            How I Work
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {process.map((item) => (
            <article
              key={item.step}
              className="flex flex-col gap-6 rounded-2xl border border-line bg-white p-10 shadow-[0_4px_12px_rgba(10,10,11,0.06)]"
            >
              <p className="font-serif text-4xl font-black text-navy">
                {item.step}
              </p>
              <div className="space-y-3">
                <h3 className="font-serif text-xl font-bold text-navy-deep">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-ink">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center gap-8 bg-navy px-6 py-[100px] text-center text-white lg:px-20">
        <h2 className="max-w-4xl font-serif text-4xl font-bold md:text-[44px]">
          Have a business challenge you&apos;d like to discuss?
        </h2>
        <p className="max-w-[700px] text-lg leading-relaxed text-white/90">
          Send me an email with a brief overview of your business, the challenge
          you are currently facing, and what kind of deliverables you would like
          help with. Let&apos;s align your operations for success.
        </p>
        <Button variant="white" href="mailto:hello@seunedema.com">
          Email Seun
        </Button>
      </section>
    </SiteLayout>
  );
}
