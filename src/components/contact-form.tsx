
import { useState } from "react";
import type { FormEvent } from "react";
import { site } from "../lib/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(form),
      });

      if (!response.ok) {
        throw new Error("Contact form submission failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <p className="text-sm text-ink-soft">
        Send your message directly to the MHLI team. We will reply to the email
        address you provide.
      </p>
      <input type="hidden" name="_subject" value="New MHLI website inquiry" />
      <input type="hidden" name="_captcha" value="false" />
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-forest-deep">
          Name
          <input
            required
            name="name"
            autoComplete="name"
            className="mt-1 min-h-11 w-full border border-line bg-cream px-3"
          />
        </label>
        <label className="block text-sm font-medium text-forest-deep">
          Email
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className="mt-1 min-h-11 w-full border border-line bg-cream px-3"
          />
        </label>
      </div>
      <label className="block text-sm font-medium text-forest-deep">
        Organization (optional)
        <input
          name="organization"
          autoComplete="organization"
          className="mt-1 min-h-11 w-full border border-line bg-cream px-3"
        />
      </label>
      <label className="block text-sm font-medium text-forest-deep">
        Message
        <textarea
          required
          name="message"
          rows={6}
          className="mt-1 w-full border border-line bg-cream px-3 py-2"
        />
      </label>
      <button type="submit" disabled={status === "sending"} className="btn btn-primary w-fit">
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
      {status === "success" ? (
        <p role="status" className="text-sm text-forest">
          Your message has been sent. Thank you for reaching out to MHLI.
        </p>
      ) : null}
      {status === "error" ? (
        <p role="alert" className="text-sm text-red-700">
          We could not send your message right now. Please try again or email {site.email}.
        </p>
      ) : null}
    </form>
  );
}
