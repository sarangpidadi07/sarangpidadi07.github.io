import LineIcon from "@/components/LineIcon";

const nodes = [
  { label: "Understand", icon: "idea" as const, className: "neural-node-1", delay: "0s" },
  { label: "Design", icon: "architecture" as const, className: "neural-node-2", delay: "1s" },
  { label: "Build", icon: "code" as const, className: "neural-node-3", delay: "2s" },
  { label: "Secure", icon: "shield" as const, className: "neural-node-4", delay: "3s" },
  { label: "Refine", icon: "refine" as const, className: "neural-node-5", delay: "4s" },
  { label: "Scale", icon: "scale" as const, className: "neural-node-6", delay: "5s" },
];

export default function NeuralBuildSystem() {
  return (
    <div
      className="neural-system"
      role="img"
      aria-label="Animated neural software build loop showing Understand, Design, Build, Secure, Refine, and Scale around a central product core"
    >
      <div className="neural-caption">
        <span>Neural build loop</span>
        <span className="neural-status">
          <i aria-hidden="true" />
          adaptive system
        </span>
      </div>

      <div className="neural-stage">
        <div className="neural-aura" aria-hidden="true" />
        <div className="neural-ring neural-ring-outer" aria-hidden="true" />
        <div className="neural-ring neural-ring-middle" aria-hidden="true" />
        <div className="neural-ring neural-ring-inner" aria-hidden="true" />

        <svg
          className="neural-connections"
          viewBox="0 0 600 600"
          aria-hidden="true"
        >
          <g className="attention-web">
            <path d="M300 300 C245 248 215 205 180 145" />
            <path d="M300 300 C355 248 385 205 420 145" />
            <path d="M300 300 C210 298 150 298 94 300" />
            <path d="M300 300 C390 298 450 298 506 300" />
            <path d="M300 300 C245 352 215 400 180 455" />
            <path d="M300 300 C355 352 385 400 420 455" />
            <path d="M180 145 C255 92 345 92 420 145" />
            <path d="M420 145 C500 196 522 245 506 300" />
            <path d="M506 300 C490 376 465 414 420 455" />
            <path d="M420 455 C345 508 255 508 180 455" />
            <path d="M180 455 C105 410 80 360 94 300" />
            <path d="M94 300 C80 240 106 190 180 145" />
          </g>

          <g className="attention-cross">
            <path d="M180 145 C270 210 330 390 420 455" />
            <path d="M420 145 C330 210 270 390 180 455" />
            <path d="M94 300 C220 215 380 215 506 300" />
          </g>

          <g className="activation-cloud">
            <circle cx="252" cy="216" r="3" />
            <circle cx="338" cy="210" r="2.5" />
            <circle cx="222" cy="314" r="2.5" />
            <circle cx="380" cy="318" r="3" />
            <circle cx="272" cy="390" r="2.5" />
            <circle cx="330" cy="398" r="2.5" />
            <circle cx="300" cy="172" r="2" />
            <circle cx="300" cy="430" r="2" />
          </g>

          <circle className="signal signal-1" r="5">
            <animateMotion dur="4.8s" repeatCount="indefinite" path="M300 300 C245 248 215 205 180 145" />
          </circle>
          <circle className="signal signal-2" r="4">
            <animateMotion dur="5.2s" begin="-1.2s" repeatCount="indefinite" path="M180 145 C255 92 345 92 420 145" />
          </circle>
          <circle className="signal signal-3" r="4">
            <animateMotion dur="5.6s" begin="-2.1s" repeatCount="indefinite" path="M420 145 C500 196 522 245 506 300" />
          </circle>
          <circle className="signal signal-4" r="5">
            <animateMotion dur="5.1s" begin="-3s" repeatCount="indefinite" path="M506 300 C490 376 465 414 420 455" />
          </circle>
          <circle className="signal signal-5" r="4">
            <animateMotion dur="5.8s" begin="-4s" repeatCount="indefinite" path="M420 455 C345 508 255 508 180 455" />
          </circle>
          <circle className="signal signal-6" r="4">
            <animateMotion dur="5.4s" begin="-4.8s" repeatCount="indefinite" path="M180 455 C105 410 80 360 94 300" />
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

          <strong>Product core</strong>
          <small>intent → system → value</small>
        </div>

        {nodes.map((node, index) => (
          <div
            key={node.label}
            className={"neural-node " + node.className}
            style={{ "--node-delay": node.delay } as React.CSSProperties}
          >
            <span className="neural-node-orbit" aria-hidden="true" />
            <span className="neural-node-icon">
              <LineIcon name={node.icon} size={18} />
            </span>
            <span className="neural-node-copy">
              <small>{String(index + 1).padStart(2, "0")}</small>
              <strong>{node.label}</strong>
            </span>
          </div>
        ))}
      </div>

      <div className="neural-cycle" aria-hidden="true">
        <span>Observe</span>
        <i>→</i>
        <span>Reason</span>
        <i>→</i>
        <span>Build</span>
        <i>→</i>
        <span>Learn</span>
      </div>
    </div>
  );
}
