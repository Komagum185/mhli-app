import { Link } from "react-router-dom";
export function SkipLink() {
  return (
    <a href="#main" className="skip-link">
      Skip to main content
    </a>
  );
}

export function Breadcrumbs({
  items,
}: {
  items: { href?: string; label: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ink">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link to="/" className="underline-offset-2 hover:text-forest hover:underline">
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {item.href ? (
              <Link
                to={item.href}
                className="underline-offset-2 hover:text-forest hover:underline"
              >
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-forest-deep">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
