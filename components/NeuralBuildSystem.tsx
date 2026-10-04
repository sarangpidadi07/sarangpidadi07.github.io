import type { CSSProperties } from "react";

import LineIcon from "@/components/LineIcon";

const nodes = [
  { label: "Understand", meta: "Context", icon: "idea" as const, className: "cortex-node-1", delay: "0s" },
  { label: "Design", meta: "Structure", icon: "architecture" as const, className: "cortex-node-2", delay: "0.8s" },
  { label: "Build", meta: "Execution", icon: "code" as const, className: "cortex-node-3", delay: "1.6s" },
  { label: "Secure", meta: "Guardrails", icon: "shield" as const, className: "cortex-node-4", delay: "2.4s" },
  { label: "Refine", meta: "Evaluation", icon: "refine" as const, className: "cortex-node-5", delay: "3.2s" },
  { label: "Scale", meta: "Adaptation", icon: "scale" as const, className: "cortex-node-6", delay: "4s" },
];

export default function NeuralBuildSystem() {
  return (
    <div
      className="cortex-system"
      role="img"
      aria-label="Adaptive engineering intelligence map connecting context, structure, execution, guardrails, evaluation, and adaptation around a product system core"
    >
      <div className="cortex-topline">
        <span>Adaptive engineering graph</span>
        <span className="cortex-live">
          <i aria-hidden="true" />
          signal online
        </span>
      </div>

      <div className="cortex-map">
        <div className="cortex-field" aria-hidden="true" />
        <div className="cortex-scan" aria-hidden="true" />
        <div className="cortex-orbit cortex-orbit-a" aria-hidden="true" />
        <div className="cortex-orbit cortex-orbit-b" aria-hidden="true" />
        <div className="cortex-orbit cortex-orbit-c" aria-hidden="true" />

        <svg className="cortex-network" viewBox="0 0 600 600" aria-hidden="true">
          <defs>
            <radialGradient id="cortexCoreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(85,199,223,0.28)" />
              <stop offset="58%" stopColor="rgba(85,199,223,0.06)" />
              <stop offset="100%" stopColor="rgba(85,199,223,0)" />
            </radialGradient>
          </defs>

          <circle cx="300" cy="300" r="118" fill="url(#cortexCoreGlow)" />

          <g className="cortex-spokes">
            <path d="M300 300 C248 248 218 203 178 135" />
            <path d="M300 300 C352 248 382 203 422 135" />
            <path d="M300 300 C210 300 151 300 76 300" />
            <path d="M300 300 C390 300 449 300 524 300" />
            <path d="M300 300 C248 352 218 397 178 465" />
            <path d="M300 300 C352 352 382 397 422 465" />
          </g>

          <g className="cortex-feedback">
            <path d="M178 135 C260 80 340 80 422 135" />
            <path d="M422 135 C500 182 536 235 524 300" />
            <path d="M524 300 C534 368 500 419 422 465" />
            <path d="M422 465 C342 520 258 520 178 465" />
            <path d="M178 465 C101 420 66 367 76 300" />
            <path d="M76 300 C65 233 101 182 178 135" />
          </g>

          <g className="cortex-attention">
            <path d="M178 135 C286 210 314 390 422 465" />
            <path d="M422 135 C314 210 286 390 178 465" />
            <path d="M76 300 C196 222 404 222 524 300" />
            <path d="M178 135 C280 315 322 315 422 135" />
          </g>

          <g className="cortex-activations">
            <circle cx="254" cy="206" r="3.2" />
            <circle cx="346" cy="212" r="2.6" />
            <circle cx="214" cy="298" r="2.4" />
            <circle cx="384" cy="310" r="3.2" />
            <circle cx="266" cy="390" r="2.8" />
            <circle cx="336" cy="392" r="2.4" />
            <circle cx="300" cy="164" r="2.2" />
            <circle cx="300" cy="438" r="2.2" />
            <circle cx="198" cy="244" r="2" />
            <circle cx="402" cy="244" r="2" />
          </g>

          <circle className="cortex-signal cortex-signal-1" r="5">
            <animateMotion dur="4.8s" repeatCount="indefinite" path="M300 300 C248 248 218 203 178 135" />
          </circle>
          <circle className="cortex-signal cortex-signal-2" r="4">
            <animateMotion dur="5.4s" begin="-1.1s" repeatCount="indefinite" path="M178 135 C260 80 340 80 422 135" />
          </circle>
          <circle className="cortex-signal cortex-signal-3" r="4">
            <animateMotion dur="5.8s" begin="-2.4s" repeatCount="indefinite" path="M422 135 C500 182 536 235 524 300" />
          </circle>
          <circle className="cortex-signal cortex-signal-4" r="5">
            <animateMotion dur="5.1s" begin="-3.2s" repeatCount="indefinite" path="M524 300 C534 368 500 419 422 465" />
          </circle>
          <circle className="cortex-signal cortex-signal-5" r="4">
            <animateMotion dur="5.7s" begin="-4.1s" repeatCount="indefinite" path="M422 465 C342 520 258 520 178 465" />
          </circle>
          <circle className="cortex-signal cortex-signal-6" r="4">
            <animateMotion dur="5.3s" begin="-4.8s" repeatCount="indefinite" path="M178 465 C101 420 66 367 76 300" />
          </circle>
        </svg>

        <div className="cortex-core">
          <span className="cortex-core-ring cortex-core-ring-a" aria-hidden="true" />
          <span className="cortex-core-ring cortex-core-ring-b" aria-hidden="true" />

          <svg className="cortex-brain" viewBox="0 0 120 92" aria-hidden="true">
            <path
              className="cortex-brain-outline cortex-brain-left"
              d="M57 17c-9-9-24-7-29 5-10 1-15 12-10 21-7 8-4 21 6 25 0 11 11 18 21 14 6 7 13 5 15-2V24c0-3-1-5-3-7Z"
            />
            <path
              className="cortex-brain-outline cortex-brain-right"
              d="M63 17c9-9 24-7 29 5 10 1 15 12 10 21 7 8 4 21-6 25 0 11-11 18-21 14-6 7-13 5-15-2V24c0-3 1-5 3-7Z"
            />
            <path className="cortex-brain-path" d="M35 31c8 1 13 5 16 12M27 48c8-4 16-2 23 4M32 66c8-5 14-5 20 0" />
            <path className="cortex-brain-path" d="M85 31c-8 1-13 5-16 12M93 48c-8-4-16-2-23 4M88 66c-8-5-14-5-20 0" />
            <circle className="cortex-brain-point cortex-brain-point-1" cx="39" cy="30" r="2.5" />
            <circle className="cortex-brain-point cortex-brain-point-2" cx="29" cy="50" r="2.5" />
            <circle className="cortex-brain-point cortex-brain-point-3" cx="44" cy="68" r="2.5" />
            <circle className="cortex-brain-point cortex-brain-point-4" cx="81" cy="30" r="2.5" />
            <circle className="cortex-brain-point cortex-brain-point-5" cx="91" cy="50" r="2.5" />
            <circle className="cortex-brain-point cortex-brain-point-6" cx="76" cy="68" r="2.5" />
          </svg>

          <span className="cortex-core-kicker">Product intelligence</span>
          <strong>System core</strong>
          <small>context · constraints · feedback</small>
        </div>

        {nodes.map((node, index) => (
          <div
            key={node.label}
            className={"cortex-node " + node.className}
            style={{ "--node-delay": node.delay } as CSSProperties}
          >
            <span className="cortex-node-pulse" aria-hidden="true" />
            <span className="cortex-node-icon">
              <LineIcon name={node.icon} size={18} />
            </span>
            <span className="cortex-node-copy">
              <small>{String(index + 1).padStart(2, "0")} · {node.meta}</small>
              <strong>{node.label}</strong>
            </span>
          </div>
        ))}

        <span className="cortex-particle cortex-particle-a" aria-hidden="true" />
        <span className="cortex-particle cortex-particle-b" aria-hidden="true" />
        <span className="cortex-particle cortex-particle-c" aria-hidden="true" />
      </div>

      <div className="cortex-flow" aria-hidden="true">
        <span>Context</span><i>→</i>
        <span>Plan</span><i>→</i>
        <span>Execute</span><i>→</i>
        <span>Evaluate</span><i>→</i>
        <span>Adapt</span>
      </div>
    </div>
  );
}
