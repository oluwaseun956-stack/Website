import { useState } from "react";
import type { Route } from "./+types/analyst-launchpad";
import { SiteLayout } from "../components/SiteLayout";
import { Button } from "../components/Button";
import {
  iconAward,
  iconBuilding,
  iconCheck,
  iconChevronDown,
  iconCircleHelp,
  iconCreditCard,
  iconUpload,
  instructorPortrait,
  launchpadHero,
} from "../assets/brand";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Analyst Launchpad | Seun Edema" },
    {
      name: "description",
      content:
        "A four-week beginner-friendly programme to build practical Business Analysis skills in Excel, Word and PowerPoint.",
    },
  ];
}

const audience = [
  "Aspiring Business Analysts looking for a solid skills foundation.",
  "Graduates entering the workplace wanting to stand out.",
  "Early-career professionals looking to accelerate their growth.",
  "People transitioning into Business Analysis from other fields.",
  "Professionals who want stronger Excel reporting and analytical skills.",
  "Anyone who wants to become more confident creating professional documents.",
];

const weeks = [
  {
    num: "01",
    label: "Week 1",
    title: "Excel Foundations",
    description:
      "Build confidence with Excel and develop the foundations needed to work with information effectively. Learn core data structures, basic manipulation, and navigating workbook hierarchies cleanly.",
  },
  {
    num: "02",
    label: "Week 2",
    title: "Excel for Business Analysis",
    description:
      "Learn practical ways to use Excel to organise, analyse and present business information. Understand data reporting practices, lookup functions, and key analytical formulas used daily.",
  },
  {
    num: "03",
    label: "Week 3",
    title: "Microsoft Word",
    description:
      "Learn how to create clear, professional business documents and use Word effectively in a workplace environment. Master structural layouts, business reports, and proposal styling.",
  },
  {
    num: "04",
    label: "Week 4",
    title: "PowerPoint",
    description:
      "Learn how to create professional presentations and communicate information clearly and effectively. Present recommendations with confidence and design slide decks that speak for themselves.",
  },
];

const syllabus = [
  {
    title: "Excel Topics",
    items: [
      "Organising business information",
      "Working efficiently with spreadsheets",
      "Essential formulas and functions",
      "Practical data analysis processes",
      "Formatting reports professionally",
      "Presenting clean information to stakeholders",
      "Real workplace applications & routines",
    ],
  },
  {
    title: "Word Topics",
    items: [
      "Professional business document creation",
      "Advanced document formatting tricks",
      "Structuring long business documents",
      "Designing tables and precise layouts",
      "Professional presentations & proposals",
      "Practical workplace standard routines",
    ],
  },
  {
    title: "PowerPoint Topics",
    items: [
      "Creating high-end presentations",
      "Logical slide structure & narrative flow",
      "Presenting complex statistics clearly",
      "Visual communication principles",
      "Professional styling & corporate formatting",
      "Practical deck builds for stakeholders",
    ],
  },
];

const outcomes = [
  {
    title: "Greater confidence with Excel",
    description:
      "Leave behind the anxiety of empty cells and formula errors. Approach data structures with immediate clarity and structured processes.",
  },
  {
    title: "Stronger professional document skills",
    description:
      "Acquire standard methods to build documents that represent high-quality execution. Structure reports that look consistent and clean.",
  },
  {
    title: "Better presentation skills",
    description:
      "Structure narratives that carry authority. Create clean slides that direct the viewer’s eye immediately to key business metrics.",
  },
  {
    title: "A stronger practical foundation for Business Analysis",
    description:
      "Combine technical tools mastery with core analytical logic. Start your career path or scale operations with secure professional foundations.",
  },
];

const faqs = [
  {
    q: "Do I need Business Analysis experience?",
    a: "No. Analyst Launchpad is designed specifically for beginners, graduates, and professionals who are early in their Business Analysis journey or transitioning from other sectors.",
  },
  {
    q: "Do I need advanced Excel skills?",
    a: "No. The course begins with core, foundational methods and progressively structures your reporting, data analysis, and formula skills step-by-step.",
  },
  {
    q: "How long is the course?",
    a: "The intensive learning programme runs for four weeks, with specific milestones for each of the core toolsets.",
  },
  {
    q: "What software is covered?",
    a: "Microsoft Excel, Microsoft Word, and Microsoft PowerPoint—the standard corporate toolkit.",
  },
  {
    q: "How much does it cost?",
    a: "The full course investment, including resources and review materials, is £149.",
  },
  {
    q: "How can I pay?",
    a: "You can pay instantly online using standard card processing, or make a bank transfer and upload your receipt in the payment proof portal for quick manual clearance.",
  },
  {
    q: "What happens after I enrol?",
    a: "Once transaction clearance is verified, you will immediately receive onboarding material and full access credentials to your curriculum schedule.",
  },
  {
    q: "Is the course suitable for complete beginners?",
    a: "Yes, absolutely. The design strips out high-level programming and focuses on tools implementation that you will encounter daily in real jobs.",
  },
];

