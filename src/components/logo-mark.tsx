export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="50" cy="50" r="47" fill="none" stroke="currentColor" strokeWidth="4" />
      <polygon points="20,68 38,32 56,68" fill="currentColor" />
      <polygon points="46,68 66,28 86,68" fill="currentColor" />
      <rect x="20" y="64" width="66" height="6" fill="currentColor" />
      <circle cx="50" cy="42" r="13" fill="#c48a1c" />
    </svg>
  );
}
