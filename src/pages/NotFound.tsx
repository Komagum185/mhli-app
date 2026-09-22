import { usePageMeta } from "../lib/metadata";
import { PrimaryButton, Reveal } from "../components/motion-ui";
import { accent, ink } from "../lib/utils";

export function NotFound() {
  usePageMeta({ title: "Page not found", path: window.location.pathname });

  return (
    <main id="main" className="relative isolate overflow-hidden py-20 sm:py-28" style={{ backgroundColor: ink[50] }}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full blur-3xl"
        style={{ backgroundColor: `${ink[500]}1F` }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full blur-3xl"
        style={{ backgroundColor: `${accent}1A` }}
      />

      <div className="wrap relative">
        <Reveal className="max-w-xl">
          <span
            aria-hidden="true"
            className="inline-flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-semibold"
            style={{ backgroundColor: ink[100], color: ink[700] }}
          >
            404
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl" style={{ color: ink[800] }}>
            This page could not be found.
          </h1>
          <p className="mt-4 leading-relaxed" style={{ color: ink[700] }}>
            The link may be out of date, or the address may have been typed
            incorrectly.
          </p>
          <div className="mt-8">
            <PrimaryButton to="/">Back to the home page</PrimaryButton>
          </div>
        </Reveal>
      </div>
    </main>
  );
}