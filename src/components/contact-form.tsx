
import {useState }from "react";
import type { FormEvent } from "react";
import { site } from "../lib/site";

export function ContactForm() {
  const [status, setStatus] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const organization = String(data.get("organization") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = encodeURIComponent(`MHLI inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nOrganization: ${organization || "—"}\n\n${message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus(
      "Your email app should open with this message. If it does not, write to us at " +
        site.email +
        ".",
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <p className="text-sm text-ink-soft">
        This form opens your email app and sends to {site.email}. Nothing is stored
        on this website.
      </p>
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
      <button type="submit" className="btn btn-primary w-fit">
        Open email to send
      </button>
      {status ? (
        <p role="status" className="text-sm text-forest">
          {status}
        </p>
      ) : null}
    </form>
  );
}
