"use client";

import { useEffect, useState } from "react";

const groups = [
  {
    title: "Core stack",
    items: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Supabase"],
  },
  {
    title: "Enterprise & integrations",
    items: [
      "SPFx / SharePoint",
      "Microsoft Graph",
      "Entra ID",
      "Coveo Cloud",
      "Laravel / MySQL",
      "REST APIs",
    ],
  },
  {
    title: "Engineering & delivery",
    items: ["Git / GitHub / GitLab", "CI/CD", "SQL Migrations", "RLS", "Jest", "Vercel"],
  },
];

export default function EngineeringStack() {
  const [mobile, setMobile] = useState(false);
  const [open, setOpen] = useState<number[]>([0, 1, 2]);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 760px)");

    const sync = () => {
      const isMobile = media.matches;
      setMobile(isMobile);
      setOpen(isMobile ? [0] : [0, 1, 2]);
    };

    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const toggle = (index: number) => {
    if (!mobile) return;
    setOpen((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index]
    );
  };

  return (
    <div className="technology-grid">
      {groups.map((group, index) => {
        const expanded = open.includes(index);

        return (
          <article
            key={group.title}
            className={expanded ? "technology-card is-open" : "technology-card"}
          >
            <button
              className="technology-title"
              type="button"
              aria-expanded={expanded}
              aria-controls={"technology-panel-" + index}
              onClick={() => toggle(index)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{group.title}</strong>
              <i aria-hidden="true">+</i>
            </button>

            <div
              id={"technology-panel-" + index}
              className="technology-panel"
              hidden={!expanded}
            >
              <ul>
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="tech-prompt" aria-hidden="true">
                      &gt;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        );
      })}
    </div>
  );
}
