import {
  Baby,
  BriefcaseBusiness,
  FlaskConical,
  HeartPulse,
  Leaf,
} from "lucide-react";

type PillarItem = {
  title: string;
  body: string;
  icon: "health" | "maternal" | "research" | "one-health" | "livelihood";
};

type PillarGridProps = {
  items: readonly PillarItem[];
  cardClassName?: string;
};

const pillarIcons = {
  health: HeartPulse,
  maternal: Baby,
  research: FlaskConical,
  "one-health": Leaf,
  livelihood: BriefcaseBusiness,
} satisfies Record<PillarItem["icon"], typeof HeartPulse>;

export function PillarGrid({ items, cardClassName = "bg-cream" }: PillarGridProps) {
  return (
    <ul className="flex flex-wrap justify-center gap-5">
      {items.map((item) => {
        const Icon = pillarIcons[item.icon];

        return (
          <li
            key={item.title}
            className="flex basis-full sm:basis-[calc(50%-0.63rem)] lg:basis-[calc(33.333%-0.84rem)] xl:basis-[calc(20%-1.02rem)]"
          >
            <article
              className={`w-full rounded-sm border border-line border-t-2 border-t-stone p-6 shadow-xs ${cardClassName}`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream text-forest shadow-sm ring-1 ring-line">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg text-forest-deep">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {item.body}
              </p>
            </article>
          </li>
        );
      })}
    </ul>
  );
}