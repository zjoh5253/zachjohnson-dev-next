"use client";

import { useState, FormEvent } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/placeholder";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full bg-[#141414] border border-[#262626] rounded-lg px-4 py-3 text-[#fafafa] placeholder:text-[#6b6b6b] focus:border-[#a1a1a1] focus:outline-none transition";

  if (status === "success") {
    return (
      <div className="bg-[#141414] border border-[#262626] rounded-lg px-6 py-10 text-center">
        <p className="text-[#fafafa] font-heading text-xl uppercase tracking-wider mb-2">
          Message sent!
        </p>
        <p className="text-[#a1a1a1] text-sm">
          I&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-[#a1a1a1] text-sm font-mono mb-1.5">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          className={inputClass}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-[#a1a1a1] text-sm font-mono mb-1.5">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className={inputClass}
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-[#a1a1a1] text-sm font-mono mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="What's on your mind?"
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Error */}
      {status === "error" && (
        <p className="text-red-400 text-sm font-mono">
          Something went wrong. Please try again or email me directly.
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-[#fafafa] text-[#0a0a0a] font-heading uppercase tracking-wider py-3 rounded-lg hover:bg-[#e5e5e5] transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
