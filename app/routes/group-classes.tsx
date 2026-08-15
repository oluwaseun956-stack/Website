import type { Route } from "./+types/group-classes";
import { SiteLayout } from "../components/SiteLayout";
import { Button } from "../components/Button";
import {
  groupHands,
  groupHero,
  groupWorkspace,
  iconBarChart,
  iconCheckTeal,
  iconCompass,
  iconGraph,
  iconProcess,
  iconRocket,
  iconStrategy,
  iconSwap,
  iconUsers,
  iconWorkflow,
} from "../assets";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Group Classes | The Executive Editorial" },
    {
      name: "description",
      content:
        "Business Analysis Group Training — transform raw data into strategic foresight.",
    },
  ];
}

const audiences = [
  {
    title: "Aspiring Analysts",
    description:
      "Break into the industry with a portfolio of real-world case studies and a mastery of foundational methodologies.",
    icon: iconCompass,
  },
  {
    title: "Career Switchers",
    description:
      "Translate your existing domain expertise into a structured analytical framework that commands authority.",
    icon: iconSwap,
  },
  {
    title: "Enterprise Teams",
    description:
      "Align your department's strategic approach with unified tools, shared vocabulary, and standardized reporting.",
    icon: iconUsers,
  },
];

const learnings = [
  {
    title: "Strategic Frameworks",
    description:
      "Master SWOT, PESTLE, and Value Chain analysis with a modern editorial lens.",
    icon: iconStrategy,
  },
  {
    title: "Analytical Tools",
    description:
      "Advanced Excel synthesis, SQL for analysts, and high-impact visualization techniques.",
    icon: iconBarChart,
  },
  {
    title: "Real-World Skills",
    description:
      "Stakeholder interviewing, requirement elicitation, and executive presentation mastery.",
    icon: iconWorkflow,
  },
];

const formats = [
  {
    title: "8-Week Intensive",
    description: "Two evening sessions per week via HD live stream.",
    icon: iconRocket,
  },
  {
    title: "Live Interactive Sessions",
    description: "Real-time collaboration and Q&A with industry veterans.",
    icon: iconProcess,
  },
  {
    title: "Curated Resource Library",
    description: "Lifetime access to frameworks, templates, and case archives.",
    icon: iconGraph,
  },
];

const benefits = [
  "Portfolio-ready case studies",
  "Peer cohort networking",
  "Executive presentation coaching",
  "Post-program alumni access",
];

export default function GroupClasses() {
  return (
    <SiteLayout>
      <section className="px-8 pb-24 pt-24 lg:pt-48">
        <div className="mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.2em] text-teal-950">
              Strategic Mastery
            </p>
            <h1 className="font-serif text-5xl leading-none text-ink md:text-6xl lg:text-[72px] lg:leading-[72px]">
              Business Analysis Group Training
            </h1>
            <p className="max-w-xl text-xl leading-8 text-muted">
              Transform raw data into strategic foresight. Join a cohort of
              high-performing professionals in a structured environment designed
              to refine your analytical synthesis and leadership capabilities.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button to="/book">Join a Class</Button>
              <Button variant="outline" to="/book">
                View Schedule
              </Button>
            </div>
          </div>
          <div className="relative lg:col-span-5">
            <div className="overflow-hidden rounded-lg shadow-2xl">
              <img
                src={groupHero}
                alt="Analyst reviewing data visualizations"
                className="aspect-[479/598] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 max-w-xs rounded bg-white p-8 shadow-xl sm:-left-6">
              <p className="text-sm uppercase tracking-[0.14em] text-teal-950">
                Next Cohort
              </p>
              <p className="mt-2 font-serif text-lg italic text-ink">
                October 15, 2024
              </p>
              <p className="mt-2 text-sm leading-5 text-muted">
                Limited to 12 participants for maximum engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-panel px-8 py-24">
        <div className="mx-auto max-w-[1280px] space-y-16">
          <div>
            <h2 className="font-serif text-4xl text-ink">Who it&apos;s for</h2>
            <div className="mt-4 h-1 w-24 bg-teal-900" />
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {audiences.map((item) => (
              <article key={item.title} className="rounded bg-white p-10">
                <img src={item.icon} alt="" className="size-7" />
                <h3 className="mt-6 font-serif text-2xl text-ink">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-24">
        <div className="mx-auto grid max-w-[1280px] gap-16 lg:grid-cols-2">
          <div className="space-y-10">
            <div>
              <h2 className="font-serif text-4xl text-ink">
                What you&apos;ll learn
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Our curriculum is designed to move beyond theory. We focus on
                the precision required to deliver insights to the C-Suite.
              </p>
            </div>
            <ul className="space-y-10">
              {learnings.map((item) => (
                <li key={item.title} className="flex gap-6">
                  <div className="flex size-12 shrink-0 items-center justify-center bg-panel">
                    <img src={item.icon} alt="" className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-xl text-ink">{item.title}</h4>
                    <p className="mt-2 text-base leading-6 text-muted">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src={groupHands}
              alt="Charts and analytics"
              className="h-48 w-full rounded object-cover"
            />
            <div className="flex flex-col justify-center rounded bg-teal-950 p-8 text-mint">
              <p className="font-serif text-3xl">94%</p>
              <p className="mt-2 text-sm uppercase tracking-[0.14em]">
                Placement Rate
              </p>
            </div>
            <blockquote className="rounded border border-line/40 bg-white p-6 text-base italic leading-6 text-ink">
              &ldquo;The precision of this course completely changed how I
              present findings to our board.&rdquo;
              <footer className="mt-4 not-italic text-sm text-muted">
                — Senior Analyst, Fintech
              </footer>
            </blockquote>
            <img
              src={groupWorkspace}
              alt="Workspace with laptop and notebook"
              className="h-full min-h-48 w-full rounded object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-panel px-8 py-24">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="font-serif text-4xl text-ink">Format &amp; Duration</h2>
            {formats.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-5 rounded bg-white p-6"
              >
                <img src={item.icon} alt="" className="mt-1 size-6" />
                <div>
                  <h4 className="text-lg text-ink">{item.title}</h4>
                  <p className="mt-1 text-base text-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-between rounded-lg bg-gradient-to-br from-ink to-teal-950 p-10 text-white">
            <div>
              <h3 className="font-serif text-3xl">Program Benefits</h3>
              <ul className="mt-8 space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <img src={iconCheckTeal} alt="" className="size-5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button variant="white" to="/book" className="mt-10 w-full">
              Join a Class
            </Button>
          </div>
        </div>
      </section>

      <section className="px-8 py-24">
        <div className="mx-auto max-w-[1280px] space-y-12 text-center">
          <div>
            <h2 className="font-serif text-4xl text-ink md:text-5xl">
              Invest in Your Professional Clarity
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
              Choose the enrollment path that fits your timeline.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded bg-panel p-12 text-left">
              <p className="text-sm uppercase tracking-[0.14em] text-muted">
                Standard Tuition
              </p>
              <p className="mt-4 font-serif text-5xl text-ink">$2,450</p>
              <p className="mt-4 text-muted">
                Flexible payment plans available upon request.
              </p>
            </div>
            <div className="rounded bg-teal-950 p-12 text-left text-white">
              <p className="text-sm uppercase tracking-[0.14em] text-mint">
                Early Bird
              </p>
              <p className="mt-4 font-serif text-5xl">$1,950</p>
              <p className="mt-4 text-mint">
                Available until September 1, 2024.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
