import { useEffect } from "react";
import { site } from "../lib/site";

type PageMeta = {
  /** Page name. Shown as "About | MHLI". Leave out to use the site default. */
  title?: string;
  /** Used exactly as given, without the site suffix (home page). */
  absoluteTitle?: string;
  description?: string;
  /** Path of this page, for example "/about". */
  path: string;
  /** Share image, as a path or absolute URL. */
  image?: string;
};

function setMeta(attr: "name" | "property", key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setCanonical(href: string) {
  let link = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  );
  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    document.head.appendChild(link);
  }
  link.href = href;
}
export function usePageMeta({
  title,
  absoluteTitle,
  description = site.description,
  path,
  image,
}: PageMeta) {
  const fullTitle =
    absoluteTitle ??
    (title
      ? `${title} | ${site.shortName}`
      : `${site.shortName} | ${site.name}`);

  useEffect(() => {
    const url = new URL(path, site.url).toString();

    document.title = fullTitle;
    setMeta("name", "description", description);
    setCanonical(url);

    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);

    if (image) {
      const imageUrl = new URL(image, site.url).toString();
      setMeta("property", "og:image", imageUrl);
      setMeta("name", "twitter:image", imageUrl);
    }
    setMeta("name", "twitter:card", image ? "summary_large_image" : "summary");
  }, [fullTitle, description, path, image]);
}