import type { Route } from "./+types/coaching";
import { Link } from "react-router";
import { SiteLayout } from "../components/SiteLayout";
import { Button } from "../components/Button";
import {
  coachingBlueprint,
  coachingHero,
  iconBriefcase,
  iconCheck,
  iconGrowthArrow,
  iconPrecision,
  iconPresence,
  iconStrategy,
} from "../assets";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "1:1 Coaching | The Executive Editorial" },
    {
      name: "description",
      content:
        "Personalised coaching — precision-guided mentorship for business analysts and leaders.",
    },
  ];
}

const features = [
  {
    title: "Strategic Thinking",
    description:
      "Develop frameworks that cut through noise and surface the decisions that actually move the needle.",
    icon: iconStrategy,
  },
  {
    title: "Technical Precision",
    description:
      "Sharpen analytical craft across SQL, modeling, and requirements so your work holds under scrutiny.",
    icon: iconPrecision,
  },
  {
    title: "Executive Presence",
    description:
      "Build the communication posture needed to brief stakeholders and influence board-level outcomes.",
    icon: iconPresence,
  },
];

const steps = [
  {
    n: "01",
    title: "Diagnostic Audit",
    description:
      "A deep assessment of your current capabilities, gaps, and career trajectory.",
  },
  {
    n: "02",
    title: "Roadmap Architecture",
    description:
      "A bespoke development plan aligned to your target role and organizational context.",
  },
  {
    n: "03",
    title: "Execution & Feedback",
    description:
      "Live working sessions with rapid critique loops on real deliverables.",
  },
  {
    n: "04",
    title: "Final Certification",
    description:
      "Capstone review and narrative packaging of your growth for stakeholders.",
  },
];

const tags = ["SQL Mastery", "BPMN 2.0", "Stakeholder Management", "PMO"];

export default function Coaching() {
  return (
    <SiteLayout>
      <section className="px-8 pb-24 pt-24 lg:pt-40">
        <div className="mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.2em] text-teal-950">
              Bespoke Partnership
            </p>
            <h1 className="font-serif text-5xl leading-none text-ink md:text-6xl lg:text-[72px]">
              Personalised{" "}
              <span className="italic text-teal-950">Coaching</span>
            </h1>
            <p className="max-w-lg text-xl leading-8 text-muted">
              Precision-guided mentorship for business analysts and leaders who
              need more than templates — they need a partner for high-stakes
              growth.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button to="/book">Book 1:1 Coaching</Button>
              <Button variant="outline" to="/book">
                View Syllabus
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg shadow-xl">
            <img
              src={coachingHero}
              alt="Professional coaching session"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-panel px-8 py-24">
        <div className="mx-auto max-w-[1280px] space-y-12">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h2 className="font-serif text-4xl text-ink">
                Tailored support for individuals
              </h2>
              <div className="mt-4 h-1 w-24 bg-teal-900" />
            </div>
            <p className="max-w-md text-muted">
              Standard templates fail unique challenges. We build frameworks
              around your specific career trajectory.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((f) => (
              <article key={f.title} className="rounded bg-white p-8 shadow-sm">
                <div className="mb-6 flex size-12 items-center justify-center rounded bg-soft">
                  <img src={f.icon} alt="" className="size-6" />
                </div>
                <h3 className="font-serif text-2xl text-ink">{f.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {f.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-24">
        <div className="mx-auto grid max-w-[1280px] gap-6 lg:grid-cols-3">
          <div className="flex flex-col justify-between rounded-lg bg-teal-950 p-10 text-white lg:col-span-2">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-serif text-4xl">Career growth</h3>
              <img src={iconGrowthArrow} alt="" className="size-10" />
            </div>
            <p className="mt-8 max-w-lg text-lg text-mint">
              Map a promotion path, rebuild your analytical brand, and practice
              the conversations that unlock the next role.
            </p>
          </div>
          <div className="flex flex-col justify-between rounded-lg bg-white p-10 shadow-sm">
            <div>
              <img src={iconBriefcase} alt="" className="size-8" />
              <h3 className="mt-6 font-serif text-2xl text-ink">
                Interview prep
              </h3>
              <p className="mt-3 text-muted">
                Mock sessions calibrated to BA and strategy hiring loops.
              </p>
            </div>
            <Link
              to="/book"
              className="mt-8 text-sm uppercase tracking-[0.14em] text-teal-950"
            >
              Book a Mock Session →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-canvas px-8 py-24">
        <div className="mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="font-serif text-4xl text-ink">Skill mastery</h2>
            <p className="text-lg leading-relaxed text-muted">
              Deepen the domains that compound — from Agile delivery rituals to
              SQL fluency and stakeholder orchestration.
            </p>
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-soft px-4 py-2 text-xs uppercase tracking-wide text-teal-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={coachingBlueprint}
              alt="Hands working on a blueprint"
              className="aspect-square w-full rounded object-cover grayscale"
            />
            <div className="flex aspect-square items-center justify-center rounded bg-teal-950">
              <img src={iconCheck} alt="" className="size-16" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-24">
        <div className="mx-auto max-w-[800px] space-y-12 text-center">
          <div>
            <h2 className="font-serif text-4xl text-ink">
              Structured sessions breakdown
            </h2>
            <p className="mt-4 text-muted">
              A systematic approach to your personal development.
            </p>
          </div>
          <ol className="relative space-y-8 text-left before:absolute before:left-6 before:top-4 before:h-[calc(100%-2rem)] before:w-px before:bg-line/50">
            {steps.map((step) => (
              <li key={step.n} className="relative flex gap-6 pl-2">
                <div className="z-10 flex size-12 shrink-0 items-center justify-center bg-soft font-serif text-teal-950">
                  {step.n}
                </div>
                <div>
                  <h4 className="text-xl text-ink">{step.title}</h4>
                  <p className="mt-2 text-muted">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-8 pb-24">
        <div className="mx-auto flex max-w-[1216px] flex-col items-center rounded-lg bg-gradient-to-br from-teal-950 to-teal-900 px-8 py-20 text-center">
          <h2 className="font-serif text-4xl text-white md:text-5xl">
            Ready to elevate your trajectory?
          </h2>
          <p className="mt-6 max-w-xl text-lg text-mint">
            Coaching slots for Q4 are limited. Secure your diagnostic session
            while availability remains.
          </p>
          <Button variant="white" to="/book" className="mt-10">
            Book 1:1 Coaching
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
