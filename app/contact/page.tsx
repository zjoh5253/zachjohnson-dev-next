import SectionHeader from "@/app/components/SectionHeader";
import FadeIn from "@/app/components/FadeIn";
import ContactForm from "@/app/components/ContactForm";

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17.12v-.2z" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeader title="GET IN TOUCH" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left — intro + social links */}
        <FadeIn>
          <div>
            <p className="text-[#a1a1a1] leading-relaxed mb-10">
              Thanks for swinging by! Want to connect or collaborate? Drop me a
              line and I&apos;ll get back to you ASAP.
            </p>

            <div className="space-y-5">
              <a
                href="https://www.linkedin.com/in/zachary-taylor-johnson/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-[#a1a1a1] hover:text-[#fafafa] transition group"
              >
                <span className="flex items-center justify-center w-10 h-10 bg-[#141414] border border-[#262626] rounded-lg group-hover:border-[#a1a1a1] transition">
                  <LinkedInIcon />
                </span>
                <div>
                  <p className="font-mono text-xs text-[#6b6b6b] uppercase tracking-wider">
                    LinkedIn
                  </p>
                  <p className="text-sm">zachary-taylor-johnson</p>
                </div>
              </a>

              <a
                href="https://github.com/zachjohnson"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-[#a1a1a1] hover:text-[#fafafa] transition group"
              >
                <span className="flex items-center justify-center w-10 h-10 bg-[#141414] border border-[#262626] rounded-lg group-hover:border-[#a1a1a1] transition">
                  <GitHubIcon />
                </span>
                <div>
                  <p className="font-mono text-xs text-[#6b6b6b] uppercase tracking-wider">
                    GitHub
                  </p>
                  <p className="text-sm">@zachjohnson</p>
                </div>
              </a>

              <a
                href="mailto:zach@zachjohnson.dev"
                className="flex items-center gap-4 text-[#a1a1a1] hover:text-[#fafafa] transition group"
              >
                <span className="flex items-center justify-center w-10 h-10 bg-[#141414] border border-[#262626] rounded-lg group-hover:border-[#a1a1a1] transition">
                  <EmailIcon />
                </span>
                <div>
                  <p className="font-mono text-xs text-[#6b6b6b] uppercase tracking-wider">
                    Email
                  </p>
                  <p className="text-sm">zach@zachjohnson.dev</p>
                </div>
              </a>

              <a
                href="tel:8018422358"
                className="flex items-center gap-4 text-[#a1a1a1] hover:text-[#fafafa] transition group"
              >
                <span className="flex items-center justify-center w-10 h-10 bg-[#141414] border border-[#262626] rounded-lg group-hover:border-[#a1a1a1] transition">
                  <PhoneIcon />
                </span>
                <div>
                  <p className="font-mono text-xs text-[#6b6b6b] uppercase tracking-wider">
                    Phone
                  </p>
                  <p className="text-sm">801-842-2358</p>
                </div>
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Right — contact form */}
        <FadeIn delay={150}>
          <ContactForm />
        </FadeIn>
      </div>
    </div>
  );
}
