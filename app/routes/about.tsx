import type { Route } from "./+types/about";
import { SiteLayout } from "../components/SiteLayout";
import { Button } from "../components/Button";
import {
  aboutHero,
  iconChartBar,
  iconGraduationCap,
} from "../assets/brand";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Seun | Seun Edema" },
    {
      name: "description",
      content:
        "Learn about Seun Edema — Business Analyst, Educator, and Consultant.",
    },
  ];
}

export default function About() {
  return (
    <SiteLayout>
      <section className="flex flex-col items-center gap-12 bg-soft px-6 py-16 lg:flex-row lg:gap-20 lg:px-20 lg:py-20">
        <div className="flex flex-1 flex-col gap-6">
          <div className="space-y-2">
            <p className="text-[13px] font-bold uppercase text-navy">
              Professional Background
            </p>
            <h1 className="font-serif text-5xl font-black leading-[1.1] text-navy-deep md:text-[64px]">
              About Seun
            </h1>
          </div>
          <p className="text-[22px] font-semibold leading-snug text-navy">
            Business Analyst. Educator. Consultant.
          </p>
          <p className="max-w-xl text-base leading-relaxed text-ink">
            Over half a decade of engineering operational clarity and guiding
            ambitious professionals toward meaningful workplace transformations.
          </p>
        </div>
        <div className="h-[420px] w-full max-w-[480px] shrink-0 overflow-hidden rounded-[20px] border-2 border-navy bg-white lg:h-[500px]">
          <img
            src={aboutHero}
            alt="Portrait of Seun Edema"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="flex justify-center px-6 py-[100px]">
        <div className="w-full max-w-[800px] space-y-5">
          <h2 className="font-serif text-4xl font-bold text-navy-deep">
            Hi, I&apos;m Seun.
          </h2>
          <p className="text-lg leading-relaxed text-ink">
            I&apos;m a Business Analyst with over five years of professional
            experience working with business information, reporting,
            problem-solving, requirements gathering and process improvement. I
            enjoy making complex information easier to understand and helping
            people turn problems into practical next steps.
          </p>
        </div>
      </section>

      <section className="px-6 pb-[100px] lg:px-20">
        <div className="flex flex-col items-center gap-12 rounded-[20px] bg-soft p-10 lg:flex-row lg:gap-16 lg:p-14">
          <div className="flex-1 space-y-6">
            <h2 className="font-serif text-3xl font-bold text-navy-deep">
              Practical skills. Clear thinking. Better outcomes.
            </h2>
            <p className="text-base leading-relaxed text-ink">
              My approach to Business Analysis is grounded in understanding the
              problem, asking the right questions, working with information
              effectively and communicating recommendations clearly. That
              approach influences both my consultancy work and the way I teach
              Analyst Launchpad.
            </p>
          </div>
          <div className="flex h-[200px] w-full max-w-[320px] flex-col items-center justify-center gap-4 rounded-xl border border-navy bg-white p-6">
            <img
              src={iconChartBar}
              alt=""
              className="size-12"
              width={48}
              height={48}
            />
            <p className="text-sm font-bold uppercase text-navy-deep">
              Methodology
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center gap-12 bg-soft px-6 py-[100px] lg:flex-row lg:gap-20 lg:px-20">
        <div className="flex flex-1 flex-col gap-8">
          <div className="space-y-4">
            <h2 className="font-serif text-4xl font-bold text-navy-deep">
              Why I created Analyst Launchpad
            </h2>
            <p className="text-base leading-relaxed text-ink">
              Many people interested in Business Analysis know they need
              practical workplace skills but do not know where to start. Analyst
              Launchpad provides a structured four-week introduction to three
              essential workplace tools: Excel, Word and PowerPoint. By stripping
              away academic overwhelm, we focus on what triggers career growth.
            </p>
          </div>
          <Button to="/analyst-launchpad" className="self-start">
            Explore Analyst Launchpad
          </Button>
        </div>
        <div className="flex h-[320px] w-full max-w-[440px] flex-col items-center justify-center gap-6 rounded-2xl border border-line bg-white p-10">
          <img
            src={iconGraduationCap}
            alt=""
            className="size-14"
            width={56}
            height={56}
          />
          <p className="text-center font-serif text-xl font-bold text-navy-deep">
            Practical Learning System
          </p>
        </div>
      </section>

      <section className="flex flex-col items-center gap-10 px-6 py-[100px] text-center">
        <div className="max-w-[800px] space-y-5">
          <h2 className="font-serif text-4xl font-bold text-navy-deep">
            Working with businesses
          </h2>
          <p className="text-lg leading-relaxed text-ink">
            I provide Business Analysis consultancy for businesses and
            organisations that need practical support with analysis, reporting,
            requirements gathering, process improvement and navigating complex
            organizational challenges.
          </p>
        </div>
        <Button variant="secondary" to="/consultancy">
          Explore Consultancy
        </Button>
      </section>
    </SiteLayout>
  );
}
