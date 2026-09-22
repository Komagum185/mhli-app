type PillarItem = {
  title: string;
  body: string;
};

type PillarGridProps = {
  items: readonly PillarItem[];
  /** Card background utility, so each page can match its own surface colour. */
  cardClassName?: string;
};


export function PillarGrid({ items, cardClassName = "bg-cream" }: PillarGridProps) {
  return (
    <ul className="flex flex-wrap justify-center gap-5">
      {items.map((item) => (
        <li
          key={item.title}
          className="flex basis-full sm:basis-[calc(50%-0.63rem)] lg:basis-[calc(33.333%-0.84rem)] xl:basis-[calc(20%-1.02rem)]"
        >
          <article
            className={`w-full rounded-sm border border-line border-t-2 border-t-clay p-6 shadow-xs ${cardClassName}`}
          >
            <h3 className="text-lg text-forest-deep">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              {item.body}
            </p>
          </article>
        </li>
      ))}
    </ul>
  );
}