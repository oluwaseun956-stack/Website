import { useNavigate } from "react-router";
import type { FormEvent } from "react";
import type { Route } from "./+types/book";
import { SiteLayout } from "../components/SiteLayout";
import {
  contactDesk,
  iconClock,
  iconInfo,
  iconLock,
} from "../assets";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Book | The Executive Editorial" },
    {
      name: "description",
      content: "Secure your strategic advantage — inquiry initiation.",
    },
  ];
}

export default function Book() {
  const navigate = useNavigate();

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate("/thank-you");
  }

  return (
    <SiteLayout>
      <section className="px-8 pb-24 pt-28">
        <div className="mx-auto grid max-w-[1216px] gap-16 lg:grid-cols-12">
          <div className="space-y-12 lg:col-span-5">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.2em] text-teal-950">
                Inquiry Initiation
              </p>
              <h1 className="font-serif text-5xl leading-none text-ink md:text-6xl">
                Secure your{" "}
                <span className="italic">strategic advantage.</span>
              </h1>
              <p className="max-w-md text-lg leading-relaxed text-muted">
                Precision in synthesis begins with understanding your unique
                trajectory. Complete the brief below to start our engagement
                process.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex h-12 w-8 shrink-0 items-center justify-center rounded-md bg-[#e3e8f9]">
                  <img src={iconClock} alt="" className="size-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-ink">
                    Response Protocol
                  </h3>
                  <p className="mt-1 text-sm leading-5 text-muted">
                    Our editorial board reviews inquiries daily. Expect a
                    detailed response within 24 business hours.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex h-12 w-8 shrink-0 items-center justify-center rounded-md bg-[#e3e8f9]">
                  <img src={iconLock} alt="" className="size-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-ink">
                    Privacy Commitment
                  </h3>
                  <p className="mt-1 text-sm leading-5 text-muted">
                    Your data and business specifics are handled with
                    executive-level confidentiality and encryption.
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded bg-panel">
              <img
                src={contactDesk}
                alt="Notebook and pen on a desk"
                className="aspect-[4/3] w-full object-cover opacity-90 grayscale"
              />
            </div>
          </div>

          <div className="space-y-12 lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="rounded-lg bg-white px-8 py-12 shadow-[0_20px_25px_-5px_rgba(22,28,39,0.05)] sm:px-12"
            >
              <div className="space-y-8">
                <div className="grid gap-8 sm:grid-cols-2">
                  <Field
                    label="Full Name"
                    name="name"
                    placeholder="Alexander Sterling"
                    required
                  />
                  <Field
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="a.sterling@executive.com"
                    required
                  />
                  <Field
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    required
                  />
                  <Field
                    label="Business Name (Optional)"
                    name="business"
                    placeholder="Sterling Global Partners"
                  />
                </div>

                <label className="block space-y-2">
                  <span className="text-xs uppercase tracking-[0.12em] text-muted">
                    Service Interested In
                  </span>
                  <select
                    name="service"
                    required
                    defaultValue=""
                    className="w-full border-b border-line bg-transparent py-3.5 text-base text-ink outline-none"
                  >
                    <option value="" disabled>
                      Select a stream
                    </option>
                    <option value="group">Group Classes</option>
                    <option value="coaching">1:1 Coaching</option>
                    <option value="consulting">Consulting</option>
                  </select>
                </label>

                <label className="block space-y-2">
                  <span className="text-xs uppercase tracking-[0.12em] text-muted">
                    Project Brief / Message
                  </span>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Outline your current challenges or goals..."
                    className="w-full resize-y border-b border-line bg-transparent py-3 text-base text-ink outline-none placeholder:text-[#d4daea]"
                  />
                </label>

                <div className="flex items-center gap-3 rounded-md bg-panel p-4">
                  <img src={iconInfo} alt="" className="size-3 shrink-0" />
                  <p className="text-xs leading-relaxed text-muted">
                    All fields marked as required must be validated before
                    submission to ensure executive clarity.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-gradient-to-br from-teal-950 to-teal-900 py-5 text-sm uppercase tracking-[0.14em] text-white transition hover:opacity-95"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>

            <aside className="border-l-4 border-teal-900 bg-[#e3e8f9] px-8 py-8">
              <p className="font-serif text-2xl italic leading-snug text-ink">
                &ldquo;The quality of your consultation outcome is directly
                proportional to the clarity of your initial brief.&rdquo;
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.12em] text-teal-950">
                — Strategic Principle #01
              </p>
            </aside>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block space-y-2">
      <span className="text-xs uppercase tracking-[0.12em] text-muted">
        {label}
      </span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full border-b border-line bg-transparent py-3.5 text-base text-ink outline-none placeholder:text-[#d4daea]"
      />
    </label>
  );
}
