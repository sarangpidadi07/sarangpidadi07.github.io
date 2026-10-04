type IconName =
  | "idea"
  | "architecture"
  | "code"
  | "shield"
  | "refine"
  | "scale"
  | "mail"
  | "link"
  | "github";

export default function LineIcon({
  name,
  size = 20,
}: {
  name: IconName;
  size?: number;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "idea") {
    return (
      <svg {...common}>
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M8.2 14.7A6 6 0 1 1 15.8 14.7c-.9.7-1.3 1.5-1.3 2.3h-5c0-.8-.4-1.6-1.3-2.3Z" />
      </svg>
    );
  }

  if (name === "architecture") {
    return (
      <svg {...common}>
        <rect x="3" y="4" width="7" height="6" rx="1" />
        <rect x="14" y="4" width="7" height="6" rx="1" />
        <rect x="8.5" y="14" width="7" height="6" rx="1" />
        <path d="M6.5 10v2h11v-2M12 12v2" />
      </svg>
    );
  }

  if (name === "code") {
    return (
      <svg {...common}>
        <path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg {...common}>
        <path d="M12 3 5 6v5c0 4.6 2.8 8.2 7 10 4.2-1.8 7-5.4 7-10V6l-7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  }

  if (name === "refine") {
    return (
      <svg {...common}>
        <path d="M4 7h10M18 7h2M4 17h2M10 17h10" />
        <circle cx="16" cy="7" r="2" />
        <circle cx="8" cy="17" r="2" />
      </svg>
    );
  }

  if (name === "scale") {
    return (
      <svg {...common}>
        <path d="M4 16V8M10 19V5M16 14V10M22 20H2" />
        <path d="m18 7 3-3M17 4h4v4" />
      </svg>
    );
  }

  if (name === "mail") {
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  if (name === "github") {
    return (
      <svg {...common}>
        <path d="M9 19c-4.5 1.4-4.5-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.6-.3 5.3-1.3 5.3-5.9 0-1.3-.5-2.4-1.3-3.3.1-.3.6-1.7-.1-3.3 0 0-1.1-.3-3.6 1.3a12.5 12.5 0 0 0-6.5 0C5.8 2.7 4.7 3 4.7 3 4 4.6 4.5 6 4.6 6.3a4.8 4.8 0 0 0-1.3 3.3c0 4.6 2.8 5.6 5.4 5.9-.3.3-.6.8-.6 1.6V21" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1" />
      <path d="M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1" />
    </svg>
  );
}
