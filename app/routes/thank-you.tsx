import { Link } from "react-router";
import type { Route } from "./+types/thank-you";
import { Footer } from "../components/Footer";
import {
  iconArrowUpRight,
  iconSeal,
  thankYouInterior,
} from "../assets";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Thank You | The Executive Editorial" },
    {
      name: "description",
      content: "Your request has been received.",
    },
  ];
}

export default function ThankYou() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-canvas">
      <div className="pointer-events-none absolute -left-32 -top-28 size-[512px] rounded-xl bg-teal-900/5 blur-[60px]" />
      <div className="pointer-events-none absolute -bottom-28 -right-32 h-[444px] w-96 rounded-xl bg-[rgba(139,72,35,0.05)] blur-[60px]" />

      <div className="relative mx-auto flex min-h-screen max-w-[1280px] flex-col px-6 py-24">
        <p className="mb-24 text-center font-serif text-2xl italic tracking-tight text-teal-950">
          The Executive Editorial
        </p>

        <div className="mx-auto grid w-full max-w-[896px] items-center gap-12 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-7">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-line" />
                <p className="text-xs uppercase tracking-[0.12em] text-muted">
                  Submission Confirmed
                </p>
              </div>
              <h1 className="font-serif text-5xl leading-none tracking-tight text-ink md:text-6xl lg:text-[72px] lg:leading-[72px]">
                Thank You!
                <span className="mt-0 block bg-gradient-to-br from-teal-950 to-teal-900 bg-clip-text text-transparent">
                  Your Request Has Been Received
                </span>
              </h1>
            </div>

            <div className="border-l-4 border-teal-900 bg-panel px-9 py-8">
              <p className="text-xl leading-7 text-muted">
                You will receive a response within 24–48 hours with next steps.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded bg-teal-950 px-8 py-4 text-sm text-white"
              >
                Return to Home
                <img src={iconArrowUpRight} alt="" className="size-3" />
              </Link>
              <Link
                to="/consulting"
                className="inline-flex items-center rounded border border-line/30 px-8 py-4 text-sm text-muted"
              >
                View Case Studies
              </Link>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="overflow-hidden rounded-lg bg-white shadow-2xl">
              <div className="relative">
                <img
                  src={thankYouInterior}
                  alt="Quiet modern interior"
                  className="aspect-[4/5] w-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <p className="absolute bottom-8 left-8 font-serif text-lg italic text-white">
                  &ldquo;Precision in Synthesis.&rdquo;
                </p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 max-w-[220px] bg-white p-6 shadow-xl sm:-left-12">
              <img src={iconSeal} alt="" className="h-5 w-5" />
              <p className="mt-3 text-xs leading-relaxed text-muted">
                Our team is currently reviewing your strategic profile to ensure
                the highest alignment with our consulting frameworks.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-auto pt-24">
          <Footer variant="minimal" />
        </div>
      </div>
    </div>
  );
}
