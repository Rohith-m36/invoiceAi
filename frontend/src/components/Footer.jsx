import React from "react";
import { footerStyles } from "../assets/dummyStyles";

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.container}>
        <div className={footerStyles.copyright}>
          © {new Date().getFullYear()} InvoiceAI · Built by Avula Rohith
        </div>
        <div className={footerStyles.links}>
          <a href="/terms" className={footerStyles.link}>
            Terms
          </a>
          <a href="/privacy" className={footerStyles.link}>
            Privacy
          </a>
          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl border border-slate-200 bg-white grid place-items-center hover:bg-slate-100 transition"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-slate-700">
                <path d="M12 .5C5.73.5.75 5.62.75 12c0 5.15 3.44 9.52 8.2 11.06.6.12.82-.27.82-.6v-2.1c-3.34.75-4.04-1.65-4.04-1.65-.55-1.42-1.34-1.8-1.34-1.8-1.1-.77.08-.76.08-.76 1.22.09 1.87 1.28 1.87 1.28 1.08 1.9 2.82 1.35 3.51 1.03.11-.8.42-1.35.77-1.66-2.67-.31-5.47-1.36-5.47-6.05 0-1.33.46-2.42 1.23-3.27-.12-.31-.53-1.56.12-3.25 0 0 1-.33 3.3 1.25a11 11 0 0 1 6 0c2.3-1.58 3.3-1.25 3.3-1.25.65 1.69.24 2.94.12 3.25.77.85 1.23 1.94 1.23 3.27 0 4.7-2.8 5.73-5.48 6.04.43.39.82 1.14.82 2.3v3.41c0 .33.22.72.83.6 4.76-1.54 8.2-5.9 8.2-11.06C23.25 5.62 18.27.5 12 .5Z" />
              </svg>
            </a>

            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl border border-slate-200 bg-white grid place-items-center hover:bg-slate-100 transition"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-slate-700">
                <path d="M20.45 20.45H17v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85v5.5H9.66V9h3.3v1.56h.05c.46-.87 1.58-1.8 3.25-1.8 3.48 0 4.12 2.3 4.12 5.28v6.41ZM5.34 7.43a1.92 1.92 0 1 1 0-3.84 1.92 1.92 0 0 1 0 3.84ZM3.62 20.45h3.45V9H3.62v11.45Z" />
              </svg>
            </a>

            <a
              href="mailto:support@invoiceai.com"
              className="w-10 h-10 rounded-xl border border-slate-200 bg-white grid place-items-center hover:bg-slate-100 transition"
              aria-label="Email"
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-slate-700">
                <path
                  d="M4 6h16v12H4V6Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="m4 7 8 6 8-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
