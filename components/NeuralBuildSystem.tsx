import LineIcon from "@/components/LineIcon";

const nodes = [
  { label: "Understand", icon: "idea" as const, className: "neural-node-1" },
  { label: "Design", icon: "architecture" as const, className: "neural-node-2" },
  { label: "Build", icon: "code" as const, className: "neural-node-3" },
  { label: "Secure", icon: "shield" as const, className: "neural-node-4" },
  { label: "Refine", icon: "refine" as const, className: "neural-node-5" },
  { label: "Scale", icon: "scale" as const, className: "neural-node-6" },
];

export default function NeuralBuildSystem() {
  return (
    <div
      className="neural-system"
      role="img"
      aria-label="Animated circular software build system showing Understand, Design, Build, Secure, Refine, and Scale around a central product core"
    >
      <div className="neural-system-topbar">
        <span>Software build system</span>
        <span className="neural-status">
          <i aria-hidden="true" />
          adaptive loop
        </span>
      </div>

      <div className="neural-stage">
        <div className="neural-glow" aria-hidden="true" />
        <div className="neural-ring neural-ring-outer" aria-hidden="true" />
        <div className="neural-ring neural-ring-inner" aria-hidden="true" />

        <svg
          className="neural-connections"
          viewBox="0 0 600 600"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="brainGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(85,199,223,0.42)" />
              <stop offset="100%" stopColor="rgba(85,199,223,0)" />
            </radialGradient>
          </defs>

          <circle cx="300" cy="300" r="84" fill="url(#brainGlow)" opacity="0.38" />

          <path className="neural-link link-1" d="M300 300 C235 255 206 210 180 145" />
          <path className="neural-link link-2" d="M300 300 C360 252 395 205 420 145" />
          <path className="neural-link link-3" d="M300 300 C205 300 150 300 94 300" />
          <path className="neural-link link-4" d="M300 300 C395 300 450 300 506 300" />
          <path className="neural-link link-5" d="M300 300 C238 352 207 397 180 455" />
          <path className="neural-link link-6" d="M300 300 C362 352 395 397 420 455" />

          <path className="neural-arc arc-1" d="M180 145 C300 80 420 145 506 300" />
          <path className="neural-arc arc-2" d="M506 300 C420 455 300 520 180 455" />
          <path className="neural-arc arc-3" d="M180 455 C92 378 82 230 180 145" />

          <circle className="signal signal-1" r="5">
            <animateMotion dur="4.8s" repeatCount="indefinite" path="M300 300 C235 255 206 210 180 145" />
          </circle>
          <circle className="signal signal-2" r="4">
            <animateMotion dur="5.6s" begin="-1.4s" repeatCount="indefinite" path="M300 300 C360 252 395 205 420 145" />
          </circle>
          <circle className="signal signal-3" r="4">
            <animateMotion dur="5.2s" begin="-2.6s" repeatCount="indefinite" path="M300 300 C395 300 450 300 506 300" />
          </circle>
          <circle className="signal signal-4" r="5">
            <animateMotion dur="6s" begin="-3.2s" repeatCount="indefinite" path="M300 300 C362 352 395 397 420 455" />
          </circle>
        </svg>

        <div className="neural-core">
          <div className="neural-core-orbit" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <span className="neural-core-icon">
            <LineIcon name="idea" size={26} />
          </span>
          <strong>Product core</strong>
          <small>idea → system → value</small>
        </div>

        {nodes.map((node, index) => (
          <div
            key={node.label}
            className={"neural-node " + node.className}
          >
            <span className="neural-node-icon">
              <LineIcon name={node.icon} size={18} />
            </span>
            <span className="neural-node-copy">
              <small>{String(index + 1).padStart(2, "0")}</small>
              <strong>{node.label}</strong>
            </span>
          </div>
        ))}

        <span className="neural-synapse synapse-1" aria-hidden="true" />
        <span className="neural-synapse synapse-2" aria-hidden="true" />
        <span className="neural-synapse synapse-3" aria-hidden="true" />
        <span className="neural-synapse synapse-4" aria-hidden="true" />
        <span className="neural-synapse synapse-5" aria-hidden="true" />
      </div>

      <div className="neural-system-footer">
        <span>Think</span>
        <i aria-hidden="true">→</i>
        <span>Engineer</span>
        <i aria-hidden="true">→</i>
        <span>Ship</span>
        <i aria-hidden="true">→</i>
        <span>Learn</span>
      </div>
    </div>
  );
}
