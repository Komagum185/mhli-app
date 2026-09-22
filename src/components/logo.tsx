type LogoProps = {
  className?: string;
  title?: string;
};

export function Logo({ className = "h-9 w-9", title = "MHLI emblem" }: LogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      role="img"
      aria-label={title}
    >
      <circle cx="50" cy="50" r="47" fill="none" stroke="currentColor" strokeWidth="4" />
      <polygon points="20,68 38,32 56,68" fill="currentColor" />
      <polygon points="46,68 66,28 86,68" fill="currentColor" />
      <rect x="20" y="64" width="66" height="6" fill="currentColor" />
      <circle cx="50" cy="42" r="13" fill="#c8922a" />
    </svg>
  );
}

export function Emblem({ className = "h-full w-full" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 300 300" role="img" aria-label="MHLI emblem">
      <circle cx="150" cy="150" r="140" fill="none" stroke="#1a4d3a" strokeWidth="6" />
      <circle cx="150" cy="128" r="38" fill="#c8922a" />
      <polygon points="65,205 118,100 171,205" fill="#1a4d3a" />
      <polygon points="135,205 200,88 258,205" fill="#1a4d3a" />
      <polygon points="95,150 108,116 121,150" fill="#dfe7e0" opacity="0.85" />
      <rect x="60" y="196" width="200" height="16" fill="#1a4d3a" />
      <rect x="136" y="150" width="28" height="76" fill="#faf6ee" />
      <rect x="112" y="174" width="76" height="28" fill="#faf6ee" />
      <path d="M150,204 C130,196 108,206 100,226 C126,232 142,222 150,204 Z" fill="#c8922a" />
      <path d="M150,204 C170,196 192,206 200,226 C174,232 158,222 150,204 Z" fill="#c8922a" />
    </svg>
  );
}
