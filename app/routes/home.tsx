import type { Route } from "./+types/home";
import { SiteLayout } from "../components/SiteLayout";
import { Button } from "../components/Button";
import {
  aboutPortrait,
  heroPortrait,
  iconBriefcase,
  iconCheckCircle,
  iconSmile,
  iconTrendingUp,
} from "../assets/brand";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Seun Edema | Business Analysis made practical" },
    {
      name: "description",
      content:
        "Practical Business Analysis skills training and consultancy with Seun Edema.",
    },
  ];
}

const skills = [
  {
    title: "Practical",
    description: "Learn skills that can be applied to real workplace tasks.",
    icon: iconCheckCircle,
  },
  {
    title: "Beginner-Friendly",
    description:
      "Start with the foundations without needing advanced technical knowledge.",
    icon: iconSmile,
  },
  {
    title: "Structured",
    description: "Follow a clear four-week learning journey.",
    icon: iconTrendingUp,
  },
  {
    title: "Career-Focused",
    description:
      "Develop practical skills that support your professional growth.",
    icon: iconBriefcase,
  },
];

export default function Home() {
  return (
    <SiteLayout>
      <section className="flex flex-col items-center gap-12 px-6 py-16 lg:flex-row lg:gap-20 lg:px-20 lg:py-20">
        <div className="flex flex-1 flex-col gap-8">
          <div className="space-y-4">
            <h1 className="font-serif text-5xl font-black leading-[1.1] text-navy-deep md:text-6xl lg:text-[64px]">
              Business Analysis{" "}
              <span className="text-navy">made practical.</span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-ink">
              I&apos;m Seun Edema, a Business Analyst with 5+ years of
              professional experience. I help aspiring and early-career
              professionals build practical Business Analysis skills, and I help
              businesses solve problems through analysis, reporting and process
              improvement.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button to="/analyst-launchpad">Explore Analyst Launchpad</Button>
            <Button variant="secondary" to="/consultancy">
              Work With Me
            </Button>
          </div>
        </div>
        <div className="w-full max-w-[440px] shrink-0 overflow-hidden rounded-[20px] bg-soft lg:h-[500px]">
          <img
            src={heroPortrait}
            alt="Seun Edema"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-soft px-6 py-20 lg:px-20 lg:py-[100px]">
        <div className="mx-auto mb-14 max-w-2xl space-y-4 text-center">
          <p className="text-[13px] font-bold uppercase text-navy">
            Partnership
          </p>
          <h2 className="font-serif text-4xl font-bold leading-tight text-navy-deep">
            Two ways we can work together
          </h2>
          <p className="text-lg leading-relaxed text-ink">
            Whether you&apos;re starting your career journey or leading a
            business that needs operational clarity, I provide practical
            pathways to progress.
          </p>
        </div>
        <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-2">
          <article className="flex flex-col justify-between rounded-2xl border border-line bg-white p-10 shadow-[0_4px_12px_rgba(10,10,11,0.06)] lg:p-12">
            <div className="space-y-6">
              <p className="text-[13px] font-bold uppercase text-navy">
                For Aspiring Analysts
              </p>
              <h3 className="font-serif text-3xl font-bold text-navy-deep">
                Analyst Launchpad
              </h3>
              <p className="text-base leading-relaxed text-ink">
                A four-week beginner-friendly programme designed to help you
                build practical workplace skills in Excel, Word and PowerPoint.
                Develop the technical foundations that make you hireable.
              </p>
            </div>
            <div className="mt-10 space-y-5">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-4xl font-black text-navy">
                  £149
                </span>
                <span className="text-sm text-ink/70">one-time payment</span>
              </div>
              <Button to="/analyst-launchpad" className="w-full">
                Enrol Now
              </Button>
            </div>
          </article>

          <article className="flex flex-col justify-between rounded-2xl border border-line bg-white p-10 shadow-[0_4px_12px_rgba(10,10,11,0.06)] lg:p-12">
            <div className="space-y-6">
              <p className="text-[13px] font-bold uppercase text-navy">
                For Businesses
              </p>
              <h3 className="font-serif text-3xl font-bold text-navy-deep">
                Business Analysis Consultancy
              </h3>
              <p className="text-base leading-relaxed text-ink">
                Practical support with business analysis, reporting, requirements
                gathering, process improvement and solving pressing business
                problems. Get clear roadmaps to scale efficiency.
              </p>
            </div>
            <div className="mt-10 space-y-5">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-4xl font-black text-navy-deep">
                  Bespoke
                </span>
                <span className="text-sm text-ink/70">tailored engagement</span>
              </div>
              <Button variant="secondary" to="/consultancy" className="w-full">
                Enquire Now
              </Button>
            </div>
          </article>
        </div>
      </section>

      <section className="flex flex-col items-center gap-12 px-6 py-20 lg:flex-row lg:gap-20 lg:px-20 lg:py-[100px]">
        <div className="h-[420px] w-full max-w-[460px] shrink-0 overflow-hidden rounded-[20px] bg-soft lg:h-[520px]">
          <img
            src={aboutPortrait}
            alt="Portrait of Seun"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col gap-8">
          <div className="space-y-4">
            <p className="text-[13px] font-bold uppercase text-navy">
              Meet the Instructor
            </p>
            <h2 className="font-serif text-4xl font-bold text-navy-deep">
              Meet Seun
            </h2>
            <p className="text-base leading-relaxed text-ink">
              I&apos;m Seun Edema, a Business Analyst with over five years of
              professional experience. My work combines business analysis,
              problem-solving, reporting, data and clear communication. I created
              Analyst Launchpad to help beginners develop practical workplace
              skills and approach Business Analysis with greater confidence. I
              also provide tailored consultancy support to businesses that need
              help understanding problems, improving processes and making better
              decisions.
            </p>
          </div>
          <Button variant="secondary" to="/about" className="self-start">
            About Seun
          </Button>
        </div>
      </section>

      <section className="bg-soft px-6 py-20 lg:px-20 lg:py-[100px]">
        <div className="mx-auto mb-16 max-w-2xl space-y-4 text-center">
          <p className="text-[13px] font-bold uppercase text-navy">
            Curriculum Design
          </p>
          <h2 className="font-serif text-4xl font-bold text-navy-deep">
            Build skills you can use at work
          </h2>
          <p className="text-lg leading-relaxed text-ink">
            Analyst Launchpad strips away the academic jargon and focuses
            strictly on high-impact workplace execution.
          </p>
        </div>
        <div className="mx-auto grid max-w-[1440px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <article
              key={skill.title}
              className="flex flex-col gap-3 rounded-xl border border-line bg-white p-6"
            >
              <div className="flex h-12 items-center justify-center rounded-3xl bg-soft">
                <img
                  src={skill.icon}
                  alt=""
                  className="size-6"
                  width={24}
                  height={24}
                />
              </div>
              <h3 className="font-serif text-xl font-bold text-navy-deep">
                {skill.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-ink">
                {skill.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center gap-8 bg-navy px-6 py-20 text-center text-white lg:px-20">
        <h2 className="max-w-3xl font-serif text-4xl font-bold md:text-[44px]">
          Need Business Analysis support?
        </h2>
        <p className="max-w-[700px] text-lg leading-relaxed text-white/90">
          I work with businesses that need practical support with analysis,
          reporting, requirements gathering, process improvement and resolving
          critical business challenges. Let&apos;s align your operations for
          success.
        </p>
        <Button variant="white" to="/consultancy">
          Discuss Your Business Needs
        </Button>
      </section>

      <section className="flex flex-col items-center gap-10 px-6 py-[100px] text-center">
        <div className="space-y-4">
          <h2 className="font-serif text-4xl font-black text-navy-deep md:text-5xl">
            Ready to get started?
          </h2>
          <p className="mx-auto max-w-xl text-lg text-ink">
            Build your Business Analysis skills or get professional support for
            your business.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          <Button to="/analyst-launchpad">Join Analyst Launchpad</Button>
          <Button variant="secondary" to="/consultancy">
            Enquire About Consultancy
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
