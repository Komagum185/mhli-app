
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  galleryFilters,
  galleryItems,
  type GalleryCategory,
} from "../lib/content";

type Filter = "all" | GalleryCategory;

export function Gallery({ compact = false }: { compact?: boolean }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<number | null>(null);

  const items = useMemo(
    () =>
      filter === "all"
        ? galleryItems
        : galleryItems.filter((item) => item.category === filter),
    [filter],
  );

  const close = useCallback(() => setActive(null), []);

  const show = items[active ?? -1];

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") {
        setActive((i) => (i === null ? i : (i + 1) % items.length));
      }
      if (event.key === "ArrowLeft") {
        setActive((i) =>
          i === null ? i : (i - 1 + items.length) % items.length,
        );
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, items.length]);

  const visible = compact ? items.slice(0, 8) : items;

  return (
    <div>
      <div
        className="mb-7 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filter gallery"
      >
        {galleryFilters.map((tab) => {
          const selected = filter === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={selected}
              className={`min-h-11 rounded-full border px-4 font-mono text-xs tracking-wide ${
                selected
                  ? "border-forest bg-forest text-cream"
                  : "border-line text-ink-soft hover:border-forest hover:text-forest"
              }`}
              onClick={() => {
                setFilter(tab.id);
                setActive(null);
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {visible.map((item) => (
          <li
            key={`${item.src}-${item.caption}`}
            className={item.featured && !compact ? "col-span-2 row-span-2" : ""}
          >
            <button
              type="button"
              onClick={() => setActive(items.indexOf(item))}
              className={`group relative block w-full overflow-hidden bg-cream-dim text-left ${
                item.featured && !compact ? "h-full min-h-70" : "aspect-square"
              }`}
            >
              <img
                src={item.src}
                alt={item.alt}
                sizes={
                  item.featured && !compact
                    ? "(max-width: 768px) 100vw, 50vw"
                    : "(max-width: 768px) 50vw, 25vw"
                }
                className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
              />
              <span className="absolute inset-x-0 bottom-0 bg-linear-to-t from-forest-deep/90 to-transparent px-3 pt-10 pb-3 text-sm text-cream md:opacity-0 md:transition-opacity md:group-hover:opacity-100 md:group-focus-visible:opacity-100">
                {item.caption}
              </span>
            </button>
            <span className="sr-only">{item.description}</span>
          </li>
        ))}
      </ul>

      {show ? (
        <div
          className="fixed inset-0 z-80 flex flex-col items-center justify-center gap-4 bg-[rgba(10,25,19,0.94)] p-[5vw]"
          role="dialog"
          aria-modal="true"
          aria-label={show.alt}
          onClick={close}
        >
          <button
            type="button"
            className="absolute top-5 right-6 min-h-11 min-w-11 text-2xl text-cream"
            onClick={close}
            aria-label="Close image"
          >
            ×
          </button>
          <button
            type="button"
            className="absolute top-1/2 left-3 min-h-11 min-w-11 -translate-y-1/2 rounded-full bg-white/10 text-xl text-cream"
            onClick={(event) => {
              event.stopPropagation();
              setActive((i) =>
                i === null ? i : (i - 1 + items.length) % items.length,
              );
            }}
            aria-label="Previous image"
          >
            ‹
          </button>
          <img
            src={show.src}
            alt={show.alt}
            width={1400}
            height={1050}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
            onClick={(event) => event.stopPropagation()}
          />
          <p className="max-w-[70ch] text-center font-mono text-sm text-gold-soft">
            {show.description}
          </p>
          <button
            type="button"
            className="absolute top-1/2 right-3 min-h-11 min-w-11 -translate-y-1/2 rounded-full bg-white/10 text-xl text-cream"
            onClick={(event) => {
              event.stopPropagation();
              setActive((i) => (i === null ? i : (i + 1) % items.length));
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      ) : null}
    </div>
  );
}
