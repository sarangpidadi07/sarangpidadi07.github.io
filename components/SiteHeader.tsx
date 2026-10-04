"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About", index: "01" },
  { href: "#experience", label: "Experience", index: "02" },
  { href: "#work", label: "Work", index: "03" },
  { href: "#technology", label: "Stack", index: "04" },
  { href: "#contact", label: "Contact", index: "05" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);

      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        if (window.scrollY < window.innerHeight * 0.58) {
          setActive("");
          return;
        }

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) setActive("#" + visible.target.id);
      },
      {
        rootMargin: "-28% 0px -58% 0px",
        threshold: [0, 0.05, 0.2],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    if (open) {
      window.addEventListener("keydown", onKeyDown);
      document.body.classList.add("nav-open");
    } else {
      document.body.classList.remove("nav-open");
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("nav-open");
    };
  }, [open]);

  return (
    <header className={scrolled ? "site-header is-scrolled" : "site-header"}>
      <span
        className="scroll-progress"
        aria-hidden="true"
        style={{ transform: "scaleX(" + progress + ")" }}
      />
      <div className="shell header-inner">
        <a className="brand" href="#top" aria-label="Sarang Pidadi, back to top">
          Sarang Pidadi<span>.</span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="site-navigation"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="menu-icon" aria-hidden="true">
            <i />
            <i />
          </span>
          <span>{open ? "Close" : "Menu"}</span>
        </button>

        <nav
          id="site-navigation"
          className={open ? "site-nav is-open" : "site-nav"}
          aria-label="Primary navigation"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.href ? "is-active" : ""}
              aria-current={active === link.href ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              <span className="nav-index" aria-hidden="true">{link.index}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
