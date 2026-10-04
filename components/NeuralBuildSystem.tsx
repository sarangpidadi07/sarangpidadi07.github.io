import type { CSSProperties } from "react";

import LineIcon from "@/components/LineIcon";

const nodes = [
  { label: "Understand", meta: "Context", icon: "idea" as const, className: "neural-node-1", delay: "0s" },
  { label: "Design", meta: "Structure", icon: "architecture" as const, className: "neural-node-2", delay: "0.9s" },
  { label: "Build", meta: "Execution", icon: "code" as const, className: "neural-node-3", delay: "1.8s" },
  { label: "Secure", meta: "Guardrails", icon: "shield" as const, className: "neural-node-4", delay: "2.7s" },
  { label: "Refine", meta: "Evaluate", icon: "refine" as const, className: "neural-node-5", delay: "3.6s" },
  { label: "Scale", meta: "Adapt", icon: "scale" as const, className: "neural-node-6", delay: "4.5s" },
];

export default function NeuralBuildSystem() {
  return (
    <div
      className="neural-system"
      role="img"
      aria-label="Animated system intelligence map showing context, structure, execution, guardrails, evaluation, and adaptation around a central product system"
    >
      <div className="neural-caption">
        <span>System intelligence map</span>
        <span className="neural-status">
          <i aria-hidden="true" />
          continuous feedback
        </span>
      </div>

      <div className="neural-stage">
        <div className="neural-aura" aria-hidden="true" />
        <div className="neural-scan" aria-hidden="true" />
        <div className="neural-ring neural-ring-outer" aria-hidden="true" />
        <div className="neural-ring neural-ring-middle" aria-hidden="true" />
        <div className="neural-ring neural-ring-inner" aria-hidden="true" />

        <svg className="neural-connections" viewBox="0 0 600 600" aria-hidden="true">
          <defs>
            <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(85,199,223,0.22)" />
              <stop offset="100%" stopColor="rgba(85,199,223,0)" />
            </radialGradient>
          </defs>

          <circle cx="300" cy="300" r="104" fill="url(#coreGlow)" opacity="0.48" />

          <g className="attention-web">
            <path d="M300 300 C246 250 212 205 180 145" />
            <path d="M300 300 C354 250 388 205 420 145" />
            <path d="M300 300 C208 298 148 299 94 300" />
            <path d="M300 300 C392 298 452 299 506 300" />
            <path d="M300 300 C246 350 212 397 180 455" />
            <path d="M300 300 C354 350 388 397 420 455" />
          </g>

          <g className="feedback-loop">
            <path d="M180 145 C260 88 340 88 420 145" />
            <path d="M420 145 C500 198 521 248 506 300" />
            <path d="M506 300 C491 373 465 414 420 455" />
            <path d="M420 455 C341 511 259 511 180 455" />
            <path d="M180 455 C106 411 79 362 94 300" />
            <path d="M94 300 C79 239 105 190 180 145" />
          </g>

          <g className="attention-cross">
            <path d="M180 145 C275 210 325 390 420 455" />
            <path d="M420 145 C325 210 275 390 180 455" />
            <path d="M94 300 C218 215 382 215 506 300" />
          </g>

          <g className="activation-cloud">
            <circle cx="247" cy="214" r="3" />
            <circle cx="344" cy="214" r="2.5" />
            <circle cx="218" cy="308" r="2.5" />
            <circle cx="383" cy="309" r="3" />
            <circle cx="268" cy="389" r="2.5" />
            <circle cx="334" cy="392" r="2.5" />
            <circle cx="300" cy="173" r="2" />
            <circle cx="300" cy="428" r="2" />
          </g>

          <circle className="signal signal-1" r="5">
            <animateMotion dur="4.7s" repeatCount="indefinite" path="M300 300 C246 250 212 205 180 145" />
          </circle>
          <circle className="signal signal-2" r="4">
            <animateMotion dur="5.3s" begin="-1s" repeatCount="indefinite" path="M180 145 C260 88 340 88 420 145" />
          </circle>
          <circle className="signal signal-3" r="4">
            <animateMotion dur="5.4s" begin="-2.2s" repeatCount="indefinite" path="M420 145 C500 198 521 248 506 300" />
          </circle>
          <circle className="signal signal-4" r="5">
            <animateMotion dur="5s" begin="-3s" repeatCount="indefinite" path="M506 300 C491 373 465 414 420 455" />
          </circle>
          <circle className="signal signal-5" r="4">
            <animateMotion dur="5.7s" begin="-4s" repeatCount="indefinite" path="M420 455 C341 511 259 511 180 455" />
          </circle>
          <circle className="signal signal-6" r="4">
            <animateMotion dur="5.2s" begin="-4.8s" repeatCount="indefinite" path="M180 455 C106 411 79 362 94 300" />
          </circle>
        </svg>

        <div className="neural-core">
          <div className="neural-core-orbit" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <svg className="brain-mark" viewBox="0 0 120 92" aria-hidden="true">
            <path
              className="brain-outline brain-left"
              d="M57 17c-9-9-24-7-29 5-10 1-15 12-10 21-7 8-4 21 6 25 0 11 11 18 21 14 6 7 13 5 15-2V24c0-3-1-5-3-7Z"
            />
            <path
              className="brain-outline brain-right"
              d="M63 17c9-9 24-7 29 5 10 1 15 12 10 21 7 8 4 21-6 25 0 11-11 18-21 14-6 7-13 5-15-2V24c0-3 1-5 3-7Z"
            />
            <path className="brain-path" d="M35 31c8 1 13 5 16 12M27 48c8-4 16-2 23 4M32 66c8-5 14-5 20 0" />
            <path className="brain-path" d="M85 31c-8 1-13 5-16 12M93 48c-8-4-16-2-23 4M88 66c-8-5-14-5-20 0" />
            <circle className="brain-point brain-point-1" cx="39" cy="30" r="2.5" />
            <circle className="brain-point brain-point-2" cx="29" cy="50" r="2.5" />
            <circle className="brain-point brain-point-3" cx="44" cy="68" r="2.5" />
            <circle className="brain-point brain-point-4" cx="81" cy="30" r="2.5" />
            <circle className="brain-point brain-point-5" cx="91" cy="50" r="2.5" />
            <circle className="brain-point brain-point-6" cx="76" cy="68" r="2.5" />
          </svg>

          <strong>Product system</strong>
          <small>context + constraints + feedback</small>
        </div>

        {nodes.map((node, index) => (
          <div
            key={node.label}
            className={"neural-node " + node.className}
            style={{ "--node-delay": node.delay } as CSSProperties}
          >
            <span className="neural-node-orbit" aria-hidden="true" />
            <span className="neural-node-icon">
              <LineIcon name={node.icon} size={18} />
            </span>
            <span className="neural-node-copy">
              <small>{String(index + 1).padStart(2, "0")} · {node.meta}</small>
              <strong>{node.label}</strong>
            </span>
          </div>
        ))}
      </div>

      <div className="neural-cycle" aria-hidden="true">
        <span>Context</span>
        <i>→</i>
        <span>Plan</span>
        <i>→</i>
        <span>Execute</span>
        <i>→</i>
        <span>Evaluate</span>
        <i>→</i>
        <span>Adapt</span>
      </div>
    </div>
  );
}
