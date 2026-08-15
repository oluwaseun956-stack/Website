import type { Route } from "./+types/home";
import { Link } from "react-router";
import { SiteLayout } from "../components/SiteLayout";
import { Button } from "../components/Button";
import {
  aboutPortrait,
  collageBoardroom,
  collageDashboard,
  collageMeeting,
  collageMindmap,
  ctaPattern,
  heroDesk,
  heroPattern,
  iconArrow,
  iconAward,
  iconBolt,
  iconCoaching,
  iconConsulting,
  iconEye,
  iconGroup,
  iconNetwork,
} from "../assets";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Executive Editorial" },
    {
      name: "description",
      content:
        "Transforming data into strategic business growth through expert business analysis and coaching.",
    },
  ];
}

const services = [
  {
    title: "Group Classes",
    description:
      "Master the core competencies of business analysis in a collaborative environment. From requirement gathering to data visualization.",
    icon: iconGroup,
    to: "/group-classes",
  },
  {
    title: "1:1 Coaching",
    description:
      "Accelerate your career or business trajectory with personalized strategic mentorship designed for your unique challenges.",
    icon: iconCoaching,
    to: "/coaching",
  },
  {
    title: "Business Consulting",
    description:
      "Deep-dive organizational analysis to optimize systems, reduce waste, and build robust frameworks for sustainable scaling.",
    icon: iconConsulting,
    to: "/consulting",
  },
];

const values = [
  {
    title: "Improved Efficiency",
    description: "Eliminate 30% of process overhead within the first quarter.",
    icon: iconBolt,
  },
  {
    title: "Clearer Insights",
    description:
      "Translate complex data sets into board-ready visual narratives.",
    icon: iconEye,
  },
  {
    title: "Better Decision-Making",
    description:
      "Reduce decision fatigue through systematic framework application.",
    icon: iconNetwork,
  },
];

