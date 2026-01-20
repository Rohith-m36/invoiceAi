import React, { useState } from "react";
import { SignedIn, SignedOut, useClerk, useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const PricingCard = ({ title, price, period, description, features = [], isPopular = false, isAnnual = false, onCtaClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        background: isPopular
          ? "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)"
          : "white",
        border: isPopular ? "none" : "1px solid #e2e8f0",
        borderRadius: 24,
        padding: isPopular ? 2 : 0,
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: isHovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
        boxShadow: isHovered
          ? isPopular
            ? "0 25px 50px rgba(99, 102, 241, 0.3)"
            : "0 20px 40px rgba(0, 0, 0, 0.1)"
          : isPopular
          ? "0 15px 35px rgba(99, 102, 241, 0.2)"
          : "0 4px 20px rgba(0, 0, 0, 0.04)",
      }}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div
          style={{
            position: "absolute",
            top: -12,
            left: "50%",
            transform: "translateX(-50%)",
            padding: "6px 20px",
            background: "white",
            borderRadius: 50,
            fontSize: 12,
            fontWeight: 700,
            color: "#6366f1",
            boxShadow: "0 4px 12px rgba(99, 102, 241, 0.2)",
            zIndex: 10,
            letterSpacing: "0.5px",
          }}
        >
          MOST POPULAR
        </div>
      )}

      {/* Inner Card */}
      <div
        style={{
          background: isPopular ? "white" : "transparent",
          borderRadius: isPopular ? 22 : 24,
          padding: 40,
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <h3
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: "#0f172a",
              marginBottom: 8,
            }}
          >
            {title}
          </h3>
          <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6 }}>
            {description}
          </p>
        </div>

        {/* Price */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 8 }}>
            <span
              style={{
                fontSize: 48,
                fontWeight: 800,
                color: isPopular ? "#6366f1" : "#0f172a",
                letterSpacing: "-0.02em",
              }}
            >
              {price}
            </span>
            {period && (
              <span style={{ fontSize: 16, color: "#64748b", fontWeight: 500 }}>
                /{period}
              </span>
            )}
          </div>
          {isAnnual && (
            <div
              style={{
                display: "inline-block",
                padding: "4px 12px",
                background: "linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)",
                border: "1px solid rgba(34, 197, 94, 0.2)",
                borderRadius: 6,
                fontSize: 12,
                fontWeight: 600,
                color: "#059669",
              }}
            >
              Save 20% annually
            </div>
          )}
        </div>

        {/* Features */}
        <ul style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
          {features.map((feature, index) => (
            <li key={index} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <div
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  background: isPopular
                    ? "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)"
                    : "#f1f5f9",
                  display: "grid",
                  placeItems: "center",
                  flexShrink: 0,
                  marginTop: 2,
                }}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={isPopular ? "white" : "#64748b"}
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span style={{ fontSize: 15, color: "#334155", lineHeight: 1.5 }}>
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA Buttons */}
        <SignedIn>
          <button
            type="button"
            onClick={() => onCtaClick && onCtaClick({ title, isPopular, isAnnual })}
            style={{
              width: "100%",
              padding: "16px",
              background: isPopular
                ? "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)"
                : "transparent",
              border: isPopular ? "none" : "2px solid #e2e8f0",
              borderRadius: 12,
              color: isPopular ? "white" : "#334155",
              fontSize: 16,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              if (isPopular) {
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(99, 102, 241, 0.4)";
              } else {
                e.currentTarget.style.background = "#f8fafc";
                e.currentTarget.style.borderColor = "#cbd5e1";
              }
            }}
            onMouseLeave={(e) => {
              if (isPopular) {
                e.currentTarget.style.boxShadow = "none";
              } else {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "#e2e8f0";
              }
            }}
          >
            {isPopular ? "Get Started" : "Choose Plan"}
          </button>
        </SignedIn>

        <SignedOut>
          <button
            type="button"
            onClick={() => onCtaClick && onCtaClick({ title, isPopular, isAnnual }, { openSignInFallback: true })}
            style={{
              width: "100%",
              padding: "16px",
              background: isPopular
                ? "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)"
                : "transparent",
              border: isPopular ? "none" : "2px solid #e2e8f0",
              borderRadius: 12,
              color: isPopular ? "white" : "#334155",
              fontSize: 16,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              if (isPopular) {
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(99, 102, 241, 0.4)";
              } else {
                e.currentTarget.style.background = "#f8fafc";
                e.currentTarget.style.borderColor = "#cbd5e1";
              }
            }}
            onMouseLeave={(e) => {
              if (isPopular) {
                e.currentTarget.style.boxShadow = "none";
              } else {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "#e2e8f0";
              }
            }}
          >
            Sign in to get started
          </button>
        </SignedOut>
      </div>

      {/* Decorative Corner Elements for Popular Card */}
      {isPopular && (
        <>
          <div
            style={{
              position: "absolute",
              top: -15,
              right: -15,
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
              filter: "blur(20px)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -15,
              left: -15,
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)",
              filter: "blur(20px)",
              pointerEvents: "none",
            }}
          />
        </>
      )}
    </div>
  );
};

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState("monthly");
  const clerk = useClerk();
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  const plans = {
    monthly: [
      {
        title: "Starter",
        price: "₹0",
        period: "month",
        description: "Perfect for freelancers and small projects",
        features: [
          "5 invoices per month",
          "Basic AI parsing",
          "Standard templates",
          "Email support",
          "PDF export",
        ],
        isPopular: false,
      },
      {
        title: "Professional",
        price: "₹499",
        period: "month",
        description: "For growing businesses and agencies",
        features: [
          "Unlimited invoices",
          "Advanced AI parsing",
          "Custom branding",
          "Priority support",
          "Advanced analytics",
          "Team collaboration (3 members)",
          "API access",
        ],
        isPopular: true,
      },
      {
        title: "Enterprise",
        price: "₹1,499",
        period: "month",
        description: "For large organizations with custom needs",
        features: [
          "Everything in Professional",
          "Unlimited team members",
          "Custom workflows",
          "Dedicated account manager",
          "SLA guarantee",
          "White-label solutions",
          "Advanced security",
        ],
        isPopular: false,
      },
    ],
    annual: [
      {
        title: "Starter",
        price: "₹0",
        period: "month",
        description: "Perfect for freelancers and small projects",
        features: [
          "5 invoices per month",
          "Basic AI parsing",
          "Standard templates",
          "Email support",
          "PDF export",
        ],
        isPopular: false,
        isAnnual: false,
      },
      {
        title: "Professional",
        price: "₹399",
        period: "month",
        description: "For growing businesses and agencies",
        features: [
          "Unlimited invoices",
          "Advanced AI parsing",
          "Custom branding",
          "Priority support",
          "Advanced analytics",
          "Team collaboration (3 members)",
          "API access",
        ],
        isPopular: true,
        isAnnual: true,
      },
      {
        title: "Enterprise",
        price: "₹1,199",
        period: "month",
        description: "For large organizations with custom needs",
        features: [
          "Everything in Professional",
          "Unlimited team members",
          "Custom workflows",
          "Dedicated account manager",
          "SLA guarantee",
          "White-label solutions",
          "Advanced security",
        ],
        isPopular: false,
        isAnnual: true,
      },
    ],
  };

  const currentPlans = plans[billingPeriod];

  function handleCtaClick(planMeta, flags = {}) {
    if (flags.openSignInFallback || !isSignedIn) {
      if (clerk && typeof clerk.openSignIn === "function") {
        clerk.openSignIn({ redirectUrl: "/app/create-invoice" });
      } else {
        navigate("/sign-in");
      }
      return;
    }
    navigate("/app/create-invoice", {
      state: { fromPlan: planMeta?.title || null },
    });
  }

  return (
    <section
      id="pricing"
      style={{
        position: "relative",
        padding: "120px 0",
        background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
        overflow: "hidden",
      }}
    >
      {/* Background Elements */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "-10%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "-10%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Grid Pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(148, 163, 184, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: 800, margin: "0 auto 80px" }}>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 20px",
              background: "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)",
              border: "1px solid rgba(99, 102, 241, 0.2)",
              borderRadius: 50,
              marginBottom: 24,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                boxShadow: "0 0 12px rgba(99, 102, 241, 0.6)",
              }}
            />
            <span style={{ fontSize: 13, fontWeight: 600, color: "#6366f1", letterSpacing: "0.5px" }}>
              TRANSPARENT PRICING
            </span>
          </div>

          {/* Title */}
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: 20,
              color: "#0f172a",
              letterSpacing: "-0.02em",
            }}
          >
            Simple,{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Fair Pricing
            </span>
          </h2>

          {/* Subtitle */}
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "#64748b", marginBottom: 40 }}>
            Start free, upgrade as you grow. No hidden fees, no surprise charges.
          </p>

          {/* Billing Toggle */}
          <div
            style={{
              display: "inline-flex",
              padding: 6,
              background: "#f1f5f9",
              borderRadius: 12,
              gap: 4,
            }}
          >
            <button
              onClick={() => setBillingPeriod("monthly")}
              style={{
                padding: "10px 24px",
                background: billingPeriod === "monthly" ? "white" : "transparent",
                border: "none",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                color: billingPeriod === "monthly" ? "#0f172a" : "#64748b",
                cursor: "pointer",
                transition: "all 0.2s ease",
                boxShadow: billingPeriod === "monthly" ? "0 2px 8px rgba(0, 0, 0, 0.08)" : "none",
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("annual")}
              style={{
                padding: "10px 24px",
                background: billingPeriod === "annual" ? "white" : "transparent",
                border: "none",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                color: billingPeriod === "annual" ? "#0f172a" : "#64748b",
                cursor: "pointer",
                transition: "all 0.2s ease",
                boxShadow: billingPeriod === "annual" ? "0 2px 8px rgba(0, 0, 0, 0.08)" : "none",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              Annual
              <span
                style={{
                  padding: "2px 8px",
                  background: "linear-gradient(135deg, #059669, #10b981)",
                  borderRadius: 6,
                  fontSize: 11,
                  fontWeight: 700,
                  color: "white",
                }}
              >
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 32,
            marginBottom: 80,
          }}
        >
          {currentPlans.map((plan, index) => (
            <PricingCard key={plan.title} {...plan} onCtaClick={handleCtaClick} />
          ))}
        </div>

        {/* All Plans Include */}
        <div
          style={{
            background: "white",
            border: "1px solid #e2e8f0",
            borderRadius: 24,
            padding: 48,
            marginBottom: 60,
          }}
        >
          <h3
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: "#0f172a",
              marginBottom: 32,
              textAlign: "center",
            }}
          >
            All plans include
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 20,
            }}
          >
            {[
              "Secure cloud storage",
              "Mobile-friendly interface",
              "Automatic backups",
              "Real-time notifications",
              "Multi-currency support",
              "Tax calculation",
            ].map((feature, index) => (
              <div key={index} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  }}
                />
                <span style={{ fontSize: 15, color: "#334155" }}>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ CTA */}
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: 16, color: "#64748b" }}>
            Have questions about pricing?{" "}
            <button
              style={{
                background: "none",
                border: "none",
                color: "#6366f1",
                fontWeight: 600,
                fontSize: 16,
                cursor: "pointer",
                textDecoration: "underline",
                textUnderlineOffset: 4,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#8b5cf6")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6366f1")}
            >
              Contact our sales team →
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}