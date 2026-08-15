import { useState } from "react";
import type { Route } from "./+types/payment";
import { SiteLayout } from "../components/SiteLayout";
import {
  iconBank,
  iconConfirm,
  iconGraph,
  iconMethodCheck,
  iconPaypal,
  iconSsl,
  iconStripe,
  iconUpload,
} from "../assets";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Payment | The Executive Editorial" },
    {
      name: "description",
      content: "Finalize your strategic investment.",
    },
  ];
}

type Method = "stripe" | "paypal" | "bank";

const methods: { id: Method; label: string; icon: string }[] = [
  { id: "stripe", label: "Stripe", icon: iconStripe },
  { id: "paypal", label: "PayPal", icon: iconPaypal },
  { id: "bank", label: "Bank Transfer", icon: iconBank },
];

export default function Payment() {
  const [method, setMethod] = useState<Method>("stripe");

  return (
    <SiteLayout>
      <section className="px-8 pb-8 pt-28">
        <div className="mx-auto grid max-w-[1280px] items-end gap-8 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.2em] text-teal-950">
              Secure Transaction
            </p>
            <h1 className="font-serif text-5xl leading-tight text-ink md:text-6xl">
              Finalize Your{" "}
              <span className="italic text-teal-950">Strategic Investment</span>
            </h1>
          </div>
          <p className="text-base leading-relaxed text-muted lg:col-span-5">
            Review your consultation details and select your preferred method of
            settlement. All transactions are encrypted and handled with
            corporate-grade security.
          </p>
        </div>
      </section>

      <section className="px-8 pb-16 pt-8">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-12">
          <div className="space-y-12 lg:col-span-8">
            <div className="space-y-6">
              <h2 className="text-xs uppercase tracking-[0.16em] text-slate-soft">
                1. Select Payment Method
              </h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {methods.map((item) => {
                  const active = method === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setMethod(item.id)}
                      className={[
                        "relative flex flex-col items-center gap-3 rounded-lg border bg-white px-4 py-8 transition",
                        active
                          ? "border-teal-950 shadow-sm"
                          : "border-line/40 hover:border-line",
                      ].join(" ")}
                    >
                      {active ? (
                        <img
                          src={iconMethodCheck}
                          alt=""
                          className="absolute right-3 top-3 size-5"
                        />
                      ) : null}
                      <img src={item.icon} alt="" className="h-8 w-auto" />
                      <span className="text-sm text-ink">{item.label}</span>
                    </button>
                  );
                })}
              </div>

              {method === "bank" ? (
                <div className="space-y-4 rounded-lg bg-panel p-8">
                  <Detail
                    label="Beneficiary"
                    value="The Executive Editorial Group LTD"
                  />
                  <Detail
                    label="Bank Name"
                    value="Global Commerce Bank, NY"
                  />
                  <Detail
                    label="IBAN / Account Number"
                    value="US 99 1234 5678 9012 3456"
                  />
                  <Detail label="SWIFT / BIC" value="EXEDNY33XXX" />
                  <p className="pt-2 text-sm italic text-muted">
                    Please use your Invoice ID #EE-2024-089 as the payment
                    reference.
                  </p>
                </div>
              ) : null}
            </div>

            <div className="space-y-6">
              <h2 className="text-xs uppercase tracking-[0.16em] text-slate-soft">
                2. Proof of Payment
              </h2>
              <label className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-line bg-white px-6 py-16 text-center">
                <img src={iconUpload} alt="" className="size-10" />
                <p className="text-base text-ink">
                  Drop your receipt here, or{" "}
                  <span className="text-teal-950 underline">browse files</span>
                </p>
                <p className="text-sm text-muted">
                  Accepted formats: PDF, JPG, PNG (Max 10MB)
                </p>
                <input type="file" className="sr-only" accept=".pdf,.jpg,.jpeg,.png" />
              </label>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-28 rounded-lg bg-white p-8 shadow-[0_20px_25px_-5px_rgba(22,28,39,0.05)]">
              <h3 className="font-serif text-2xl text-ink">Order Summary</h3>
              <div className="mt-8 space-y-6 border-b border-line/30 pb-6">
                <LineItem
                  title="1:1 Executive Strategy Session"
                  detail="60-minute intensive diagnostic"
                  amount="$1,200.00"
                />
                <LineItem
                  title="Analytical Report & Synthesis"
                  detail="Custom PDF deliverable"
                  amount="$450.00"
                />
              </div>
              <div className="space-y-3 py-6 text-sm">
                <Row label="Subtotal" value="$1,650.00" />
                <Row label="Tax (Calculated at checkout)" value="$0.00" />
              </div>
              <div className="flex items-end justify-between border-t border-line/30 pt-6">
                <span className="text-sm uppercase tracking-wide text-muted">
                  Total Due
                </span>
                <span className="font-serif text-3xl text-teal-950">
                  $1,650.00
                </span>
              </div>
              <button
                type="button"
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-md bg-teal-950 py-4 text-sm uppercase tracking-wide text-white"
              >
                <img
                  src={iconConfirm}
                  alt=""
                  className="size-4 brightness-0 invert"
                />
                Confirm Payment
              </button>
              <div className="mt-6 flex items-start gap-2 text-[10px] uppercase tracking-wide text-muted">
                <img src={iconSsl} alt="" className="mt-0.5 size-3" />
                <span>
                  SSL Secure 256-bit Encryption &amp; PCI DSS Compliant
                  Environment
                </span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="px-8 pb-24">
        <div className="relative mx-auto flex max-w-[1280px] overflow-hidden rounded-lg bg-teal-950 px-10 py-12 text-white">
          <div className="relative z-10 max-w-xl space-y-4">
            <h3 className="font-serif text-3xl md:text-4xl">
              Clarity is the ultimate competitive advantage.
            </h3>
            <p className="text-base leading-relaxed text-mint">
              Upon confirmation, onboarding materials arrive within 2 hours,
              including your Strategic Diagnostic Questionnaire.
            </p>
          </div>
          <img
            src={iconGraph}
            alt=""
            className="pointer-events-none absolute -right-4 bottom-0 h-40 opacity-20"
          />
        </div>
      </section>
    </SiteLayout>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.12em] text-muted">{label}</p>
      <p className="mt-1 text-base text-ink">{value}</p>
    </div>
  );
}

function LineItem({
  title,
  detail,
  amount,
}: {
  title: string;
  detail: string;
  amount: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-sm text-ink">{title}</p>
        <p className="text-xs text-muted">{detail}</p>
      </div>
      <p className="shrink-0 text-sm text-ink">{amount}</p>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-muted">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
