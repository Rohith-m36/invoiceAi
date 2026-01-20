import React, { useState } from "react";

const FeatureCard = ({ title, desc, icon, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        background: "white",
        border: "1px solid #e2e8f0",
        borderRadius: 20,
        padding: 32,
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: isHovered
          ? "0 20px 40px rgba(99, 102, 241, 0.15)"
          : "0 4px 20px rgba(0, 0, 0, 0.04)",
        overflow: "hidden",
      }}
    >
      {/* Animated gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      />

      {/* Top border accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: isHovered
            ? "linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%)"
            : "transparent",
          transition: "all 0.4s ease",
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10 }}>
        {/* Icon with gradient background */}
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 16,
            background: isHovered
              ? "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)"
              : "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)",
            display: "grid",
            placeItems: "center",
            marginBottom: 24,
            transition: "all 0.4s ease",
            color: isHovered ? "white" : "#64748b",
            boxShadow: isHovered
              ? "0 8px 24px rgba(99, 102, 241, 0.3)"
              : "none",
            transform: isHovered ? "scale(1.05) rotate(3deg)" : "scale(1)",
          }}
        >
          {icon}
        </div>

        {/* Title */}
        <h4
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: "#0f172a",
            marginBottom: 12,
            transition: "color 0.3s ease",
          }}
        >
          {title}
        </h4>

        {/* Description */}
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.7,
            color: "#64748b",
            marginBottom: 20,
          }}
        >
          {desc}
        </p>

        {/* Learn more link */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            color: isHovered ? "#6366f1" : "#94a3b8",
            fontSize: 14,
            fontWeight: 600,
            transition: "all 0.3s ease",
            cursor: "pointer",
          }}
        >
          <span>Learn more</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            style={{
              transform: isHovered ? "translateX(4px)" : "translateX(0)",
              transition: "transform 0.3s ease",
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Corner accent */}
      <div
        style={{
          position: "absolute",
          bottom: -20,
          right: -20,
          width: 100,
          height: 100,
          borderRadius: "50%",
          background: "linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))",
          filter: "blur(30px)",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      />
    </div>
  );
};

export default function Features() {
  const features = [
    {
      title: "AI Invoice Parsing",
      desc: "Paste freeform text and let our advanced AI extract client details, line items, and totals into a perfectly formatted draft invoice in seconds.",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14,2 14,8 20,8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      ),
    },
    {
      title: "Smart Email Reminders",
      desc: "Generate professional, context-aware reminder emails with one click — complete with intelligent tone selection and personalized messaging.",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      title: "Professional PDF Export",
      desc: "Generate high-quality, brand-consistent PDF invoices with reliable email delivery and comprehensive tracking of all sent communications.",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      ),
    },
    {
      title: "Real-time Collaboration",
      desc: "Work seamlessly with your team. Share invoices, track changes, and collaborate in real-time with built-in commenting and version control.",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: "Analytics Dashboard",
      desc: "Gain insights into your invoicing patterns, payment trends, and client behavior with comprehensive analytics and visual reports.",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="20" x2="12" y2="10" />
          <line x1="18" y1="20" x2="18" y2="4" />
          <line x1="6" y1="20" x2="6" y2="16" />
        </svg>
      ),
    },
    {
      title: "Multi-Currency Support",
      desc: "Invoice clients worldwide with automatic currency conversion, real-time exchange rates, and support for over 150 currencies.",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="features"
      style={{
        position: "relative",
        padding: "120px 0",
        background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)",
        overflow: "hidden",
      }}
    >
      {/* Background decorative elements */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-10%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "-10%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Subtle grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(148, 163, 184, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", position: "relative" }}>
        {/* Header Section */}
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
              POWERFUL FEATURES
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
            Built for{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Speed & Precision
            </span>
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.7,
              color: "#64748b",
              maxWidth: 700,
              margin: "0 auto",
            }}
          >
            A minimal, intelligent interface that focuses on what truly matters — create, send,
            and track invoices effortlessly while maintaining professional excellence.
          </p>
        </div>

        {/* Features Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 32,
            marginBottom: 80,
          }}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              desc={feature.desc}
              icon={feature.icon}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div
          style={{
            background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
            borderRadius: 24,
            padding: "60px 40px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative elements */}
          <div
            style={{
              position: "absolute",
              top: -100,
              left: -100,
              width: 300,
              height: 300,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -100,
              right: -100,
              width: 300,
              height: 300,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />

          <div style={{ position: "relative", zIndex: 10 }}>
            <h3
              style={{
                fontSize: 32,
                fontWeight: 700,
                color: "white",
                marginBottom: 16,
              }}
            >
              Ready to Transform Your Invoicing?
            </h3>
            <p
              style={{
                fontSize: 16,
                color: "#cbd5e1",
                marginBottom: 32,
                maxWidth: 600,
                margin: "0 auto 32px",
              }}
            >
              Join thousands of professionals who have streamlined their billing process with our AI-powered platform.
            </p>
            <button
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "16px 32px",
                background: "white",
                border: "none",
                borderRadius: 12,
                color: "#1e293b",
                fontSize: 16,
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.15)";
              }}
            >
              <span>Get Started Free</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}