export default function Home() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative flex min-h-[870px] items-center overflow-hidden bg-gradient-to-br from-teal-950 to-teal-900">
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${heroPattern})`,
            backgroundSize: "67px 100px",
          }}
        />
        <div className="relative mx-auto flex w-full max-w-[1280px] flex-col items-center gap-12 px-8 py-24 lg:flex-row lg:gap-8">
          <div className="flex flex-1 flex-col gap-8">
            <h1 className="font-serif text-5xl leading-none tracking-tight text-white md:text-6xl lg:text-[72px] lg:leading-[72px]">
              Transforming Data Into Strategic Business Growth
            </h1>
            <p className="max-w-xl text-xl leading-8 text-mint md:text-2xl">
              I help professionals and businesses streamline processes, gain
              clarity, and make smarter decisions through expert business
              analysis and coaching.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button variant="secondary" to="/book">
                Work With Me
              </Button>
              <Button variant="ghost" to="/group-classes">
                Explore Services
              </Button>
            </div>
          </div>

          <div className="relative w-full max-w-md shrink-0 lg:max-w-[478px]">
            <div className="overflow-hidden rounded-lg border-4 border-white/10 shadow-2xl">
              <img
                src={heroDesk}
                alt="Strategic workspace with notebook and pen"
                className="aspect-[470/590] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-4 max-w-[160px] rounded bg-white p-6 shadow-xl sm:-left-8">
              <p className="font-serif text-3xl text-teal-950">15+</p>
              <p className="mt-1 text-sm uppercase tracking-[0.14em] text-muted">
                Years of Executive Synthesis
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-canvas py-24 lg:py-32">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-16 px-8 lg:flex-row lg:gap-20">
          <div className="relative flex-1">
            <div className="absolute -inset-8 -z-10 rotate-[-2deg] rounded-lg bg-panel" />
            <img
              src={aboutPortrait}
              alt="Portrait of the strategist"
              className="aspect-[568/600] w-full object-cover shadow-lg grayscale"
            />
            <div className="absolute -bottom-6 -right-6 flex size-24 items-center justify-center bg-teal-900 p-4">
              <img src={iconAward} alt="" className="h-[42px] w-11" />
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.2em] text-teal-950">
              Precision in Synthesis
            </p>
            <h2 className="font-serif text-4xl leading-tight text-ink md:text-5xl">
              Expert Analysis for High-Stakes Decisions.
            </h2>
            <div className="space-y-6 py-4 text-lg leading-relaxed text-muted">
              <p>
                As a dedicated Business Analyst and Strategic Coach, my mission
                is to distill complexity into clarity. With over a decade of
                experience navigating corporate architectures, I bring a
                methodical approach to problem-solving that prioritizes results
                over rhetoric.
              </p>
              <p>
                I don&apos;t just provide data; I provide the narrative that
                drives growth. Whether I&apos;m coaching an aspiring analyst or
                consulting for a Fortune 500 firm, my focus remains on
                streamlining systems and empowering decision-makers with
                surgical precision.
              </p>
            </div>
            <blockquote className="border-l-4 border-teal-900 py-2 pl-9 font-serif text-xl italic text-ink">
              &ldquo;Clarity is the ultimate sophisticated weapon in
              business.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-panel py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] space-y-16 px-8 lg:space-y-20">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-xl space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-teal-950">
                Strategic Offerings
              </p>
              <h2 className="font-serif text-4xl leading-tight text-ink md:text-5xl lg:text-[60px] lg:leading-[60px]">
                Tailored Paths to Mastery &amp; Efficiency.
              </h2>
            </div>
            <p className="max-w-sm text-xl italic leading-7 text-muted">
              Choose the level of engagement that aligns with your current
              strategic objectives.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="flex flex-col bg-white p-10"
              >
                <div className="mb-8 flex size-14 items-center justify-center rounded-md bg-soft">
                  <img
                    src={service.icon}
                    alt=""
                    className="max-h-6 max-w-[30px]"
                  />
                </div>
                <h3 className="mb-4 font-serif text-2xl text-ink">
                  {service.title}
                </h3>
                <p className="mb-10 flex-1 text-base leading-6 text-muted">
                  {service.description}
                </p>
                <Link
                  to={service.to}
                  className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.14em] text-teal-950"
                >
                  Learn More
                  <img src={iconArrow} alt="" className="size-3" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="overflow-hidden bg-canvas px-8 pb-40 pt-24 lg:pt-32">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-12 lg:flex-row lg:gap-10">
          <div className="flex flex-1 flex-col gap-8">
            <h2 className="font-serif text-4xl leading-tight text-ink md:text-5xl">
              Measurable Value Through Synthesis.
            </h2>
            <p className="text-lg leading-7 text-muted">
              My methodology focuses on high-impact interventions that produce
              tangible shifts in organizational health and professional
              competence.
            </p>
            <div className="flex flex-col gap-4 pt-4">
              {values.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-6 rounded border-l-4 border-teal-950 bg-white py-6 pl-7 pr-6 shadow-sm"
                >
                  <img
                    src={item.icon}
                    alt=""
                    className="h-6 w-auto shrink-0"
                  />
                  <div>
                    <h4 className="text-base text-ink">{item.title}</h4>
                    <p className="mt-1 text-sm leading-5 text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex flex-1 gap-4">
            <div className="absolute -right-10 -top-10 size-64 rounded-xl bg-teal-900/5 blur-3xl" />
            <div className="flex flex-1 flex-col gap-4 pt-12">
              <img
                src={collageDashboard}
                alt="Analytics dashboard"
                className="h-[300px] w-full rounded-md object-cover shadow-lg"
              />
              <img
                src={collageBoardroom}
                alt="Boardroom discussion"
                className="h-[450px] w-full rounded-md object-cover shadow-lg"
              />
            </div>
            <div className="flex flex-1 flex-col gap-4 pb-12">
              <img
                src={collageMindmap}
                alt="Strategic mind mapping"
                className="h-[450px] w-full rounded-md object-cover shadow-lg"
              />
              <img
                src={collageMeeting}
                alt="Team collaboration"
                className="h-[300px] w-full rounded-md object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 pb-24">
        <div className="relative mx-auto flex max-w-[1216px] flex-col items-center overflow-hidden rounded-lg bg-gradient-to-br from-teal-950 to-teal-900 px-8 py-24 text-center">
          <div
            className="pointer-events-none absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url(${ctaPattern})`,
              backgroundSize: "24px 22px",
            }}
          />
          <div className="relative max-w-3xl space-y-8">
            <h2 className="font-serif text-4xl text-white md:text-5xl lg:text-[60px] lg:leading-[60px]">
              Ready to Elevate Your Business or Career?
            </h2>
            <p className="text-xl leading-7 text-mint/90">
              Let&apos;s discuss how strategic analysis and personalized
              coaching can transform your trajectory.
            </p>
            <Button variant="white" to="/book" className="text-xl">
              Book a Consultation
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
