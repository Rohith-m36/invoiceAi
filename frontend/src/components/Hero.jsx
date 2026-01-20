import React from "react";
import { useNavigate } from "react-router-dom";
import { SignedIn, SignedOut, useClerk } from "@clerk/clerk-react";

export default function Hero() {
  const navigate = useNavigate();
  const clerk = useClerk();

  const handleSignedInPrimary = () => {
    navigate("/app/create-invoice");
  };

  const handleSignedOutPrimary = () => {
    try {
      if (clerk && typeof clerk.openSignUp === "function") {
        clerk.openSignUp();
      }
    } catch (err) {
      console.error("Failed to open Clerk sign up modal:", err);
    }
  };

  return (
    <section className="relative overflow-hidden bg-white">
      {/* ✅ Background */}
      <div className="absolute inset-0">
        {/* soft gradient */}
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-indigo-200/50 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-sky-200/60 blur-3xl" />

        {/* grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* ✅ Left Content */}
          <div>
            {/* badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-sm font-semibold text-slate-700">
                AI Invoicing for Indian Businesses
              </span>
              <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
                FREE
              </span>
            </div>

            {/* heading */}
            <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
              Create invoices{" "}
              <span className="text-indigo-600">faster</span>
              <br />
              from any message.
            </h1>

            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Paste WhatsApp chat / Email / Notes — our AI extracts items,
              calculates GST, totals, and generates a clean invoice ready to send.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <SignedIn>
                <button
                  type="button"
                  onClick={handleSignedInPrimary}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-extrabold text-white shadow-md hover:bg-indigo-700 transition"
                >
                  Create Invoice Now
                  <span className="text-lg">→</span>
                </button>
              </SignedIn>

              <SignedOut>
                <button
                  type="button"
                  onClick={handleSignedOutPrimary}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-extrabold text-white shadow-md hover:bg-indigo-700 transition"
                >
                  Start Free (Sign up)
                  <span className="text-lg">→</span>
                </button>
              </SignedOut>

              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white/70 px-6 py-3 text-sm font-bold text-slate-800 hover:bg-white transition backdrop-blur"
              >
                See Features
                <span className="text-lg">↓</span>
              </a>
            </div>

            {/* quick trust */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { title: "10 sec", desc: "Invoice creation" },
                { title: "GST ready", desc: "Indian format" },
                { title: "PDF share", desc: "Email / WhatsApp" },
              ].map((x, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200 bg-white/70 p-4 backdrop-blur"
                >
                  <div className="text-lg font-extrabold text-slate-900">
                    {x.title}
                  </div>
                  <div className="text-sm font-medium text-slate-600">
                    {x.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ✅ Right Demo */}
          <div className="relative">
            {/* floating glow */}
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-3xl bg-indigo-400/25 blur-2xl" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-3xl bg-sky-400/25 blur-2xl" />

            <div className="relative rounded-[28px] border border-slate-200 bg-white/60 backdrop-blur-xl shadow-xl overflow-hidden">
              {/* top bar */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-indigo-600 to-sky-500 text-white font-extrabold grid place-items-center shadow">
                    AI
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-slate-900">
                      Amazon Seller Services Pvt Ltd
                    </div>
                    <div className="text-xs text-slate-600">
                      GST: 27AAAPL1234C1ZV
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs font-semibold text-slate-500">
                    Invoice
                  </div>
                  <div className="text-sm font-extrabold text-slate-900">
                    #INV-7821
                  </div>
                  <div className="inline-flex mt-1 text-xs font-extrabold px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Paid
                  </div>
                </div>
              </div>

              {/* items */}
              <div className="p-5">
                <div className="text-sm font-extrabold text-slate-900">
                  Line Items
                </div>

                <div className="mt-3 space-y-2">
                  {[
                    ["Seller Subscription Fee", "₹999"],
                    ["Shipping (Prime Delivery)", "₹250"],
                    ["Commission Charges", "₹700"],
                  ].map(([name, amt], idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white/70 px-4 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-indigo-500" />
                        <span className="text-sm font-semibold text-slate-800">
                          {name}
                        </span>
                      </div>
                      <span className="text-sm font-extrabold text-slate-900">
                        {amt}
                      </span>
                    </div>
                  ))}
                </div>

                {/* totals */}
                <div className="mt-5 rounded-2xl bg-slate-900 text-white p-4">
                  <div className="flex justify-between text-sm opacity-90">
                    <span>Subtotal</span>
                    <span className="font-bold">₹1,949</span>
                  </div>
                  <div className="mt-2 flex justify-between text-sm opacity-90">
                    <span>GST (18%)</span>
                    <span className="font-bold">₹351</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-white/15 flex justify-between">
                    <span className="font-extrabold">Total</span>
                    <span className="font-extrabold text-lg">₹2,300</span>
                  </div>
                </div>

                {/* buttons */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <button className="rounded-2xl border border-slate-200 bg-white px-4 py-3 font-extrabold text-sm text-slate-900 hover:bg-slate-100 transition">
                    Preview PDF
                  </button>
                  <button className="rounded-2xl bg-indigo-600 px-4 py-3 font-extrabold text-sm text-white hover:bg-indigo-700 transition shadow">
                    Send Invoice
                  </button>
                </div>

                {/* AI label */}
                <div className="mt-4 rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 text-xs text-slate-700">
                  <span className="font-extrabold text-slate-900">AI parsed:</span>{" "}
                  “Amazon seller fee invoice — subscription ₹999 + shipping ₹250...”
                </div>
              </div>
            </div>

            {/* bottom hint */}
            <div className="mt-4 text-center text-xs font-semibold text-slate-500">
              Looks like Flipkart/Amazon professional invoices ✅
            </div>
          </div>
        </div>

        {/* ✅ Scroll hint */}
        <div className="mt-14 flex justify-center">
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-700 backdrop-blur">
            Scroll to explore
            <span className="animate-bounce">↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}
