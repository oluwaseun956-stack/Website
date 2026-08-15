import type { Route } from "./+types/consulting";
import { SiteLayout } from "../components/SiteLayout";
import { Button } from "../components/Button";
import {
  iconAnalysis,
  iconBarChart,
  iconCheckSoft,
  iconCompass,
  iconPeople,
  iconProcess,
  iconSearch,
  iconWave,
  iconWorkflow,
} from "../assets";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Consulting | The Executive Editorial" },
    {
      name: "description",
      content:
        "Business Analysis Consulting Services — precision in synthesis for organizational clarity.",
    },
  ];
}

const capabilities = [
  {
    title: "Process improvement",
    description:
      "Eliminating friction within operational workflows through Lean and Six Sigma methodologies adapted for modern enterprise.",
    icon: iconProcess,
    tone: "light" as const,
  },
  {
    title: "Requirements gathering",
    description:
      "Synthesizing stakeholder vision into technical blueprints that bridge the gap between business intent and technical execution.",
    icon: iconCompass,
    tone: "light" as const,
  },
  {
    title: "Workflow optimization",
    description:
      "Streamlining human-centric processes for peak performance.",
    icon: iconWorkflow,
    tone: "panel" as const,
  },
];

const phases = [
  {
    title: "Discovery",
    description:
      "Immersion across teams to surface friction, dependencies, and unspoken constraints.",
    icon: iconSearch,
  },
  {
    title: "Analysis",
    description:
      "Proprietary frameworks that isolate root causes and quantify opportunity size.",
    icon: iconBarChart,
  },
  {
    title: "Implementation",
    description:
      "Pilot programs with tight feedback loops and measurable adoption gates.",
    icon: iconAnalysis,
  },
];

export default function Consulting() {
  return (
    <SiteLayout>
      <section className="bg-teal-950 px-8 py-28 text-white">
        <div className="mx-auto grid max-w-[1280px] items-end gap-12 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-8">
            <h1 className="font-serif text-5xl leading-tight md:text-6xl lg:text-[72px] lg:leading-[1.05]">
              Business Analysis Consulting Services
            </h1>
            <p className="max-w-2xl text-xl leading-8 text-mint">
              Precision in synthesis. We transform organizational complexity
              into strategic clarity through rigorous analytical frameworks and
              bespoke intervention.
            </p>
            <Button variant="white" to="/book">
              Request a Consultation
            </Button>
          </div>
          <div className="rounded-lg bg-white/10 p-8 backdrop-blur-sm lg:col-span-4">
            <img src={iconBarChart} alt="" className="size-10 brightness-0 invert" />
            <p className="mt-6 font-serif text-xl">Strategic Foresight</p>
            <p className="mt-3 text-sm leading-relaxed text-mint">
              Architecture of operational excellence through data-driven
              insight.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-24">
        <div className="mx-auto max-w-[1280px] space-y-12">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-teal-950">
              Our Capabilities
            </p>
            <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
              Architecting Efficiency
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {capabilities.map((cap) => (
              <article
                key={cap.title}
                className={`rounded p-10 ${
                  cap.tone === "panel" ? "bg-panel" : "bg-white shadow-sm"
                }`}
              >
                <img src={cap.icon} alt="" className="size-8" />
                <h3 className="mt-6 font-serif text-2xl capitalize text-ink">
                  {cap.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {cap.description}
                </p>
              </article>
            ))}
            <article className="relative overflow-hidden rounded bg-teal-950 p-10 text-white md:row-span-1">
              <img
                src={iconWave}
                alt=""
                className="pointer-events-none absolute -right-4 bottom-0 h-32 opacity-30"
              />
              <h3 className="font-serif text-3xl italic">Data-driven strategy</h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-mint">
                Leveraging predictive modeling and deep-dive analytics to inform
                multi-year strategic roadmaps and capital allocation decisions.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-panel px-8 py-24">
        <div className="mx-auto max-w-[1280px] space-y-16">
          <div className="flex flex-col justify-between gap-8 lg:flex-row">
            <div className="max-w-xl">
              <h2 className="font-serif text-4xl text-ink">How I Work</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                A systematic four-phase engagement model designed for maximum
                accountability and measurable ROI.
              </p>
            </div>
            <blockquote className="max-w-sm border-l-4 border-teal-900 pl-6 font-serif text-2xl italic text-teal-950">
              Clarity is the ultimate sophistication.
            </blockquote>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {phases.map((phase, i) => (
              <div key={phase.title} className="space-y-4">
                <p className="text-xs uppercase tracking-[0.2em] text-teal-950">
                  Phase 0{i + 1}
                </p>
                <img src={phase.icon} alt="" className="size-8" />
                <h3 className="font-serif text-xl text-ink">{phase.title}</h3>
                <p className="text-sm leading-relaxed text-muted">
                  {phase.description}
                </p>
              </div>
            ))}
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] text-teal-950">
                Phase 04
              </p>
              <div className="flex size-12 items-center justify-center rounded-full bg-teal-950">
                <img
                  src={iconCheckSoft}
                  alt=""
                  className="size-5 brightness-0 invert"
                />
              </div>
              <h3 className="font-serif text-xl text-ink">Result</h3>
              <p className="text-sm leading-relaxed text-muted">
                Hand-over of optimized systems, playbooks, and performance
                dashboards your team can own.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-24 text-center">
        <div className="mx-auto max-w-2xl space-y-6">
          <img src={iconPeople} alt="" className="mx-auto size-12" />
          <h2 className="font-serif text-4xl text-ink md:text-5xl">
            Elevate your operational intelligence.
          </h2>
          <p className="text-lg text-muted">
            Engage the architect of clarity for your next strategic transition.
            Detailed engagement proposals provided within 48 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button to="/book">Request a Consultation</Button>
            <Button variant="outline" to="/">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