const bankDetails = [
  { label: "Account Name", value: "SEUN EDEMA CONSULTING" },
  { label: "Bank Name", value: "METROPOLITAN UK" },
  { label: "Sort Code", value: "12-34-56" },
  { label: "Account Number", value: "98765432" },
  { label: "Payment Reference", value: "LAUNCHPAD-YOURNAME" },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="rounded-lg bg-mist p-6">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 text-left"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        <span className="font-serif text-lg font-bold text-navy-deep">{q}</span>
        <img
          src={iconChevronDown}
          alt=""
          className={`size-4 shrink-0 transition ${open ? "rotate-180" : ""}`}
          width={16}
          height={16}
        />
      </button>
      {open ? (
        <p className="mt-3 text-[15px] leading-relaxed text-ink">{a}</p>
      ) : null}
    </div>
  );
}

export default function AnalystLaunchpad() {
  return (
    <SiteLayout>
      <section className="flex flex-col items-center gap-12 px-6 py-16 lg:flex-row lg:gap-16 lg:px-20 lg:py-20">
        <div className="flex flex-1 flex-col gap-8">
          <div className="space-y-4">
            <span className="inline-flex rounded-[20px] bg-soft px-3.5 py-1.5 text-[13px] font-bold uppercase text-navy">
              Analyst Launchpad
            </span>
            <h1 className="font-serif text-4xl font-black leading-[1.1] text-navy-deep md:text-5xl lg:text-[56px]">
              Build practical Business Analysis skills in four weeks.
            </h1>
            <p className="text-lg leading-relaxed text-ink">
              A beginner-friendly four-week programme designed to help aspiring
              and early-career professionals build confidence with Excel, Word
              and PowerPoint. Develop high-impact workplace skills that get you
              noticed.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-8">
            <div>
              <p className="text-sm text-ink/60">Investment</p>
              <p className="font-serif text-4xl font-black text-navy">£149</p>
            </div>
            <Button href="#enrol" className="px-9 text-base">
              Enrol Now
            </Button>
          </div>
        </div>
        <div className="h-[320px] w-full max-w-[520px] overflow-hidden rounded-3xl border border-line bg-soft lg:h-[440px]">
          <img
            src={launchpadHero}
            alt="Workspace with laptop and analytics dashboard"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-mist px-6 py-[100px] lg:px-20">
        <div className="max-w-[800px] space-y-6">
          <h2 className="font-serif text-4xl font-bold text-navy-deep">
            A practical foundation for aspiring Business Analysts
          </h2>
          <p className="text-lg leading-relaxed text-ink">
            Analyst Launchpad gives you a structured introduction to three
            essential workplace tools and shows you how to use them confidently
            in a professional environment. By stripping away academic jargon and
            unnecessary complexity, we focus purely on high-impact execution. The
            programme is suitable for beginners, graduates, early-career
            professionals and anyone looking to strengthen their workplace
            toolkit.
          </p>
        </div>
      </section>

      <section className="px-6 py-[100px] lg:px-20">
        <div className="mb-14 space-y-4">
          <p className="text-[13px] font-bold uppercase text-navy">
            Target Audience
          </p>
          <h2 className="font-serif text-4xl font-bold text-navy-deep">
            Who is Analyst Launchpad for?
          </h2>
        </div>
        <div className="mb-10 grid gap-4 md:grid-cols-2">
          {audience.map((item) => (
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
        <div className="flex items-center gap-4 rounded-xl bg-soft p-6">
          <img
            src={iconCircleHelp}
            alt=""
            className="size-6 shrink-0"
            width={24}
            height={24}
          />
          <p className="text-base font-semibold text-navy-deep">
            Please note: You do not need previous Business Analysis experience
            to join this programme. We start from ground zero.
          </p>
        </div>
      </section>

      <section className="bg-mist px-6 py-[120px] lg:px-20">
        <div className="mb-16 space-y-4">
          <p className="text-[13px] font-bold uppercase text-navy">
            Curriculum Breakdown
          </p>
          <h2 className="font-serif text-4xl font-bold text-navy-deep">
            Four-Week Course Structure
          </h2>
        </div>
        <div className="space-y-0">
          {weeks.map((week, index) => (
            <div key={week.num} className="flex gap-8 lg:gap-12">
              <div className="flex w-12 flex-col items-center">
                <div className="flex size-12 items-center justify-center rounded-3xl bg-navy text-sm font-bold text-white">
                  {week.num}
                </div>
                {index < weeks.length - 1 ? (
                  <div className="h-[120px] w-0.5 bg-navy/30" />
                ) : null}
              </div>
              <div
                className={
                  index < weeks.length - 1 ? "space-y-2 pb-12" : "space-y-2"
                }
              >
                <p className="text-sm font-bold uppercase text-navy">
                  {week.label}
                </p>
                <h3 className="font-serif text-2xl font-bold text-navy-deep">
                  {week.title}
                </h3>
                <p className="max-w-3xl text-base leading-relaxed text-ink">
                  {week.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-[100px] lg:px-20">
        <div className="mb-16 space-y-4 text-center">
          <p className="text-[13px] font-bold uppercase text-navy">
            Module Details
          </p>
          <h2 className="font-serif text-4xl font-bold text-navy-deep">
            What you will learn
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {syllabus.map((module) => (
            <article
              key={module.title}
              className="flex flex-col gap-6 rounded-2xl border border-line bg-soft p-10"
            >
              <p className="text-sm font-bold uppercase text-navy">
                {module.title}
              </p>
              <ul className="space-y-4">
                {module.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="size-1.5 shrink-0 rounded-[3px] bg-navy" />
                    <span className="text-[15px] leading-snug text-ink">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-soft px-6 py-[120px] lg:px-20">
        <div className="mb-14 space-y-4">
          <p className="text-[13px] font-bold uppercase text-navy">
            Your Progression
          </p>
          <h2 className="font-serif text-4xl font-bold text-navy-deep">
            What you&apos;ll leave with
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {outcomes.map((outcome) => (
            <article
              key={outcome.title}
              className="flex flex-col gap-4 rounded-xl border border-line bg-white p-8 shadow-[0_4px_12px_rgba(10,10,11,0.06)]"
            >
              <div className="flex items-center gap-4">
                <div className="flex size-10 items-center justify-center rounded-lg bg-soft">
                  <img
                    src={iconAward}
                    alt=""
                    className="size-5"
                    width={20}
                    height={20}
                  />
                </div>
                <h3 className="font-serif text-xl font-bold text-navy-deep">
                  {outcome.title}
                </h3>
              </div>
              <p className="text-[15px] leading-relaxed text-ink">
                {outcome.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center gap-10 px-6 py-[100px] lg:flex-row lg:gap-20 lg:px-20">
        <div className="h-[420px] w-full max-w-[460px] shrink-0 overflow-hidden rounded-[20px] bg-soft lg:h-[520px]">
          <img
            src={instructorPortrait}
            alt="Seun Edema"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex-1 space-y-4">
          <p className="text-[13px] font-bold uppercase text-navy">
            Meet the Instructor
          </p>
          <h2 className="font-serif text-4xl font-bold text-navy-deep">
            Learn from an experienced Business Analyst
          </h2>
          <p className="text-base leading-relaxed text-ink">
            Analyst Launchpad is designed and taught by Seun Edema. With over
            five years of active professional experience executing complex
            requirements gathering, reporting, and process improvement across
            industries, she packages precisely what businesses actually look for
            when hiring.
          </p>
          <p className="text-base leading-relaxed text-ink">
            &ldquo;I created this course because I saw too many aspiring
            analysts get bogged down in theoretical textbooks while lacking
            basic mastery of high-impact office platforms. We bridge that gap in
            four weeks.&rdquo;
          </p>
        </div>
      </section>

      <section
        id="enrol"
        className="flex flex-col items-center gap-10 bg-navy px-6 py-24 text-center text-white lg:px-[120px]"
      >
        <div className="space-y-4">
          <p className="text-[13px] font-bold uppercase text-white/80">
            Immediate Access
          </p>
          <h2 className="font-serif text-4xl font-black md:text-5xl">
            Start building your foundation today
          </h2>
        </div>
        <div className="flex w-full max-w-[800px] flex-col items-center justify-between gap-8 rounded-xl bg-navy-deep p-8 lg:flex-row lg:text-left">
          <div className="space-y-2">
            <p className="text-lg font-bold">Analyst Launchpad Cohort</p>
            <p className="text-sm text-white/70">
              4 Weeks Intensive • Excel + Word + PowerPoint • Beginner-Friendly
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <p className="font-serif text-5xl font-black">£149</p>
            <Button variant="white" href="#payment">
              Enrol Now
            </Button>
          </div>
        </div>
      </section>

      <section id="payment" className="bg-mist px-6 py-[100px] lg:px-20">
        <div className="mb-16 space-y-4 text-center">
          <p className="text-[13px] font-bold uppercase text-navy">
            Flexible Options
          </p>
          <h2 className="font-serif text-4xl font-bold text-navy-deep">
            Two secure ways to pay
          </h2>
        </div>

        <div className="mb-10 grid gap-10 lg:grid-cols-2">
          <article className="flex flex-col gap-8 rounded-2xl border border-line bg-white p-12 shadow-[0_4px_12px_rgba(10,10,11,0.06)]">
            <div className="space-y-4">
              <div className="flex size-12 items-center justify-center rounded-3xl bg-soft">
                <img
                  src={iconCreditCard}
                  alt=""
                  className="size-6"
                  width={24}
                  height={24}
                />
              </div>
              <h3 className="font-serif text-[28px] font-bold text-navy-deep">
                Pay securely online
              </h3>
              <p className="text-[15px] leading-relaxed text-ink">
                Use our secure online payment system for international card
                processing. Gain immediate enrolment and system credentials upon
                successful clearance.
              </p>
            </div>
            <Button className="w-full text-base">Pay £149 Online</Button>
          </article>

          <article className="flex flex-col gap-8 rounded-2xl border border-line bg-white p-12 shadow-[0_4px_12px_rgba(10,10,11,0.06)]">
            <div className="space-y-4">
              <div className="flex size-12 items-center justify-center rounded-3xl bg-soft">
                <img
                  src={iconBuilding}
                  alt=""
                  className="size-6"
                  width={24}
                  height={24}
                />
              </div>
              <h3 className="font-serif text-[28px] font-bold text-navy-deep">
                Pay by bank transfer
              </h3>
              <p className="text-[15px] leading-relaxed text-ink">
                Prefer direct transfer? Use the bank credentials below to make a
                payment, and fill out our proof-of-payment form to get verified.
              </p>
            </div>
            <div className="space-y-3 rounded-lg bg-mist p-6 text-[13px]">
              {bankDetails.map((row) => (
                <div
                  key={row.label}
                  className="flex items-start justify-between gap-4"
                >
                  <span className="text-ink/60">{row.label}</span>
                  <span className="text-right font-bold text-navy-deep">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </article>
        </div>

        <form
          className="space-y-8 rounded-2xl border border-line bg-white p-8 lg:p-12"
          onSubmit={(event) => event.preventDefault()}
        >
          <h3 className="font-serif text-2xl font-bold text-navy-deep">
            Submit Payment Verification
          </h3>
          <div className="space-y-4">
            {[
              { label: "Full Name", placeholder: "Jane Doe", type: "text" },
              {
                label: "Email Address",
                placeholder: "jane@example.com",
                type: "email",
              },
              {
                label: "Phone Number",
                placeholder: "+44 7123 456789",
                type: "tel",
              },
              {
                label: "Payment Reference Used",
                placeholder: "LAUNCHPAD-JANE-DOE",
                type: "text",
              },
              {
                label: "Amount Paid (£)",
                placeholder: "£149.00",
                type: "text",
              },
            ].map((field) => (
              <label key={field.label} className="block space-y-2">
                <span className="text-sm font-semibold text-ink">
                  {field.label}
                </span>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full rounded-[6px] border border-line bg-mist p-4 text-sm outline-none placeholder:text-ink/40 focus:border-navy"
                />
              </label>
            ))}
            <label className="block space-y-2">
              <span className="text-sm font-semibold text-ink">
                Upload Payment Receipt (PDF, JPG, PNG)
              </span>
              <div className="flex cursor-pointer items-center gap-2 rounded-[6px] border border-dashed border-navy bg-mist p-4">
                <img
                  src={iconUpload}
                  alt=""
                  className="size-[18px]"
                  width={18}
                  height={18}
                />
                <span className="text-sm font-semibold text-navy">
                  Select file to upload
                </span>
                <input type="file" className="sr-only" accept=".pdf,.jpg,.jpeg,.png" />
              </div>
            </label>
          </div>
          <Button type="submit" className="w-full text-base">
            Submit Payment Proof
          </Button>
        </form>
      </section>

      <section className="px-6 py-[100px] lg:px-20">
        <div className="mb-14 space-y-4 text-center">
          <p className="text-[13px] font-bold uppercase text-navy">FAQ</p>
          <h2 className="font-serif text-4xl font-bold text-navy-deep">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mx-auto flex max-w-[960px] flex-col gap-6">
          {faqs.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
